import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';

const ROUTES: Routes = [
  {
    path: 'registration-status', loadChildren: () => import('./feature/registration-status/registration-status.module').then(m => m.RegistrationStatusModule),
  },
  {
    path: 'document-scanning', loadChildren: () => import('./feature/document-scanning/document-scanning.module').then(m => m.DocumentScanningModule),
  },

  {
   path: "",
   pathMatch: "full", 
   redirectTo: "registration-status"
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
