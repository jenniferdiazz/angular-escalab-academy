export interface User {
    //usar la misma estructura que la base de datos
    email:string,
    name:string,
    phoneNumber : [Phone],
    profile:string,
    newsletter: boolean
    uid:string
}
interface Phone{
    phone:string,
    description:string
}
export interface Group{
    user:User,
    location: string
}
