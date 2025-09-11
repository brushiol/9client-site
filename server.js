const escapeHtml = require('escape-html')
const express = require('express')
const session = require('express-session')
const path = require('path')
const fs = require("fs")
const app = express()
const port = 36739

app.use(session({
  secret: 'f4c2-u-#d6na3d_tra0*!', //u=4 i=5 o=6 p=* j=1 k=2 l=3 ;=- m=0 /=+ 0=/ (my numpad keys)
  resave: false,
  saveUninitialized: true
}))
app.use('/site', express.static('site'))

function auth(req, res, next) {
  if (req.session.user) next()
  else next('route')
}
function signupf(req, res) {
    res.sendFile(path.join(__dirname,"site/signup/index.html"))
}
async function getbyauth(path, w, out) {
    app.get(path, auth, w || signupf)
    app.get(path, out || signupf)
}
getbyauth('/signup')
getbyauth(
    '/',
    function (req, res) {
        fs.readFile("./site/index.html", 'utf8', (err, data) => {
            data = data.replace("logged in as: qwerty","logged in as: " + escapeHtml(req.session.user))
            res.send(data)
        })
    }
)
getbyauth(
    '/avatar',
    function (req, res) {
        res.sendFile(path.join(__dirname,"site/avatar/index.html"))
    }
)
getbyauth(
    '/download',
    function (req, res) {
        res.sendFile(path.join(__dirname,"site/download/index.html"))
    }
)

app.post('/login', express.urlencoded({ extended: false }), function (req, res) {
  req.session.regenerate(function (err) {
    if (err) next(err)
    req.session.user = req.body.user
    req.session.save(function (err) {
      if (err) return next(err)
      res.redirect('/')
    })
  })
})
app.post('/signup', express.urlencoded({ extended: false }), function (req, res) {
  req.session.regenerate(function (err) {
    if (err) next(err)
    req.session.user = req.body.user
    req.session.save(function (err) {
      if (err) return next(err)
      res.redirect('/')
    })
  })
})

app.get('/logout', function (req, res, next) {
  req.session.user = null
  req.session.save(function (err) {
    if (err) next(err)
    req.session.regenerate(function (err) {
      if (err) next(err)
      res.redirect('/')
    })
  })
})

app.listen(port, () => {
    console.log(`server is running on http://localhost:${port}`)
})
