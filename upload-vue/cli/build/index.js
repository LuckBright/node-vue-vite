"use strict";
exports.__esModule = true;
var commander_1 = require("commander");
var create_1 = require("./create");
// 创建命令对象
var program = new commander_1.Command();
// 注册命令、参数、回调
program
    .command('create')
    .description('快速创建一个 vue-challenges 题目')
    .option('-n --name <name>', '创建题目名称')
    .action(create_1.onCreate);
// 执行命令参数解析
program.parse();
