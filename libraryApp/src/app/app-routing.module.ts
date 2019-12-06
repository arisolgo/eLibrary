import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UserComponent } from './pages/user/user.component';

const routes: Routes = [


];

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: "",
        component: AppComponent,
        children: [
          { path: "dashboard", component: DashboardComponent },
          { path: "user", component: UserComponent },
        ]
      }
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
