export class Cart{
    id!: number ; 
    idProduct!: number ; 
    idUser: number ;
    constructor(idPrduct : number ,idUser:number){
        this.idProduct =idPrduct ;
        this.idUser=idUser;   
    }
   

}