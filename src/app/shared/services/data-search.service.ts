import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';

import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Data }           from '../models/data';

@Injectable()
export class DataSearchService {

  constructor(private http: Http) {}

  search(term: string): Observable<Data[]> {
    return this.http
      .get(`api/data/?name=${term}`)
      .map(response => response.json().data as Data[]);
  }
}
