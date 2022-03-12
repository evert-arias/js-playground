import { emojis } from './data/index.js'

const filter = () => {
  return emojis.filter((emoji) => emoji >= '🐶')
}

console.log('Filter: ', filter())