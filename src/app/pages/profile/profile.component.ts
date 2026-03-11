import { Component, OnInit } from "@angular/core";
import { Employee } from "app/Entity/Employee";
import { ApiService } from "app/Service/api.service";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"],
})
export class ProfileComponent implements OnInit {
  // employee: Employee = {
  //   EmployeeId: "d2dfc63e-4e34-4574-ab35-ac2e305a7c30",
  //   ManagerId: "d2dfc63e-4e34-4574-ab35-ac2e305a7c30",
  //   Name: "Testing",
  //   Mobile: "1234567891",
  //   StateId: "b684cdef-6dd8-42c3-ade4-ce2fe27c13d3",
  //   Address: "aswc",
  //   City: "sacca",
  //   Code: "SQ-EMP-010",
  //   WalletAmount: 0,
  //   Designation: "Level2",
  //   Status: "Active",
  //   Role: "Basic",
  // };
  employee: Employee;
  initials: string = "";

  constructor(private _http: ApiService) {}

  ngOnInit(): void {
    this.GetEmployeeDetails();
  }

  GetEmployeeDetails = () => {
    this._http.GetEmployee().subscribe((res: any) => {
      console.log("Employee Details: ", res.Data);
      if (res.IsSuccess) {
        this.employee = res.Data;
        this.initials = this.getInitials(this.employee.Name);
      }
    });
  };

  getInitials(name: string): string {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  }

  formatWallet(amount: number): string {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
    }).format(amount);
  }

  truncateId(id: string): string {
    return id.slice(0, 8) + "...";
  }

  copyToClipboard(text: string): void {
    navigator.clipboard.writeText(text);
  }
}
