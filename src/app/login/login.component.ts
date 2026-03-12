import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MatSnackBar } from "@angular/material/snack-bar";
import { LoginUser } from "app/Entity/login";
import { ApiService } from "app/Service/api.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  hide = true;
  Mobile: string = "";
  Password: string = "";
  LoginUser: any;
  LoginUserDetails: LoginUser;
  showLoader: boolean = false;

  constructor(
    private router: Router,
    private _http: ApiService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit() {}

  LogIn = (FormValue: any) => {
    this.showLoader = true;
    this._http.LogInUser(FormValue).subscribe((res: any) => {
      console.log("User: ", res.Data);

      if (!res.IsSuccess) {
        this._snackBar.open(`${res.Message}`, "Close", {
          horizontalPosition: "end",
          verticalPosition: "top",
          duration: 5000,
        });
        this.showLoader = false;
        return;
      }

      this.LoginUser = res;
      this.LoginUserDetails = res?.Data;
      this.showLoader = false;

      // ✅ Save token with key "Token" to match AuthGuard
      localStorage.setItem("Token", this.LoginUserDetails.SessionToken);
      localStorage.setItem("Role", this.LoginUserDetails.Role);

      // ✅ Navigate based on role
      const role = this.LoginUserDetails.Role;
      console.log(role);
      
      if (role === "SuperAdmin") {
        this.router.navigate(["/SuperAdmin/dashboard"]);
      } else {
        this.router.navigate(["/Employee/dashboard"]);
      }

      this._snackBar.open(`${res.Message}`, "Close", {
        horizontalPosition: "end",
        verticalPosition: "top",
        duration: 5000,
      });
    });
  };
}