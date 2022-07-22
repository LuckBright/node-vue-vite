const fs = require('fs')
const path = require('path')
const nodeXlsx = require('node-xlsx')

const initGlobal = () => {
  global = {
    ...global,
    fs,
    path,
    nodeXlsx
  }
}

module.exports = initGlobal