import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, forkJoin, of } from 'rxjs';
import { catchError, retry, map, mergeMap, switchMap, } from 'rxjs/operators';

// const httpOptions = {
//     headers: new HttpHeaders({
//       'Content-Type': 'text/html; charset=utf-8'
//     })
// };

@Injectable({
  providedIn: 'root'
})
export class TestServiceService {

  api = 'https://swapi.co/api/';

  constructor(private http: HttpClient) { }

  getHomeWorld(): Observable<any> {
    return this.http.get<any>(this.api + 'people/1').pipe( // Combining Observables in series
      // map((res: any) => res), // changing to res.json() no longer needed
      mergeMap((character: any) => { // AKA flatMap
        return this.http.get(character.homeworld).pipe(
          // map((res: any) => res); // return only home world
          map((res: any) => { // return character and home world
            const homeworld = res;
            character.homeworldinfo = homeworld;
            return character;
          })
        );
      })
    );
  }

  getMultipleCharacters(): Observable<any> { // Combining Observables in parallel
    return forkJoin([
      this.http.get('https://swapi.co/api/people/2/').pipe(
        map(res => res)
      ),
      this.http.get('https://swapi.co/api/people/3/').pipe(
        map(res => res)
      )
    ])
    .pipe(
      map((data: any[]) => {
        return data;
      })
    );
  }

  getResidents(path: string): Observable<any> { // Combining Observables in series and in parallel
    return this.http.get<any>(path).pipe(
      mergeMap((homeworld: any) => {
        if (homeworld.residents.length > 0) {
          return forkJoin(
            homeworld.residents.map((resident: any) => {
              return this.http.get(resident).pipe(
                map((res: any) => {
                  return res;
                })
              );
            })
          );
        }
        return of([]);
      })
    );
  }

  // pipe() method on Observable and composes operators (like map, filter, etc), operators always return observables
  // map() transforms data by applying a function and returns observable
  // concatMap() waits for observable to finish before the next but takes longer time, ex: top 10 list
  // mergeMap() executes request in parallel but not in order, ex: adding additional data from 3rd party request
  // forkJoin() executes request in parallel and return an array of responses when all requests have finished
  //            but has to wait for all request to finish and if 1 request fails, it fails for all requests
  //            This behavior can be changed by catching error and returning undefined in the inner observable
  //            and then filter the results
  // switchMap() cancels previous request and only returns result for latest request, ex: autocomplete search
  // exhaustMap() ignores all requests until current request is complete, ex: logging in, clicking login button more than once
  // of() creates an observable


}

