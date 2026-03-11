import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ApiService } from "app/Service/api.service";

export interface State {
  id: string;
  name: string;
}

@Component({
  selector: "app-employeeregister",
  templateUrl: "./employeeregister.component.html",
  styleUrls: ["./employeeregister.component.css"],
})
export class EmployeeregisterComponent implements OnInit {
  registerForm!: FormGroup;
  isSubmitting = false;
  showPassword = false;

  designations = ["Level2", "Level3", "Level4"];

  roles = ["SuperAdmin", "Admin", "Manager", "Employee", "Viewer","Basic"];

states: State[] = [
    { id: '2ef813e6-097b-437c-b8cd-0c86985eff30', name: 'ANDAMAN AND NICOBAR ISLANDS' },
    { id: '4a330691-00f2-4a4f-9bed-bf143f2590f7', name: 'ANDHRA PRADESH' },
    { id: '4e02f14e-f9cd-43b6-a7ea-46cab44f01bf', name: 'ARUNACHAL PRADESH' },
    { id: 'b684cdef-6dd8-42c3-ade4-ce2fe27c13d3', name: 'ASSAM' },
    { id: 'db126fc6-e537-40bf-8b6c-f6c884d12248', name: 'BIHAR' },
    { id: '258ade5c-6c62-4e48-9360-4cf8a2cb1872', name: 'CENTRE JURISDICTION' },
    { id: 'c062d063-07ab-46b7-8820-c282289a902a', name: 'CHANDIGARH' },
    { id: 'c723ab1f-aa64-499b-bfae-c8e151e89be9', name: 'CHHATTISGARH' },
    { id: '021f6dad-3be4-4e49-845c-5516589dc783', name: 'DADRA AND NAGAR HAVELI' },
    { id: '8c22c49d-785f-4063-bc1e-fbb9d5f52a4f', name: 'DAMAN AND DIU' },
    { id: 'b60b40ae-09b0-4110-b3e3-f346ff9735f5', name: 'DELHI' },
    { id: '3272837d-5b7d-42cc-bca0-1ac8b31e3a2f', name: 'FOREIGN COUNTRY' },
    { id: '103b9e32-a184-4000-bdeb-e017a83f3a09', name: 'GOA' },
    { id: 'a61d56ee-cc02-4b87-b572-b380f73ed73c', name: 'GUJARAT' },
    { id: '7f48a9aa-c8b8-4832-a72d-b57483d67348', name: 'HARYANA' },
    { id: '3798125b-a7a0-4226-bb64-7506842aea7f', name: 'HIMACHAL PRADESH' },
    { id: 'c9ed6d44-ccab-482d-aab6-fc4b3c75814c', name: 'JAMMU AND KASHMIR' },
    { id: '0bf58de8-6c7a-48bd-a9c6-89f6db6e58ef', name: 'JHARKHAND' },
    { id: '9409aa60-5dd6-423d-beed-43840f4100cc', name: 'KARNATAKA' },
    { id: '228165ab-1e38-4c30-b2c6-457eee5e315c', name: 'KERALA' },
    { id: 'd8664b7f-22da-4690-b960-d92110cc38e5', name: 'LADAKH' },
    { id: '3e6e22ea-8cf3-4f03-9ffb-d85657ac99c2', name: 'LAKSHADWEEP' },
    { id: '3d11df6c-aec8-46e8-9b34-10ec99c3bbd7', name: 'MADHYA PRADESH' },
    { id: 'e213111c-5b81-410a-a999-40b082a76372', name: 'MAHARASHTRA' },
    { id: '52f84a9c-2d63-48f7-9cb4-625f6b399435', name: 'MANIPUR' },
    { id: '6eafb7f8-1974-490f-8247-316faa5c3000', name: 'MEGHALAYA' },
    { id: '89c2e5e1-f1a3-4375-af46-a2b1c0796017', name: 'MIZORAM' },
    { id: '5b634d78-f4d3-43ad-a147-9bbd80ab01e0', name: 'NAGALAND' },
    { id: '5dbd1e71-656f-4c46-8c05-57705d33d18b', name: 'ODISHA' },
    { id: '1e54f053-4ef1-4ad4-aaaa-578916fb18a7', name: 'OTHER TERRITORY' },
    { id: '7d81a39f-3d14-4c01-85c5-49c2ffbcf039', name: 'PUDUCHERRY' },
    { id: '604bc3f7-f16e-4d00-bcdc-f3846d49a7b5', name: 'PUNJAB' },
    { id: '3c6542ab-3afb-402e-a314-bd3a16154f08', name: 'RAJASTHAN' },
    { id: '3b5594c3-8619-4215-a2da-f033b68e25fb', name: 'SIKKIM' },
    { id: '15645ea7-7623-4191-8815-655a5fb80dbe', name: 'TAMIL NADU' },
    { id: 'fd47626e-0575-42fb-8282-0345722adfe4', name: 'TELANGANA' },
    { id: '2ee94f30-1447-4740-9986-19d8d4cce5f4', name: 'TRIPURA' },
    { id: '133b9ee4-436f-4df1-a3bf-fc103cfe14a6', name: 'UTTAR PRADESH' },
    { id: 'ffb84c23-0416-4fa7-b2c3-f73830c9b284', name: 'UTTARAKHAND' },
    { id: '20c040e5-2801-4194-8bfd-75d41684dfd9', name: 'WEST BENGAL' },
  ];

  constructor(
    private fb: FormBuilder,
    private _http: ApiService,
  ) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      Name: ["", [Validators.required, Validators.minLength(2)]],
      Mobile: ["", [Validators.required, Validators.pattern(/^[0-9]{10,15}$/)]],
      Email: ["", [Validators.required, Validators.email]],
      Password: ["", [Validators.required, Validators.minLength(8)]],
      StateId: ["", Validators.required],
      Address: ["", Validators.required],
      City: ["", Validators.required],
      Designation: ["", Validators.required],
      Role: ["", Validators.required],
    });
  }

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  isFieldInvalid(field: string): boolean {
    const control = this.registerForm.get(field);
    return !!(control && control.invalid && (control.dirty || control.touched));
  }

  getErrorMessage(field: string): string {
    const control = this.registerForm.get(field);
    if (!control) return "";
    if (control.hasError("required")) return `${field} is required`;
    if (control.hasError("email")) return "Enter a valid email address";
    if (control.hasError("minlength")) {
      const min = control.errors?.["minlength"].requiredLength;
      return `Minimum ${min} characters required`;
    }
    if (control.hasError("pattern"))
      return "Enter a valid mobile number (10–15 digits)";
    return "";
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      this.isSubmitting = true;
      console.log("Form Submitted:", this.registerForm.value);
      this._http.RegisterEmployee(this.registerForm.value).subscribe(
        (res: any) => {
          console.log("API Response:", res);
          this.isSubmitting = false;
          if (res.IsSuccess) {
            alert("Employee registered successfully!");
            this.registerForm.reset();
          } else {
            alert(`Registration failed: ${res.Message}`);
          }
        },
        (error) => {
          console.error("API Error:", error);
          this.isSubmitting = false;
          alert(
            "An error occurred while registering the employee. Please try again.",
          );
        },
      );
      setTimeout(() => {
        this.isSubmitting = false;
        this.registerForm.reset();
        
      }, 2000);
    } else {
      this.registerForm.markAllAsTouched();
    }
  }

  onReset(): void {
    this.registerForm.reset();
  }
}
