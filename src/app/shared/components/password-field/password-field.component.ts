import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-password-field',
  templateUrl: './password-field.component.html',
  styleUrls: ['./password-field.component.scss']
})
export class PasswordFieldComponent implements OnInit {


  @Input() form: any;
  showPassword = false;

  constructor() { }

  ngOnInit(): void {
  }

  public checked: boolean;

  showPass() {
    this.showPassword = !this.showPassword;
  }

}
