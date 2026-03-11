
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { AdminLayoutRoutes } from "./admin-layout.routing";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { MatTabsModule } from "@angular/material/tabs";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatIconModule } from "@angular/material/icon";
import { MatDialogModule } from "@angular/material/dialog";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatExpansionModule } from "@angular/material/expansion";
import { EmployeeComponent } from "app/pages/employee/employee.component";
import { EmployeedialogComponent } from "app/pages/employeedialog/employeedialog.component";
import { LoaderComponent } from 'app/pages/loader/loader.component';
import { ProfileComponent } from "app/pages/profile/profile.component";
import { TeamComponent } from "app/pages/team/team.component";
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    NgbModule,
    // CategoriesModule,
    MatTabsModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatDialogModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    MatExpansionModule,
  ],
  declarations: [
    EmployeeComponent,
    EmployeedialogComponent,
    LoaderComponent,
    ProfileComponent,
    TeamComponent
  ],
})
export class AdminLayoutModule {}
