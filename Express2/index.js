const express = require('express')
const bodyParser=require("body-parser")
const port = 3000
const app = express()
app.use(bodyParser.json())

app.get('/', function (req, res)  {
  res.send('Hello World!')
})
app.get('/route-handler', function (req, res)  {
  res.send('Hello World my laddus!')
})
app.listen(port)




