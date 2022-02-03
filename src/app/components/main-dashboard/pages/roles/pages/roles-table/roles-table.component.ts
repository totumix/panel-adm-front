import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Rol } from 'src/app/core/models/rol.model';
import { AppState } from '../../store/state';
import * as rolesActions from '../../store/rol.actions';
import * as rolesSelector from '../../store/rol.selector';

@Component({
  selector: 'app-roles-table',
  templateUrl: './roles-table.component.html',
  styleUrls: ['./roles-table.component.scss']
})
export class RolesTableComponent implements OnInit {
  roles$: Observable<Rol[]>;
  error$: Observable<any>;
  total$: Observable<any>;
  isLoading$: Observable<boolean>;
  roles: Rol[];
  constructor(
    private store$: Store<AppState>,
  ) { }

  ngOnInit(): void {
    this.store$.dispatch(rolesActions.loadRequestAction())
    this.store$.select(rolesSelector.getRoles).subscribe(
      roles => {
        this.setDataTable(roles);
        // this.roles$ = of(this.users);
      }
    );
  }

  setDataTable(data) {
    console.log(data)
    // this.dataSource = data;
    // this.dataSource = new MatTableDataSource(data);
    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort
  }

}
