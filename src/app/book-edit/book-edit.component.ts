import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../book.service';
import { AuthorService } from '../author.service';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {

  authors: any;
  book = {};

  constructor(private bookService: BookService, private router: Router, private route: ActivatedRoute, private authorService: AuthorService) { }

  ngOnInit() {
    this.getBook(this.route.snapshot.params['id']);
    this.getAuthorList();
  }

  getBook(id) {
    this.bookService.showBook(id).then((res) => {
      this.book = res;
      console.log(this.book);
    }, (err) => {
      console.log(err);
    });
  }

  updateBook(id) {
    this.bookService.updateBook(id, this.book).then((result) => {
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

  setAutor(idbook, idauthor) {
    console.log('book.edit component --- BOOK ID : '+ idbook + 'IDAUTHOR: ' + idauthor);
    this.bookService.addAuthorToBook(idbook, idauthor).then((result) => {
      this.getBook(this.route.snapshot.params['id']);
      this.getAuthorList();
    }, (err) => {
      console.log(err);
    });
  }

  deleteAuthor(idbook, idauthor) {
    console.log('book.edit  DELETE AUTHOR --- BOOK ID : ' + idbook + 'IDAUTHOR: ' + idauthor);
    this.bookService.deleteAuthorFromBook(idbook, idauthor).then((result) => {
      this.getBook(this.route.snapshot.params['id']);
    }, (err) => {
      console.log(err);
    });
  }

}
