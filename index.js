const express = require('express')
const app = express()
const port = 3000

const fs = require('fs')

app.get('/js/vue.js', (req, res) => res.send(fs.readFileSync('node_modules/vue/dist/vue.min.js', 'utf-8')))

app.use(express.static('public'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))