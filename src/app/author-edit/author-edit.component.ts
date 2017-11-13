import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthorService } from '../author.service';

@Component({
  selector: 'app-author-edit',
  templateUrl: './author-edit.component.html',
  styleUrls: ['./author-edit.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AuthorEditComponent implements OnInit {

  author = {};
  constructor(private authorService: AuthorService, private router: Router, private route: ActivatedRoute ) { }

  ngOnInit() {
    this.getAuthor(this.route.snapshot.params['id']);
  }
  getAuthor(id) {
    this.authorService.showAuthor(id).then((res) => {
      this.author = res;
      console.log(this.author);
    }, (err) => {
      console.log(err);
    });
  }

  updateAuthor(id) {
    this.authorService.updateAuthor(id, this.author).then((result) => {
      let id = result['_id'];
      this.router.navigate(['/author-details', id]);
    }, (err) => {
      console.log(err);
    });
  }

}
