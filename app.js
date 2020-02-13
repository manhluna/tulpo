const express = require('express')
const app = express()
const http = require('http').createServer(app)
const bodyParser = require('body-parser')

app.use(express.static('./public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.set('view engine', 'ejs')
app.set('views', './public')

app.get('/', async (req, res) => {
    res.render('index')
})

app.post('/', async (req, res) => {
  console.log(req.body)
  res.sendStatus(200)
})

http.listen(8080,()=>{
  console.log(`Listening on HTTP Port: 8080`);
})