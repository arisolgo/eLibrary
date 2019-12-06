import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { LibraryComponent } from './library/library.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { CreateBookComponent } from './create-book/create-book.component';
import { ReadBookComponent } from './read-book/read-book.component';

const routes: Routes = [


];

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: "",
        component: AppComponent,
        children: [
          { path: "library", component: LibraryComponent },
          { path: "register", component: RegisterComponent },
          { path: "login",component:LoginComponent},
          {path: "book-detail",component:BookDetailComponent},
          {path: "create-book",component:CreateBookComponent},
          {path: "read-book",component:ReadBookComponent}
          
        ]
      }
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
