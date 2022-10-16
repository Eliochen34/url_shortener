const Url = require('../url')
const db = require('../../config/mongoose')

db.once('open', () => {
  Url.create({originalUrl: 'www.google.com', stringForNew:'rerer'})
  console.log('done')
})