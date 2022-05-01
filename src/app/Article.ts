export class Article{
    //ces variables auront une valeur à l'exécution
    id!: number;
    label!: string;
    price!: number;
    description!: string;
    marque!: string;
    photo!: string;
    idUser! : number;
    idCategorie! : number;

    constructor(id: number,label: string, description: string,idUser: number,
        price:number, marque:string, photo:string,idCategorie: number){
                this.description=description;
                this.idUser=idUser;
                this.label=label;
                this.price=price;
                this.marque=marque;
                this.photo=photo;
                this.idCategorie=idCategorie;
        }
}
