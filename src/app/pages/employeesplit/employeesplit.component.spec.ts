import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesplitComponent } from './employeesplit.component';

describe('EmployeesplitComponent', () => {
  let component: EmployeesplitComponent;
  let fixture: ComponentFixture<EmployeesplitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeesplitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeesplitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
