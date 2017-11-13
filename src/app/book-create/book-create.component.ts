import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../book.service';
import {AuthorService} from '../author.service';


@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent implements OnInit {
  authors: any;
  book = {
    // isbn: String,
    title: String,
    author: [{type: Number}],
    publisher: String,
    price: Number
  };

  constructor(private bookService: BookService, private router: Router, private authorService: AuthorService) { }

  ngOnInit() {
    this.getAuthorList();
  }

  setAutor(id) {
    // this.idA = id;
    this.book.author = id;
    console.log('EL PUTO ID ES:' + this.book.author);
  }

  saveBook() {
    this.bookService.saveBook(this.book).then((result) => {
      let id = result['_id'];
      this.router.navigate(['/book-details', id]);
    }, (err) => {
      console.log(err);
    });
  }

  getAuthorList() {
    this.authorService.getAllAuthors().then((res) => {
      this.authors = res;
    }, (err) => {
      console.log(err);
    });
  }


}
