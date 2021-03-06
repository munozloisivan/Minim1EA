import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthorService {

  constructor(private http: Http) { }

  getAllAuthors() {
    return new Promise((resolve, reject) => {
      this.http.get('/author')
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  saveAuthor(data) {
    return new Promise((resolve, reject) => {
      this.http.post('/author', data)
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  showAuthor(id) {
    return new Promise((resolve, reject) => {
      this.http.get('/author/' + id)
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  updateAuthor(id, data) {
    return new Promise((resolve, reject) => {
      this.http.put('/author/' + id, data)
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  deleteAuthor(id) {
    return new Promise((resolve, reject) => {
      this.http.delete('/author/' + id)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }
}
