import { Component, Inject, Input, OnInit } from "@angular/core";
import { AbstractControl, FormControl, FormGroup } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { CategoryEnum } from "src/app/enum/category.enum";
import { AuthenticationService } from "src/app/services/user.service";

import { Article } from "../../Article";
import { ArticleService } from "../../services/article.service";


@Component({
    selector:'app-details-article',
    templateUrl:'details_article.component.html'
})

export class DetailsArticleComponent implements OnInit 
{
    articleForm!: FormGroup;
    submitted!: boolean;
    isLoading: boolean = true;
    constructor(
        private artcileService : ArticleService,
        public dialogRef: MatDialogRef<DetailsArticleComponent>,
        @Inject(MAT_DIALOG_DATA) public article :Article,
        public authenticationService :AuthenticationService,

    ) { }
    get isAdminCurrentUser() : any {
        return this.authenticationService.isAdmin();
    }
    ngOnInit() {
        console.log(this.article.idCategorie)
        this.articleForm = new FormGroup({
            nom: new FormControl(this.article?.label),
            idCategorie: new FormControl(this.getCategory(this.article?.idCategorie)),
            description : new FormControl(this.article?.description),
            marque :new FormControl(this.article?.marque),
            prix :new FormControl(this.article?.price) 
        
        });
    }
   
    save() {
        this.dialogRef.close(this.articleForm.value);
    }

    close() {
        this.dialogRef.close();
    }
    getCategory(categoryCode : number) : string {
        
        if(categoryCode == CategoryEnum.PC_ACCESSOIRES) {
        return "PC accessoires";
        }else  if(categoryCode == CategoryEnum.PC_BUREAU) {
            return "PC bureau";
        }else  if(categoryCode == CategoryEnum.PC_PORTABLE) {
            return "PC portable";
        } else  if(categoryCode == CategoryEnum.SMART_PHONE) {
            return "Smart phone";
        } else  if(categoryCode == CategoryEnum.TEL_ACCESSOIRES) {
            return "Tel accessoires ";
        } else  if(categoryCode == CategoryEnum.TEL_FIX) {
            return "Tel fix";
        } else  if(categoryCode == CategoryEnum.CLE_USB) {
            return "Cle USB";
        }else  if(categoryCode == CategoryEnum.DISQUE_DUR) {
            return "Disque dur";
        }else  if(categoryCode == CategoryEnum.STOCKAGE_ACCESSOIRES) {
            return "Stockage accessoires";
        }  
        return "";

    }
      

}