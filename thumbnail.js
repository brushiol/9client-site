import { app, port, request } from "./app.js";
import { attempt, makekey } from "./utils.js";
import rcc from './rcctalk.js'; //https://github.com/PlaceholderLabs/JSServiceSoap
import fs from "fs/promises"; //core
import events from 'events' //core
import zlib from 'zlib' //npm i zlib

class obj extends events {
    constructor() {
        super();
        this._data = {};
    }
    set(i, v) {
        this._data[i] = v;
        this.emit('change', i, v);
    }
    get(i) {
        return this._data[i];
    }
    remove(i) {
        delete this._data[i]
    }
}

var keys = new obj()
var scripts = {
    avatar: {
        dir: "./game/render/avatar.lua",
        source: ""
    },
}

for (var [i, v] of Object.entries(scripts)) {
    var src = ""
    try {
        src = await fs.readFile(v.dir, 'utf8');
    } catch (err) {
        src = `error([[${err}]])`
    }
    scripts[i].source = src
}
function listenforkey(key, on) {
    var listener = (i, v) => {
        if (i == key) {
            keys.removeListener("change", listener)
            on(v)
            keys.remove(i)
        }
    }
    keys.set(key, { used: false })
    keys.on('change', listener);
}

request("post", '/thumbnail/avatar', async (body, res) => {
    var scr = scripts.avatar
    body = body.toString()
    if (body) {
        var [succ, jsn] = attempt(JSON.parse, body)
        if (jsn) {
            if (jsn.Name && jsn.Data) {
                jsn = { [jsn.Name]: jsn.Data }
            }
            rcc.CloseExpiredJobs()
            const key = makekey(16)
            const src = scr.source
                .replace("<<PORT>>", port)
                .replace("<<KEY_RCC>>", key)
                .replace("<<JSON>>", body)
            rcc.OpenJob(Date.now(), src, "60");
            listenforkey(key, (v) => {
                res.send(v.data)
            })
        } else {
            console.log(jsn)
            return res.sendStatus(404)
        }
    } else {
        return res.sendStatus(413)
    }
});

request("post", "/thumbnail/rcchandler", (body, res) => {
    try {
        const unzip = zlib.gunzipSync(body).toString('utf8');
        var arr
        try {
            arr = JSON.parse(unzip)
        } catch (e) {
            console.error(e)
        }
        if (arr.key && arr.base64) {
            keys.set(arr.key, { data: arr.base64, used: true })
        } else {
            console.log(arr)
        }
    } catch (e) {
        console.warn(e)
    }
})
/*
RccService_trustcheckpatched.exe -console -start
*/