import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { FooterComponent } from "./components/footer/footer.component";
import { HeaderComponent } from "./components/header/header.component";
import { MenuLeftComponent } from "./components/menu-left/menu-left.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { ProgressBarComponent } from "./components/progress-bar/progress-bar.component";

@NgModule({
  declarations: [
    NotFoundComponent, 
    HeaderComponent,
    FooterComponent,
    MenuLeftComponent,
    ProgressBarComponent
  ],
  imports:[
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    NotFoundComponent,
    HeaderComponent,
    FooterComponent,
    MenuLeftComponent,
    ProgressBarComponent
  ]
})
export class SharedModule {}