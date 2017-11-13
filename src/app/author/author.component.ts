import { Component, OnInit} from '@angular/core';
import { AuthorService} from '../author.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  authors: any;

  constructor(private authorService: AuthorService) { }

  ngOnInit() {
    this.getAuthorList();
  }

  getAuthorList() {
    this.authorService.getAllAuthors().then((res) => {
      this.authors = res;
    }, (err) => {
      console.log(err);
    });
  }

}
