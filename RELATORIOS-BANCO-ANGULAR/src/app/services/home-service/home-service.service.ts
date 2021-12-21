import { Injectable, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeServiceService implements OnInit {
  public url = 'http://localhost:10000/';

  constructor(
    private http: HttpClient,
  ) { }
  ngOnInit(): void {
  }

  async getServers () {
    let retorno = await this.getdeletehttp('get', 'list');
    return retorno;
  }

  async insertEscopo (objeto) {
    let retorno = await this.postputhttp('post', 'insert', objeto);
    return retorno;
  }

  getdeletehttp(type, url) {
    const opts = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=ISO-8859-1',
        'Accept': '*/*',
        'Access-Control-Allow-Headers': '*'
      })
    }
    return new Promise((resolve, reject) => {
      try {
        this.http[type](`${this.url}${url}`, opts).subscribe(
          data => {
            resolve(data)
          },
          error => {
            resolve(error);
          });
      } catch (error) {
        resolve(error);
      }
    })
  }

  postputhttp(type, url, object) {
    const opts = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=ISO-8859-1',
        'Accept': '*/*',
        'Access-Control-Allow-Headers': '*'
      })
    }
    return new Promise((resolve, reject) => {
      try {
        this.http[type](`${this.url}${url}`, object, opts).subscribe(
          data => {
            resolve(data)
          },
          error => {
            resolve(error);
          });
      } catch (error) {
        resolve(error);
      }
    })
  }


}
