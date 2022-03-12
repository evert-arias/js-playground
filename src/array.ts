import { emojis, users } from './data/index.js'
import { Gender, IUser } from './types/general.js'

const getEmojis = () => {
  return emojis.filter((emoji) => emoji >= '🐶')
}

const getFemaleUsers = () => {
  return users.filter((user: IUser) => user.gender === 'female')
}

const getUsersByAge = (age: number) => {
  return users.filter((user: IUser) => { return user.age >= age })
}

const getUsersByGenderAndAge = (gender: Gender, age: number) => {
  return users.filter((user: IUser) => { return (user.gender === gender && user.age >= age) })
}

const run = () => {
  console.log('Filter emojis: ', getEmojis())
  console.log('Get all female users: ', getFemaleUsers())
  console.log('Get users by age: ', getUsersByAge(10))
  console.log('Get users by gender and age: ')
  console.table(getUsersByGenderAndAge(Gender.FEMALE, 14))
}

export { run };