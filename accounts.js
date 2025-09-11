var escapeHtml = require('escape-html')
var express = require('express')
var session = require('express-session')
var fs = require("fs")
var app = express()
const port = 36739

app.use(session({
  secret: 'f4c2-u-#d6na3d_tra0*!', //u=4 i=5 o=6 p=* j=1 k=2 l=3 ;=- m=0 /=+ 0=/ (my numpad keys)
  resave: false,
  saveUninitialized: true
}))

// middleware to test if authenticated
function auth (req, res, next) {
  if (req.session.user) next()
  else next('route')
}

app.get('/', auth, function (req, res) {
    res.sendFile("../site/index.html")
})
app.get('/', function (req, res) {
    res.sendFile("../site/signup/index.html")
})
app.get('/avatar', auth, function (req, res) {
    res.sendFile("../site/avatar/index.html")
})
app.get('/download', auth, function (req, res) {
    res.sendFile("../site/download/index.html")
})

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

app.listen(port)
