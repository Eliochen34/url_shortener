// 引用Express與Express路由器
const express = require('express')
const router = express.Router()

// 引入home模組程式碼
const home = require('./modules/home')
// 將網址結構符合 / 字串的request導向home模組
router.use('/', home)

// 引入todos模組程式碼
const urls = require('./modules/urls')
// 將網址結構符合 /todos字串開頭的request導向todos模組
router.use('/urls', urls)


// 匯出路由器
module.exports = router