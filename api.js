const express = require('express')
const app = express()
const port = 5001

app.get('/parks/:city', (req, res) => {
    if(req.params.city === 'tunja'){
        res.send('Parque de los novios, laguna park')
        console.log(req.params.city)
    }
  res.send('No hay registros')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})