import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class BookService {

  constructor(private http: Http) { }

  getAllBooks() {
    return new Promise((resolve, reject) => {
      this.http.get('/book')
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  getSubjectsByName(name) {
    return new Promise((resolve, reject) => {
      this.http.get('/book/filter/title/' + name)
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  getSubjectsByTitulacion(titulacion) {
    return new Promise((resolve, reject) => {
      this.http.get('/book/filter/titulacion/' + titulacion)
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  getSubjectsByQuatrimestre(quatrimestre) {
    return new Promise((resolve, reject) => {
      this.http.get('/book/filter/quatrimestre/' + quatrimestre)
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  getSubjectsOrderedByName() {
    return new Promise((resolve, reject) => {
      this.http.get('/book/filter/sort')
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  showBook(id) {
    return new Promise((resolve, reject) => {
      this.http.get('/book/' + id)
        .map(res => res.json())
        .subscribe(res => {
          resolve(res)
        }, (err) => {
          reject(err);
        });
    });
  }

  saveBook(data) {
    return new Promise((resolve, reject) => {
      this.http.post('/book', data)
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  updateBook(id, data) {
    return new Promise((resolve, reject) => {
      this.http.put('/book/' + id, data)
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  deleteBook(id) {
    return new Promise((resolve, reject) => {
      this.http.delete('/book/' + id)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  addAuthorToBook(idbook, idauthor) {
    console.log('BookService AddAuthor -- idbook: ' + idbook + 'idauthor:' + idauthor);
    return new Promise((resolve, reject) => {
      this.http.post('/book/' + idbook + '/authors/' + idauthor, null)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  deleteAuthorFromBook(id, idauthor) {
    return new Promise((resolve, reject) => {
      this.http.put('/book/' + id + '/authors/' + idauthor, null)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }
}


