import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { BackendService } from 'src/app/configs/backend.service';
import { User } from 'src/app/core/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  private selectedUser = new Subject<any>();
  userSelected = this.selectedUser.asObservable();

  constructor(private _backendService: BackendService) { }

  getCategories() {
    return this._backendService.get('categories/');
  }

  getCategory(_id: string) {
    return this._backendService.get('category/' + _id);
  }

  selectCategory(category) {
    this.selectedUser.next(category)
  }

  saveCategory(category) {
    return this._backendService.post('category', category);
  }

  updateCategory(category) {
    return this._backendService.update('category', category._id, category);
  }

  deleteCategory(_id: string) {
    return this._backendService.delete('category', _id);
  }

}
