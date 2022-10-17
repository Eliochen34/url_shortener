const express = require('express')
const router = express.Router()
const Url = require('../../models/url')



router.post('/', (req, res) => {
  const url = req.body.url
  if (!url) return res.redirect('/')
  // 比對req.body.url是否存在資料庫
  // 有在資料庫，顯示result
  // 若沒有在資料庫，則至資料庫新增一筆資料
  Url.findOne({ originalUrl: url})
    .then(data =>
       data ? data : Url.create({ originalUrl: url, stringForNew: '54312' })
    )
    .then(data =>
      // 拿既有資料or新產生的資料去渲染result畫面
      res.render('result', { stringForNew: data.stringForNew })
    )
    .catch(err => console.log(err)) 
})

router.get('/:stringForNew', (req, res) => {
  const stringForNew = req.params.stringForNew
  console.log('ok')
  Url.find({stringForNew})
    .then(data => res.redirect(data.originalUrl))
})

// router.get('/:id', (req, res) => {
//   const id = req.body.id
//   return Url.findById(id)
//     .lean()
//     .then(() => res.render('/result'))
//     .catch(err => console.log(err))
// })

module.exports = router