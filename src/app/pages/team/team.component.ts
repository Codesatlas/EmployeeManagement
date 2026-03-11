import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { Employee } from "app/Entity/Employee";
import { ApiService } from "app/Service/api.service";
import { EmployeedialogComponent } from "../employeedialog/employeedialog.component";
import { Response } from "app/Entity/Response";

@Component({
  selector: "app-team",
  templateUrl: "./team.component.html",
  styleUrls: ["./team.component.css"],
})
export class TeamComponent implements AfterViewInit {
  constructor(
    private _http: ApiService,
    public dialog: MatDialog,
  ) {}
  FranchiseResponse: Response;
  Franchise: Employee[] = [];
  isloading: boolean = false;
  displayedColumns: string[] = [
    "Name",
    "MobileNo",
    "Address",
    "Role",
    "Action",
  ];
  dataSource = new MatTableDataSource<Employee>(this.Franchise);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  ngOnInit(): void {
    this.isloading = true;
    this._http.GetTeam().subscribe({
      next: (i: any) => {
        console.log("Team Response: ", i);
        if (!i?.IsSuccess) {
          this.isloading = false;
          return;
        }
        this.FranchiseResponse = i;
        this.Franchise = this.FranchiseResponse.Data;
        this.dataSource.data = this.FranchiseResponse.Data;
        this.isloading = false;
      },
      error: (err) => {
        console.log("Error Status:", err.status);
        console.log("Error Body:", err.error); // ← this will show exact reason
        this.isloading = false;
      },
    });
  }
  OpenDialog = (FranchiseId: string) => {
    console.log(FranchiseId);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = { id: FranchiseId };
    dialogConfig.width = "50vw";
    const dialogRef = this.dialog.open(EmployeedialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  };
}
