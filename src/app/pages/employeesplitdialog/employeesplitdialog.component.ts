import { Component, Inject, OnInit } from "@angular/core";
import { MatDialog, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { NavigationExtras, Router } from "@angular/router";
import { GST } from "app/Entity/GST";
import { Response } from "app/Entity/Response";
import { Tariff, TariffPackage, TariffTerm } from "app/Entity/Tariff";
import { EmployeeCommissionRequestModel } from "app/RequestModel/EmployeeCommissionRequestModel";
import { ImageRequestModel } from "app/RequestModel/ImageRequestModel";
import { ApiService } from "app/Service/api.service";

@Component({
  selector: "app-employeesplitdialog",
  templateUrl: "./employeesplitdialog.component.html",
  styleUrls: ["./employeesplitdialog.component.css"],
})
export class EmployeesplitdialogComponent {
  constructor(
    private _http: ApiService,
    private _snackBar: MatSnackBar,
    private router: Router,
  ) {}
  VendorPercentage: number;
  Level1EmployeePercentage: number;
  Level2EmployeePercentage: number;
  Level3EmployeePercentage: number;
  Level4EmployeePercentage: number;
  Status: boolean = true;

  AddCommissionSplit = () => {
    var rModel = new EmployeeCommissionRequestModel();
    rModel.VendorPercentage = this.VendorPercentage;
    rModel.Level1EmployeePercentage = this.Level1EmployeePercentage;
    rModel.Level2EmployeePercentage = this.Level2EmployeePercentage;
    rModel.Level3EmployeePercentage = this.Level3EmployeePercentage;
    rModel.Level4EmployeePercentage = this.Level4EmployeePercentage;
    rModel.Status = this.Status ? "Active" : "Inactive";
     this._http.SaveCommissionConfig(rModel).subscribe((i: Response) => {
            console.log(i);
            if (i?.IsSuccess) {
              // const dialogRef = this.dialog.closeAll();
              this._snackBar.open(`${i.Message}`, "Close", {
                horizontalPosition: "end",
                verticalPosition: "top",
                duration: 5000,
              });
              const currentUrl = this.router.url;
              const navigationExtras: NavigationExtras = {
                skipLocationChange: true,
              };
              this.router.navigateByUrl("/", navigationExtras).then(() => {
                this.router.navigateByUrl(currentUrl, navigationExtras);
              });
            }
          })
  };
}
