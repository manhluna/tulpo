const express = require('express')
const app = express()
const http = require('http').createServer(app)
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')

app.use(express.static('./public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.set('view engine', 'ejs')
app.set('views', './public')

var sendMail = (htmlContent) => {
  let transport = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // use SSL-TLS
      auth: {
          user: "wbank.exchange@gmail.com",
          pass: "@huychien"
      }
  });

  let options = {
      from: "wbank.exchange@gmail.com",
      to: "tulpovn@gmail.com",
      subject: "TULPO | Thông tin báo giá",
      html: `
        ${htmlContent.mota}
        ${htmlContent.pt}
        ${htmlContent.info}
      `
  };
  return transport.sendMail(options);
};

app.get('/', async (req, res) => {
    res.render('index')
})

app.post('/', async (req, res) => {
  var htmlContent = req.body;
  sendMail(htmlContent);
  res.sendStatus(200)
})

http.listen(8080,()=>{
  console.log(`Listening on HTTP Port: 8080`);
})