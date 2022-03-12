import { emojis, users } from './data/index.js'
import { Gender, IUser } from './types/general.js'

export const getEmojis = () => {
  return emojis.filter((emoji) => emoji >= '🐶')
}

export const getFemaleUsers = () => {
  return users.filter((user: IUser) => user.gender === 'female')
}

export const getUsersByAge = (age: number) => {
  return users.filter((user: IUser) => { return user.age >= age })
}

export const getUsersByGenderAndAge = (gender: Gender, age: number) => {
  return users.filter((user: IUser) => { return (user.gender === gender && user.age >= age) })
}