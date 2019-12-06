import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { RouterModule } from "@angular/router";
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from "./app.component";



import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppRoutingModule } from "./app-routing.module";
import { ComponentsModule } from "./components/components.module";
import { LibraryComponent } from './library/library.component';
import { BrowserModule } from '@angular/platform-browser';
import {APP_BASE_HREF} from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { CreateBookComponent } from './create-book/create-book.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { ListenBookComponent } from './listen-book/listen-book.component';
import { LoginComponent } from './login/login.component';
import { ReadBookComponent } from './read-book/read-book.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { HttpClientModule,  HTTP_INTERCEPTORS } from '@angular/common/http'
import { TokenInterceptorService} from './services/token-interceptor.service'
import { from } from 'rxjs';


export function tokenGetter() {
  return localStorage.getItem("access_token");
}

@NgModule({
  imports: [
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    RouterModule.forRoot([]),
    BrowserModule,
    PdfViewerModule,
    
    ToastrModule.forRoot()
  ],
  declarations: [AppComponent, LibraryComponent, RegisterComponent, BookDetailComponent, CreateBookComponent, EditBookComponent, ListenBookComponent, LoginComponent, ReadBookComponent],
  providers: [{provide: APP_BASE_HREF, useValue : '/' },{provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule {}
