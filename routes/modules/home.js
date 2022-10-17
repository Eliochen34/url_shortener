const express = require('express')
const router = express.Router()
const Url = require('../../models/url')
// 首頁畫面渲染
router.get('/', (req, res) => res.render('index'))

module.exports = router