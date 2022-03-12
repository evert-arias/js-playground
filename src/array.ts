import { emojis, users } from './data/index.js'
import { EGender, IUser } from './types/general.js'

const getEmojis = () => {
  return emojis.filter((emoji) => emoji >= '🐶')
}

const getFemaleUsers = () => {
  return users.filter((user: IUser) => user.gender === 'female')
}

const getUsersByAge = (age: number) => {
  return users.filter((user: IUser) => { return user.age >= age })
}

const getUsersByGenderAndAge = (gender: EGender, age: number) => {
  return users.filter((user: IUser) => { return (user.gender === gender && user.age >= age) })
}

const run = () => {
  console.table(getUsersByGenderAndAge(EGender.FEMALE, 14))
}

export { run };