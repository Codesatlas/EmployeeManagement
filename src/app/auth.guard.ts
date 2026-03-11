import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  Router,
} from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const token = localStorage.getItem("Token");
    const userRole = localStorage.getItem("Role");
    const requiredRole = route.data?.["role"];

    if (!token) {
      this.router.navigate([""]);
      return false;
    }

    if (requiredRole && userRole !== requiredRole) {
      // Redirect user to their correct dashboard
      this.router.navigate([userRole]);
      return false;
    }

    return true;
  }
}