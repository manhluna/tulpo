const express = require('express')
const app = express()
const http = require('http').createServer(app)
const bodyParser = require('body-parser')

const Telegraf = require('telegraf')
const bots = new Telegraf('997188454:AAGcmatqy0uQkBoocDUUaDL5ConzKZGql0A')
const Telegram = require('telegraf/telegram')
const telegram = new Telegram('997188454:AAGcmatqy0uQkBoocDUUaDL5ConzKZGql0A')
bots.start((ctx) => {
    ctx.reply('Chào Sếp Lộc')
})

app.use(express.static('./public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.set('view engine', 'ejs')
app.set('views', './public')

app.get('/', async (req, res) => {
    res.render('index')
})

app.post('/', async (req, res) => {
  var htmlContent = req.body
  telegram.sendMessage(278948791, htmlContent.mota)
  telegram.sendMessage(278948791, htmlContent.pt)
  telegram.sendMessage(278948791, htmlContent.info)
  res.sendStatus(200)
})

http.listen(8080,()=>{
  console.log(`Listening on HTTP Port: 8080`);
})
bots.launch()