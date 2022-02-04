import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Article } from 'src/app/core/models/article.model';

@Injectable({
    providedIn: 'root'
})
export class BaseFormArticleService {
    public baseForm: FormGroup;

    constructor(private fb: FormBuilder) {
        this.baseForm = this.fb.group({
            _id: [null],
            name: [''],
            photo: [''],
            description: [''],
            user_id: [''],
            category_id: [''],
            enabled: [false],
        })
    }

    public pathFormData(article): void {
        return this.baseForm.patchValue({
            _id: article?._id,
            name: article?.name,
            photo: article?.photo,
            description: article?.description,
            user_id: article?.user_id,
            category_id: article?.category_id,
            enabled: article?.cel,
        });
    }

    resetForm(article?: Article) {
        this.baseForm.reset(article);
    }
}