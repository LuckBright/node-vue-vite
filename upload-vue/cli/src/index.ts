import { Command } from 'commander'
import { onCreate } from './create'

// 创建命令对象
const program = new Command()

// 注册命令、参数、回调
program
  .command('create')
  .description('快速创建一个 vue-challenges 题目')
  .option('-n --name <name>', '创建题目名称')
  .action(onCreate)

// 执行命令参数解析
program.parse()