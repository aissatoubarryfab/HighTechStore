import { Component, Inject, Input, OnInit } from "@angular/core";
import { AbstractControl, FormControl, FormGroup } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

import { Article } from "../../Article";
import { ArticleService } from "../../services/article.service";


@Component({
    selector:'app-details-article',
    templateUrl:'details_article.component.html'
})

export class DetailsArticleComponent implements OnInit 
{
   @Input() idArticle!: number;
    article! : any
    articleForm!: FormGroup;
    submitted!: boolean;
    isLoading: boolean = true;
    constructor(
        private artcileService : ArticleService,
        public dialogRef: MatDialogRef<DetailsArticleComponent>
    ) { }
    ngOnInit() {
        this.initForm() ;
        this.getData();
    }
   
    initForm(){
        this.articleForm = new FormGroup({
            idArticle: new FormControl(this. idArticle),
            nom: new FormControl(this.article?.label),
            idCategorie: new FormControl(this.article?.idCategorie),
            description : new FormControl(this.article?.description),
            marque :new FormControl(this.article?.marque),
            prix :new FormControl(this.article?.price),
            
        
        });
    }
    getData() {
        console.log(this.idArticle)
        this.artcileService.getArticleById(this.idArticle).subscribe(res => {
            this.article  = res;
          });      
    }

    onClose()
    {
         this.dialogRef.close();
    }

}