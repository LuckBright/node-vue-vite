const express = require('express')
const port = 3000
const http = express()
http.get('/', (req, res) => res.send('success'))

http.listen(port, () => {
  console.log('本地服务启动')
})

http.get('/getData', (req, res) => {
  res.send({ data: { a: '1' }, msg: '请求成功', status: 200 })
})