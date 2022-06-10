import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SharedModule } from "src/app/shared/shared.module";
import { DocumentScanningComponent } from "./document-scanning.component";

const ROUTES: Routes = [
  { path: '', component: DocumentScanningComponent },
]

@NgModule({
  declarations: [DocumentScanningComponent],
  imports:[
    SharedModule,
    RouterModule.forChild(ROUTES),
  ],
  exports: []
})

export class DocumentScanningModule {}