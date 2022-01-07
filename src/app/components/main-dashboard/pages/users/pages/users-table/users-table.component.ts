import { Component, OnDestroy, OnInit } from '@angular/core';
import { BackendService } from '../../../../../../configs/backend.service';
import { Router } from '@angular/router';
import { ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { User } from 'src/app/core/models/user.model';
import { MatSort } from '@angular/material/sort';
import { Store } from '@ngrx/store';
import * as usersActions from '../../store/users.actions';
import * as usersSelector from '../../store/users.selector';
import { ConfirmationDialogComponent } from 'src/app/shared/components/confirmation-dialog/confirmation-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Observable, of } from 'rxjs';
import { AppState } from '../../store/state';
@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss']
})
export class UsersTableComponent implements OnInit, OnDestroy {
  public usersMetadata;
  public loading = false;
  displayedColumns: string[] = ['name', 'last_name', 'email', 'creation_date', 'state', 'actions'];
  dataSource = new MatTableDataSource<User>();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  users$: Observable<User[]>;
  error$: Observable<any>;
  total$: Observable<any>;
  isLoading$: Observable<boolean>;
  users: User[];
  constructor(
    private _backendService: BackendService,
    public dialog: MatDialog,
    private store$: Store<AppState>,
    private router: Router
  ) { }

  async ngOnInit() {
    this.store$.dispatch(usersActions.loadRequestAction())
    this.store$.select(usersSelector.getUsers).subscribe(
      users => {
        this.setDataTable(users);
        this.users$ = of(this.users);
      }
    );
    this.error$ = this.store$.select(usersSelector.getUserError);
    this.isLoading$ = this.store$.select(usersSelector.getUserIsLoading);
    this.total$ = this.store$.select(usersSelector.getTotalUsers);
  }

  setDataTable(data) {
    this.dataSource = data;
    this.dataSource = new MatTableDataSource(data);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort
  }

  onRefresh() {
    this.store$.dispatch(usersActions.loadRequestAction());
  }

  selectUserById(id) {
    this.router.navigate(['user-detail', id]);
  }

  eventNewRecord(event) {
    this.router.navigate(['user-new']);
  }


  deleteUser(user) {
    console.log(user)
    this.dialog
      .open(ConfirmationDialogComponent, {
        data: {
          contentText: `¿Seguro que quiere eliminar este usuario?`,
        }
      })
      .afterClosed()
      .subscribe(result => {
        if (result) {
          this._backendService.delete('user', user._id).subscribe(
            res => {
              // this.store.select('users').subscribe(({ users }) => {
              //   const index = users.indexOf({ ...user });
              //   console.log(index, users)
              //   // this._userService.usersDispatch(users)
              // })
            }, error => {
              this._backendService.handleError(error)
            })
        }
      });
  }

  ngOnDestroy() {
  }

}
