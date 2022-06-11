import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { SharedModule } from "src/app/shared/shared.module";
import { CustomerComponent } from "./customer.component";


const ROUTES: Routes = [
  { path: '', component: CustomerComponent },
]

@NgModule({
  declarations: [CustomerComponent],
  imports:[
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild(ROUTES),
  ],
  exports: []
})

export class CustomerModule {}

