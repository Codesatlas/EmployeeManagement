import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeedialogComponent } from './employeedialog.component';

describe('EmployeedialogComponent', () => {
  let component: EmployeedialogComponent;
  let fixture: ComponentFixture<EmployeedialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeedialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeedialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
