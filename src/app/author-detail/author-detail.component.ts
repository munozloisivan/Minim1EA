import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { AuthorService } from '../author.service';

@Component({
  selector: 'app-author-detail',
  templateUrl: './author-detail.component.html',
  styleUrls: ['./author-detail.component.css']
})
export class AuthorDetailComponent implements OnInit {

  author = {};

  constructor(private route: ActivatedRoute, private authorService: AuthorService, private router: Router) { }

  ngOnInit() {
    this.getAuthorDetail(this.route.snapshot.params['id']);
  }

  getAuthorDetail(id) {
    this.authorService.showAuthor(id).then((res) => {
      this.author = res;
      console.log(this.author);
    }, (err) => {
      console.log(err);
    });
  }

  deleteAuthor(id) {
    this.authorService.deleteAuthor(id).then((result) => {
      this.router.navigate(['/authors']);
    }, (err) => {
      console.log(err);
    });
  }


}
