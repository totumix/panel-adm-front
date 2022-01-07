import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AvatarImgComponent } from './avatar-img.component';

describe('AvatarImgComponent', () => {
  let component: AvatarImgComponent;
  let fixture: ComponentFixture<AvatarImgComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AvatarImgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvatarImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
