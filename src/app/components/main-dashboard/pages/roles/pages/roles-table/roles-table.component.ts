import { Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { Rol } from 'src/app/core/models/rol.model';
import { AppState } from '../../store/state';
import * as rolesActions from '../../store/rol.actions';
import * as rolesSelector from '../../store/rol.selector';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { AddRoleDialogComponent } from '../../components/add-role-dialog/add-role-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from 'src/app/shared/components/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-roles-table',
  templateUrl: './roles-table.component.html',
  styleUrls: ['./roles-table.component.scss']
})
export class RolesTableComponent implements OnInit {

  public loading = false;
  roles$: Observable<Rol[]>;
  error$: Observable<any>;
  total$: Observable<any>;
  isLoading$: Observable<boolean>;
  roles: Rol[];
  displayedColumns: string[] = ['name', 'actions'];
  dataSource = new MatTableDataSource<Rol>();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private store$: Store<AppState>,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.store$.dispatch(rolesActions.loadRequestAction())
    this.store$.select(rolesSelector.getRoles).subscribe(
      roles => {
        this.setDataTable(roles);
        this.roles$ = of(this.roles);
      }
    );
  }

  openRolDialog(role: Rol = null): void {
    this.store$.dispatch(rolesActions.setSelectedRolAction({ role }));
    const dialogRef = this.dialog.open(AddRoleDialogComponent, {
      width: '250px'
    });
    dialogRef.afterClosed().subscribe(role => {
      if (role) {
        this.sendForm(role)
      }
    });
  }

  sendForm(role) {
    console.log(role)
    role._id ? this.store$.dispatch(rolesActions.updateRequestAction(role)) :
      this.store$.dispatch(rolesActions.saveRequestAction(role));
    this.error$ = this.store$.select(rolesSelector.getRolError);
  }

  setDataTable(data) {
    this.dataSource = data;
    this.dataSource = new MatTableDataSource(data);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort
  }

  deleteRol(role) {
    this.dialog
      .open(ConfirmationDialogComponent, {
        data: {
          contentText: `¿Seguro que quiere eliminar esta categoria?`
        }
      })
      .afterClosed()
      .subscribe(result => {
        if (result) {
          this.store$.dispatch(rolesActions.deleteRequestAction(role))
        }
      });
  }

}
