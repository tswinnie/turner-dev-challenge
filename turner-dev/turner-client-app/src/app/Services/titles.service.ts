import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Title } from '../Services/ITitle';
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';


@Injectable()
export class TitlesService {

  titles: Title[];

  constructor(public http: HttpClient, @Inject('BASE_URL') public baseUrl: string) { }

  public GetTitles(): Observable<Title[]> {
    return this.http.get<Title[]>(this.baseUrl + 'api/Title/ListTitles')
  }

  public SearchTitle(searchTerm: string): Observable<Title[]> {
    if (!searchTerm.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Title[]>(this.baseUrl + `api/Title/FindTitle/?titleName=${searchTerm}`)
  }


}
