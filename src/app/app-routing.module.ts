import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';

const ROUTES: Routes = [
  {
    path: 'registration', loadChildren: () => import('./feature/customer/customer.module').then(m => m.CustomerModule),
  },
  {
    path: 'document-scanning', loadChildren: () => import('./feature/document-scanning/document-scanning.module').then(m => m.DocumentScanningModule),
  },

  {
   path: "",
   pathMatch: "full", 
   redirectTo: "registration"
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
