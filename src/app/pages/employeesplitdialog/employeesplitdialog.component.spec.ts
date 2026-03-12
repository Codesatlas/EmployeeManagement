import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesplitdialogComponent } from './employeesplitdialog.component';

describe('EmployeesplitdialogComponent', () => {
  let component: EmployeesplitdialogComponent;
  let fixture: ComponentFixture<EmployeesplitdialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeesplitdialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeesplitdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
