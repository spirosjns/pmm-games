import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private http: HttpClient) { }

  url: string = 'https://api.rawg.io/api/games';
  urlFakePost = 'https://jsonplaceholder.typicode.com/posts';

  httpOptions = {
    headers : new HttpHeaders({
      'Content-Type': 'application-json',
      'crossDomain': 'true'
    })
  }
  params = new HttpParams()
  .set('key', '546121027b7a48cea28c2f563bffa660')
  .set('dates', '2019-09-01,2019-09-30')
  .set('platforms', '18, 1, 7');

  getData() {
    return this.http.get(this.url, {params: this.params})
    .pipe(
      retry(1),
      catchError(error => throwError(() => `Something went wrong ${error.message}`))
    )
  }

  postData() {
    const data = {
      first_name: 'nik',
      last_name: 'georgiou',
      email: 'nikexample.gr'
    }

    return this.http.post(this.urlFakePost, JSON.stringify(data), this.httpOptions)
  }

}
