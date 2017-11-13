import { Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { AuthorService } from '../author.service';

@Component({
  selector: 'app-author-create',
  templateUrl: './author-create.component.html',
  styleUrls: ['./author-create.component.css']
})
export class AuthorCreateComponent implements OnInit {

  author = {};

  constructor(private authorService: AuthorService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  saveAuthor() {
    this.authorService.saveAuthor(this.author).then((result) => {
      let id = result['_id'];
      this.router.navigate(['/author-details', id]);
    }, (err) => {
      console.log(err);
    });
  }
}
