import { Component, OnDestroy, OnInit } from '@angular/core';
import { BackendService } from '../../../../../../configs/backend.service';
import { ActivatedRoute, Router } from '@angular/router';
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
import { Rol } from 'src/app/core/models/rol.model';
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
  roles: Rol[];
  constructor(
    private _backendService: BackendService,
    public route: ActivatedRoute,
    public dialog: MatDialog,
    private store$: Store<AppState>,
    private router: Router,
  ) { }

  async ngOnInit() {
    this.store$.dispatch(usersActions.loadRequestAction())
    this.store$.dispatch(usersActions.loadRolesRequestAction())
    this.store$.select(usersSelector.getUsers).subscribe(
      users => {
        this.setDataTable(users);
        this.users$ = of(this.users);
      }
    );
    this.store$.select(usersSelector.getRoles).subscribe(
      roles => this.roles = roles
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

  editUser(user) {
    this.store$.dispatch(usersActions.setSelectedUserAction({ user }));
    this.router.navigate(['user', user._id], { relativeTo: this.route });
  }


  deleteUser(user) {
    this.dialog
      .open(ConfirmationDialogComponent, {
        data: {
          contentText: `¿Seguro que quiere eliminar este usuario?`,
        }
      })
      .afterClosed()
      .subscribe(result => {
        if (result) {
          this.store$.dispatch(usersActions.deleteRequestAction(user))
        }
      });
  }

  ngOnDestroy() {
  }

}
