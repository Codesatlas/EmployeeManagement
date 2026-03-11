import { AfterViewInit, Component, ViewChild } from "@angular/core";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { MatPaginator, MatPaginatorModule } from "@angular/material/paginator";
import { MatTableDataSource, MatTableModule } from "@angular/material/table";
import { Franchise } from "app/Entity/Franchise";
import { Response } from "app/Entity/Response";
import { ApiService } from "app/Service/api.service";
import { EmployeedialogComponent } from "../employeedialog/employeedialog.component";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements AfterViewInit {
  constructor(private _http: ApiService, public dialog: MatDialog) {}
  FranchiseResponse: Response;
  Franchise: Franchise[] = [];
  isloading: boolean = false;
  displayedColumns: string[] = [
    "Name",
    "Email",
    "MobileNo",
    "Verification",
    "Action",
  ];
  dataSource = new MatTableDataSource<Franchise>(this.Franchise);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  ngOnInit(): void {
    this.isloading = true;
    // this._http.GetAllFranchise().subscribe((i: Response) => {
    //   console.log("ProductResponse: ", i);
    //   if (!i?.IsSuccess) {
    //     this.isloading = false;
    //     return;
    //   }
    //   this.FranchiseResponse = i;
    //   this.Franchise = this.FranchiseResponse.Data;
    //   this.dataSource.data = this.FranchiseResponse.Data;
    //   this.isloading = false;
    // });
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

