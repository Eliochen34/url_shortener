const randomText = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'

function createRandomText(requiredRandoms) {
  let result = ''
  for(let i = 0; i < requiredRandoms; i++){
    const randomNumber = Math.floor(Math.random() * 62)
    result += randomText[randomNumber]
  }
  return result
}

module.exports = createRandomText