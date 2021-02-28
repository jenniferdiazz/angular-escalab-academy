export interface User {
    email:string,
    name:string,
    phoneNumber : string,
    profile:string,
    uid:string
}
export interface Group{
    user:User,
    location: string
}
