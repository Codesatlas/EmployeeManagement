import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { Employee } from "app/Entity/Employee";
import { ApiService } from "app/Service/api.service";
import { EmployeedialogComponent } from "../employeedialog/employeedialog.component";
import { Response } from "app/Entity/Response";
import { EmployeesplitdialogComponent } from "../employeesplitdialog/employeesplitdialog.component";
import { EmployeeSplit } from "app/Entity/EmployeeSplit";

@Component({
  selector: "app-employeesplit",
  templateUrl: "./employeesplit.component.html",
  styleUrls: ["./employeesplit.component.css"],
})
export class EmployeesplitComponent implements AfterViewInit, OnInit {
  constructor(
    private _http: ApiService,
    public dialog: MatDialog,
  ) {}
  EmployeeSplitResponse: Response;
  EmployeeSplit: EmployeeSplit[] = [];
  isloading: boolean = false;
  displayedColumns: string[] = [
    "VendorPercentage",
    "Level1Percentage",
    "Level2Percentage",
    "Level3Percentage",
    "Level4Percentage",
    "Edit",
    "Status",
  ];
  dataSource = new MatTableDataSource<EmployeeSplit>(this.EmployeeSplit);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  ngOnInit(): void {
    this.isloading = true;
    this._http.GetAllEmployeeSplit().subscribe({
      next: (i: any) => {
        console.log("Employee Split Response: ", i);
        if (!i?.IsSuccess) {
          this.isloading = false;
          return;
        }
        this.EmployeeSplitResponse = i;
        this.EmployeeSplit = this.EmployeeSplitResponse.Data;
        this.dataSource.data = this.EmployeeSplitResponse.Data;
        this.isloading = false;
      },
      error: (err) => {
        console.log("Error Status:", err.status);
        console.log("Error Body:", err.error);
        this.isloading = false;
      },
    });
  }
  OpenDialog = (employeeId?: any) => {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = "50vw";
    if (employeeId) {
       dialogConfig.data = { employeeId };
    }
    const dialogRef = this.dialog.open(EmployeesplitdialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe((result) => {
       console.log(`Dialog result: ${result}`);
    });
  };

  toggleStatus = (element: EmployeeSplit) => {
  const previousStatus = element.Status;
  element.Status = element.Status === 'Active' ? 'Inactive' : 'Active';

  this._http.UpdateEmployeeSplitStatus(element.EmployeeSplitId, element.Status).subscribe({
    next: (res: any) => {
      console.log("Status updated successfully:", res);
    },
    error: (err) => {
      element.Status = previousStatus; // revert on error
      console.log("Error updating status:", err);
    }
  });
};
}


