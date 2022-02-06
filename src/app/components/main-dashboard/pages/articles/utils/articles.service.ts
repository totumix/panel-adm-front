import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { BackendService } from 'src/app/configs/backend.service';
import { User } from 'src/app/core/models/user.model';

@Injectable({
    providedIn: 'root'
})
export class ArticlesService {

    private selectedUser = new Subject<any>();
    userSelected = this.selectedUser.asObservable();

    constructor(private _backendService: BackendService) { }

    getArticles() {
        return this._backendService.get('articles/');
    }

    getArticle(_id: string) {
        return this._backendService.get('article/' + _id);
    }

    getCategories() {
        return this._backendService.get('categories/');
    }

    selectUser(user) {
        this.selectedUser.next(user)
    }

    saveArticle(user) {
        return this._backendService.post('article', user);
    }

    updateArticle(article) {
        return this._backendService.update('article', article._id, article);
    }

    deleteUser(_id: string) {
        return this._backendService.delete('user', _id);
    }

}
