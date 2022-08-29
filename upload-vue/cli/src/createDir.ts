import axios from 'axios'
import { resolve } from 'path'
import { createTemp } from './creaTemplate'
import { lightBlue, red } from 'kolorist'
import { onCreate } from './create'

axios.defaults.baseURL = "https://api.github.com"

export const createDir = async (name: string) => {
  try {
    const res = await axios.get(
      "/repos/webfansplz/vuejs-challenges/contents/questions"
    )
    if (res.data) {
      let filArr = res.data as any[]
      const isFindFileContent = filArr.find((item) => {
        const names = item.name.split('-')
        return names[0] === name
      })
      // 找到文件名称了就创建文件夹和内容
      if (isFindFileContent) {
        name = isFindFileContent.name
        const tmplDir = resolve('../src/views/vuejsChallenges')
        createTemp(tmplDir, name, 'App')

        console.log(
          lightBlue(`
            ✔️ 题目${name}创建成功
          `)
        )
      } else {
        // 不存在则可能没找到  重新创建
        aFreshCreate(name)
      }
    }
  } catch (error) {
    console.log('error', error)
  }
}

const aFreshCreate = (name: string) => {
  console.log(red(`题目${name}可能没有找到`))
  return onCreate()
}