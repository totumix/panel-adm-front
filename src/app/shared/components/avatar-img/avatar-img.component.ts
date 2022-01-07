import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-avatar-img',
  templateUrl: './avatar-img.component.html',
  styleUrls: ['./avatar-img.component.scss']
})
export class AvatarImgComponent implements OnInit {

  @Input() photo : string;
  @Input() section : string;

  constructor() { }

  ngOnInit() {
  }

}
