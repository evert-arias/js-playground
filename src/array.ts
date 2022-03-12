import { emojis } from './data/index.js'

export const filter = () => {
  return emojis.filter((emoji) => emoji >= '🐶')
}

