import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCategoryDialogComponent } from './add-category.component';

describe('AddCategoryComponent', () => {
  let component: AddCategoryDialogComponent;
  let fixture: ComponentFixture<AddCategoryDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddCategoryDialogComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCategoryDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
