import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SharedModule } from "src/app/shared/shared.module";
import { RegistrationStatusComponent } from "./registration-status.component";

const ROUTES: Routes = [
  { path: '', component: RegistrationStatusComponent },
  { path: 'card/:id', component: RegistrationStatusComponent },
]

@NgModule({
  declarations: [RegistrationStatusComponent],
  imports:[
    SharedModule,
    RouterModule.forChild(ROUTES),
  ],
  exports: []
})

export class RegistrationStatusModule {}

