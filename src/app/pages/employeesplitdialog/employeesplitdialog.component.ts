import { Component, Inject, OnInit, Optional } from "@angular/core";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { NavigationExtras, Router } from "@angular/router";
import { Response } from "app/Entity/Response";
import { EmployeeCommissionRequestModel } from "app/RequestModel/EmployeeCommissionRequestModel";
import { ApiService } from "app/Service/api.service";

@Component({
  selector: "app-employeesplitdialog",
  templateUrl: "./employeesplitdialog.component.html",
  styleUrls: ["./employeesplitdialog.component.css"],
})
export class EmployeesplitdialogComponent implements OnInit {
  constructor(
    private _http: ApiService,
    private _snackBar: MatSnackBar,
    private router: Router,
    public dialog: MatDialog,
    private dialogRef: MatDialogRef<EmployeesplitdialogComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  isEditMode: boolean = false;
  EmployeeSplitId: any = null;

  VendorPercentage: number;
  Level1EmployeePercentage: number;
  Level2EmployeePercentage: number;
  Level3EmployeePercentage: number;
  Level4EmployeePercentage: number;
  Status: string = 'Active';

  ngOnInit(): void {
    if (this.data?.element) {
      this.isEditMode = true;
      const e = this.data.element;
      this.EmployeeSplitId = e.EmployeeSplitId;
      this.VendorPercentage = e.VendorPercentage;
      this.Level1EmployeePercentage = e.Level1EmployeePercentage;
      this.Level2EmployeePercentage = e.Level2EmployeePercentage;
      this.Level3EmployeePercentage = e.Level3EmployeePercentage;
      this.Level4EmployeePercentage = e.Level4EmployeePercentage;
      this.Status = e.Status;
    }
  }

  AddCommissionSplit = () => {
    var rModel = new EmployeeCommissionRequestModel();
    rModel.VendorPercentage = this.VendorPercentage;
    rModel.Level1EmployeePercentage = this.Level1EmployeePercentage;
    rModel.Level2EmployeePercentage = this.Level2EmployeePercentage;
    rModel.Level3EmployeePercentage = this.Level3EmployeePercentage;
    rModel.Level4EmployeePercentage = this.Level4EmployeePercentage;
    rModel.Status = this.Status;

    if (this.isEditMode) {
      // UPDATE: send EmployeeSplitId, no Status
      rModel.EmployeeSplitId = this.EmployeeSplitId;
      console.log('Sending EmployeeSplitId:', rModel.EmployeeSplitId); 
      this._http.UpdateCommissionConfig(rModel).subscribe((i: Response) => {
        this.handleResponse(i);
      });
    } else {
      // CREATE: send Status, no EmployeeSplitId
      rModel.Status = this.Status;
      this._http.SaveCommissionConfig(rModel).subscribe((i: Response) => {
        this.handleResponse(i);
      });
    }
  };

  handleResponse(i: Response) {
    console.log(i);
    if (i?.IsSuccess) {
      this.dialogRef.close(true);  // closes dialog and signals success to parent
      this._snackBar.open(`${i.Message}`, "Close", {
        horizontalPosition: "end",
        verticalPosition: "top",
        duration: 5000,
      });
      const currentUrl = this.router.url;
      const navigationExtras: NavigationExtras = { skipLocationChange: true };
      this.router.navigateByUrl("/", navigationExtras).then(() => {
        this.router.navigateByUrl(currentUrl, navigationExtras);
      });
    }
  }
}