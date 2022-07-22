const express = require('express')
const port = 3000
const http = express()
http.get('/', (req, res) => res.send('success'))

http.listen(port, () => {
  console.log('本地服务启动')
})

const fileInterFace = require('./interface/fs/index')
fileInterFace(http)