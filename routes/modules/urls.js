const express = require('express')
const router = express.Router()
const Url = require('../../models/url')
const createRandomText = require('../../utility/shortenUrl')

router.post('/', (req, res) => {
  const url = req.body.url
  if (!url) return res.redirect('/')
  // 比對req.body.url是否存在資料庫
  // 有在資料庫，顯示urls
  // 若沒有在資料庫，則至資料庫新增一筆資料
  return Url.findOne({ originalUrl: url})
    .then(data =>{
      data ? data : Url.create({ originalUrl: url, stringForNew: createRandomText(5) })
      return res.render('urls', { origin: req.headers.origin, stringForNew: data.stringForNew })
    })
    // .then(data => {
    //   // 拿既有資料or新產生的資料去渲染result畫面
    //   return res.render('result', { origin: req.headers.origin, stringForNew: data.stringForNew })
    //   }
    // )
    .catch(err => console.log(err)) 
})

router.get('/:stringForNew', (req, res) => {
  // 導向原先的網址
  const stringForNew = req.params.stringForNew
  Url.findOne({ stringForNew: stringForNew })
    .then(data => res.redirect(data.originalUrl))
    .catch(err => console.log(err))
})



module.exports = router