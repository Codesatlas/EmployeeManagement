import { Routes } from "@angular/router";
import { DashboardComponent } from "app/pages/dashboard/dashboard.component";
import { EmployeeComponent } from "app/pages/employee/employee.component";
import { ProfileComponent } from "app/pages/profile/profile.component";

export const AdminLayoutRoutes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: "employee_management", component: EmployeeComponent },
  { path: "profile", component: ProfileComponent },
];
