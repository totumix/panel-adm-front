import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/components/sso/services/auth.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {

  constructor(public _authSvc: AuthService) {
  }

  ngOnInit(): void {
    this.showNavbar('header-toggle', 'nav-bar', 'body-pd', 'header');
  }

  showNavbar = (toggleId, navId, bodyId, headerId) => {
    const toggle = document.getElementById(toggleId),
      nav = document.getElementById(navId),
      bodypd = document.getElementById(bodyId),
      headerpd = document.getElementById(headerId)

    if (toggle && nav && bodypd && headerpd) {
      toggle.addEventListener('click', () => {
        nav.classList.toggle('show')
        toggle.classList.toggle('bx-x')
        bodypd.classList.toggle('body-pd')
        headerpd.classList.toggle('body-pd')
      })
    }
  }

  logout() {
    this._authSvc.logout();
  }



}
