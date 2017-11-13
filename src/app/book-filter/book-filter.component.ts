import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { AuthorService } from '../author.service';

@Component({
  selector: 'app-book-filter',
  templateUrl: './book-filter.component.html',
  styleUrls: ['./book-filter.component.css']
})
export class BookFilterComponent implements OnInit {

  author: {};
  books: any;

  constructor(private bookService: BookService, private authorService: AuthorService) { }

  ngOnInit() {
  }

  getSubjectByName(name) {
    this.bookService.getSubjectsByName(name).then(res => {
      this.books = res;
    }, (err) => {
      console.log(err);
    })
  }


  getSubjectsByTitulacion(titulacion) {
    this.bookService.getSubjectsByTitulacion(titulacion).then(res => {
      this.books = res;
    }, (err) => {
      console.log(err);
    })
  }

  getSubjectsByQuatrimestre(quatrimestre) {
    this.bookService.getSubjectsByQuatrimestre(quatrimestre).then(res => {
      this.books = res;
    }, (err) => {
      console.log(err);
    })
  }

  getBookList() {
    this.bookService.getAllBooks().then((res) => {
      this.books = res;
    }, (err) => {
      console.log(err);
    });
  }

  getBookDetail(id) {
    this.bookService.showBook(id).then((res) => {
      this.books = res;
      console.log(this.books);
    }, (err) => {
      console.log(err);
    });
  }

  getAuthorDetail(id) {
    this.authorService.showAuthor(id).then((res) => {
      this.author = res;
      console.log(this.author);
    }, (err) => {
      console.log(err);
    });
  }

}
