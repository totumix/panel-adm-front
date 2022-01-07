import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SsoLayoutComponent } from './sso-layout.component';

describe('SsoLayoutComponent', () => {
  let component: SsoLayoutComponent;
  let fixture: ComponentFixture<SsoLayoutComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SsoLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SsoLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
