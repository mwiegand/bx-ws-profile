import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';


@Injectable()
export class DataService {
  /*init DataService code-by-color #7F1C7D*/
  private dataURL = 'https://hs-mw-backend.eu-gb.mybluemix.net/api/query';  // URL to web api
  // private dataURL = 'https://'+'<your_discovery_backend>'+'.mybluemix.net/api/query';  // URL to web api
  // private dataURL = 'http://localhost:6000/api/query';

  constructor(private http: Http) { }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
  private headers = new Headers({'Content-Type': 'application/json'});

  query(queryString: any): Promise<any> {
    return this.http
      .post(this.dataURL, JSON.stringify({query:queryString}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as any)
      .catch(this.handleError);
  }
}
