const fsUtils = require('../../utils/fs')
const { resolve } = require('path')
const rootPath = resolve()
const initGlobal = require('../../main')
initGlobal()

function fileInterFace (http) {
  if (!http) {
    throw console.error(`http is not undefined`)
  }
  http.get('/getData', (req, res) => {
    const data = fsUtils.syncReadFile(rootPath + '/utils/差旅费报销单及填列明细.xlsx')
    res.send({ data, msg: '请求成功', status: 200 })
  })
}

module.exports = fileInterFace