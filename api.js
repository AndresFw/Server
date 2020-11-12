const express = require('express')
const app = express()
const port = 5001

app.use(express.json())

app.get('/parks/:city', (req, res) => {
    if(req.params.city === 'tunja'){
        res.send('Parque de los novios, laguna park')
    }
  res.send('No hay registros')
})

app.post('/parks/', (req, res) => {
    console.log(req.body.name)
  res.send('404')
})

app.post('/info/', (req, res) => {
    console.log(req.get('type'))
  res.send('404')
})

app.get('/hotels/', (req, res) => {
    console.log(req.query.firstn)
  res.send('404')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})