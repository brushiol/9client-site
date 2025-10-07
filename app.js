import express from "express"; //npm i express
import cors from "cors"; //npm i cors
export const app = express();
export const port = 36739;
app.use(cors());
app.use(express.json());
export function request(request, url, func) {
    app[request](url, (req, res) => {
        var body = []
        req.on('data', (chunk) => {
            body.push(chunk)
            if (body.length > 1.5e6) {
                request.connection.destroy();
                return res.sendStatus(413)
            }
        }).on('end', async () => {
            body = Buffer.concat(body);
            if (body && body.length > 0) {
                func(body, res)
            } else {
                return res.sendStatus(410)
            }
        });
    })
}
app.listen(port);