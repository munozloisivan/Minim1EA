import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { AuthorService } from '../author.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  author: {};
  books: any;

  constructor(private bookService: BookService, private authorService: AuthorService) { }

  ngOnInit() {
    this.getBookList();
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
