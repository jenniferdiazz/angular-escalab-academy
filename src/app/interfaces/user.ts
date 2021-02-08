export interface User {
    name:string,
    lastName:string,
    age:number
}
export interface Group{
    user:User,
    location: string
}
