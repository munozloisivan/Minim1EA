import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { BookService} from './book.service';
import {AuthorService} from './author.service';
import { BookComponent } from './book/book.component';
import { AuthorComponent } from './author/author.component';
import {RouterModule, Routes} from '@angular/router';

import { HttpModule} from '@angular/http';
import { FormsModule} from '@angular/forms';

import { HashLocationStrategy, LocationStrategy} from '@angular/common';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookCreateComponent } from './book-create/book-create.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { AuthorCreateComponent } from './author-create/author-create.component';
import { AuthorDetailComponent } from './author-detail/author-detail.component';
import { AuthorEditComponent } from './author-edit/author-edit.component';
import { HomeComponent } from './home/home.component';


const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'books', component: BookComponent },
  { path: 'book-details/:id', component: BookDetailComponent },
  { path: 'book-create', component: BookCreateComponent },
  { path: 'book-edit/:id', component: BookEditComponent },
  { path: 'authors', component: AuthorComponent },
  { path: 'author-create', component: AuthorCreateComponent },
  { path: 'author-details/:id', component: AuthorDetailComponent },
  { path: 'author-edit/:id', component: AuthorEditComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    AuthorComponent,
    BookDetailComponent,
    BookCreateComponent,
    BookEditComponent,
    AuthorCreateComponent,
    AuthorDetailComponent,
    AuthorEditComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [BookService, AuthorService, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
