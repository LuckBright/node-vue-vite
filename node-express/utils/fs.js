/**
 * 同步处理普通文件流，不包含 xlsx
 * @param {*} fs 文件依赖
 * @param {string} url 文件路径
 * @returns string
 */
const syncReadFile = (url) => {
  let data = null
  try {
    const extname = global.path.extname(url)
    if (['.xlsx', '.xls'].includes(extname)) {
       data = parseXlsx(url)
    } else {
      data = global.fs.readFileSync(url, 'utf8')
    }
  } catch (error) {
    console.error('读取文件出错：' + error.message)
  }
  return data
}

const parseXlsx = (url) => {
  //解析excel, 获取到所有sheets
  const sheets = global.nodeXlsx.parse(url)

  // 打印页面信息..
  const sheet = sheets[2]
  let headerObj = {}
  let obj = {}
  sheet.data[0].forEach((header, index) => {
    headerObj[index] = header
    obj[index] = ''
  })
  let data = []
  sheet.data.forEach((item, index) => {
    if (index && item.length > 1) {
      item.forEach((content, index) => {
        obj[index] = content || ''
      })
      data.push(obj)
    }
  })
  return data
}



const fsUtils = {
  syncReadFile
}

module.exports = fsUtils