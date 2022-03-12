import { getEmojis, getFemaleUsers, getUsersByAge, getUsersByGenderAndAge } from "./array.js";
import { Gender } from "./types/index.js";

console.log('Filter emojis: ', getEmojis())

console.log('Get all female users: ', getFemaleUsers())

console.log('Get users by age: ', getUsersByAge(10))

console.log('Get users by gender and age: ')

console.table(getUsersByGenderAndAge(Gender.FEMALE, 14))