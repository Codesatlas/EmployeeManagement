import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { LoginUser } from "app/Entity/login";
import { Category } from "app/Entity/Category";
import { SubcategoryRequestModel } from "app/RequestModel/SubCategoryRequestModel";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  BaseUrL = "http://codesatlas-001-site4.mtempurl.com/dev/api/v1/employee/website";
  constructor(private _http: HttpClient) {}

  LogInUser = (User: LoginUser) => {
    return this._http.post(`${this.BaseUrL}/Employee/Login`, User);
  };

  RegisterEmployee = (Model: any) => {
    return this._http.post(`${this.BaseUrL}/Employee/Create`, Model);
  }
  
  GetEmployee =()=>{
    const token = localStorage.getItem("Token");
    const headers = new HttpHeaders().set("Authorization", `Bearer ${token}`);
    return this._http.get(`${this.BaseUrL}/Employee/Get`, { headers });
  }
}
