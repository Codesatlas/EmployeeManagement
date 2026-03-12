import { Routes } from "@angular/router";
import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { LoginComponent } from "./login/login.component";
import { AuthGuard } from "./auth.guard";
import { EmployeeregisterComponent } from "./employeeregister/employeeregister.component";

export const AppRoutes: Routes = [
  {
    path: "",
    component: LoginComponent,
  },
  {
    path: "register",
    component: EmployeeregisterComponent,
  },
  {
    path: "SuperAdmin",
    component: AdminLayoutComponent,
    canActivate: [AuthGuard],
    data: { role: "SuperAdmin" },
    children: [
      {
        path: "",
        loadChildren: () =>
          import("./layouts/admin-layout/admin-layout.module").then(
            (x) => x.AdminLayoutModule
          ),
      },
    ],
  },
  {
    path: "Employee",
    component: AdminLayoutComponent,
    canActivate: [AuthGuard],
    data: { role: "Basic" },
    children: [
      {
        path: "",
        loadChildren: () =>
          import("./layouts/admin-layout/admin-layout.module").then(
            (x) => x.AdminLayoutModule
          ),
      },
    ],
  },
  {
    path: "**",
    redirectTo: "",
  },
];