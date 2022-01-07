import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SignupUserComponent } from './signup-user.component';

describe('SignupUserComponent', () => {
  let component: SignupUserComponent;
  let fixture: ComponentFixture<SignupUserComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
