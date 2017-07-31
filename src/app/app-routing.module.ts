import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProfileComponent }     from "./pages/profile.component";
import { LearnComponent }         from "./pages/learn.component";

const routes: Routes = [
  { path: '', component: ProfileComponent },
  { path: 'learn', component: LearnComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}
