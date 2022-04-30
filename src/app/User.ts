import { Role } from "./Role";

export class User {
    id!: number;
    email!: string;
    password!: string;
    firstName!: string;
    lastName!: string;
    role: string;
    constructor( email : string ,firstName : string,id:number, lastName : string,role: string){
        this.email = email;
        this.firstName =firstName ;
        this.id=id; 
        this.lastName = lastName;
        this.role =role;
    } 
   
}
