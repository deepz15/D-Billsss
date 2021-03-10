import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntryPageComponent } from './entry-page/entry-page.component';
import { BillingPageComponent } from './billing-page/billing-page.component';
import { AppComponent } from './app.component';
const newLocal = 'Entry';
const routes: Routes = [
  {path: 'Entry', component: EntryPageComponent},
  {path: 'Billing', component: BillingPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponent = [AppComponent, EntryPageComponent, BillingPageComponent];
