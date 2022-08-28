import * as inquirer from "inquirer"
import { readdirSync } from "fs-extra"
import { red } from "kolorist"
import { createDir } from './createDir'


interface obj {
  name: string
}

export const onCreate = async (arg: obj = { name: '' }) => {
  let { name } = arg

  if (!name) {
    const result = await inquirer.prompt([
      {
        name: "name",
        type: "input",
        message: "(必填) 请输入题目名称"
      }
    ])
    name = result.name
  }

  const dirs = await readdirSync('../src/views/vuejsChallenges')
  // 查看文件夹有没有重复创建的
  const hasCreate = dirs.findIndex(item => {
    const fileName = item.split('-')
    return name === fileName[0]
  })
  if (~hasCreate) {
    const result = await inquirer.prompt([
      {
        name: "name",
        type: "input",
        message: red(`×题目${name}已经被创建， 请重新输入`)
      }
    ])
    name = result.name
  }

  createDir(name)
}