export interface IUser {
    id: number;
    name: string;
    username: string;
    gender: string;
    age: number;
}

export interface IProduct {
    id: string;
    name: string;
    price: number;
    storage: number;
    type: string;
    size: string;
}

export enum EGender {
    MALE = 'male',
    FEMALE = 'female'
}