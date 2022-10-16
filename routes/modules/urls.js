const express = require('express')
const router = express.Router()
const Url = require('../../models/url')



router.post('/', (req, res) => {
  const url = req.body.url
  console.log(req.body.url)
  return Url.create({ originalUrl: url, stringForNew: 'tytyt' })
    .then(url => res.render('result', {url}))
    .catch(err => console.log(err))
})

// router.get('/:id', (req, res) => {
//   const id = req.body.id
//   return Url.findById(id)
//     .lean()
//     .then(() => res.render('/result'))
//     .catch(err => console.log(err))
// })

module.exports = router