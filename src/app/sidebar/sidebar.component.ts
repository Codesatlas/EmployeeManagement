import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

export interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
  roles: string[]; // ✅ Add role-based access
}

export const ROUTES: RouteInfo[] = [
  {
    path: "/SuperAdmin/dashboard",
    title: "Dashboard",
    icon: "nc-bank",
    class: "",
    roles: ["SuperAdmin"],
  },
  {
    path: "/Employee/dashboard",
    title: "Dashboard",
    icon: "nc-bank",
    class: "",
    roles: ["Basic"],
  },
  {
    path: "/SuperAdmin/employee_management",
    title: "Employee",
    icon: "nc-app",
    class: "",
    roles: ["SuperAdmin"],
  },
  {
    path: "/Employee/profile",
    title: "Profile",
    icon: "nc-app",
    class: "",
    roles: ["Basic"],
  },
  {
    path: "/Employee/team",
    title: "Team",
    icon: "nc-app",
    class: "",
    roles: ["Basic"],
  },
  {
    path: "/SuperAdmin/employee_split",
    title: "Employee Split",
    icon: "nc-app",
    class: "",
    roles: ["SuperAdmin"],
  },
];

@Component({
  moduleId: module.id,
  selector: "sidebar-cmp",
  templateUrl: "sidebar.component.html",
})
export class SidebarComponent implements OnInit {
  public menuItems: any[];
  Role: string;

  constructor(private router: Router) {}

  ngOnInit() {
    const role = localStorage.getItem("Role"); // ✅ Get role from localStorage
    this.Role = role;
    this.menuItems = ROUTES.filter(
      (menuItem) => menuItem.roles.includes(role), // ✅ Only show routes for current role
    );
  }

  Logout = () => {
    localStorage.removeItem("Token"); // ✅ Match AuthGuard key
    localStorage.removeItem("Role");
    this.router.navigate(["/"]); // ✅ Go to login page
  };
}
