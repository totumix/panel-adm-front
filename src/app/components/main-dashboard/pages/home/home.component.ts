import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../../../configs/backend.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private _backendService: BackendService
  ) { }

  ngOnInit() {
    let identity = this._backendService.getIdentity();
  }

}
