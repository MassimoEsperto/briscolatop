import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BriscolaService {

errore:string=""
  constructor(private http: HttpClient) {
  }

  buildURL(operation: string = ""): string {

    let URL: string = `http://fantashitcup.altervista.org/briscola/servizi/`;

    URL = URL + operation + ".php"

    return URL

  }

  handleError(response: HttpErrorResponse) {
    console.log("errore:", response)
    let message = response.error ? response.error.message : response
    return throwError(message);
  }




  //CHIAMATE
  getUtenti() {
    return this.http.get(`${this.buildURL("get_utenti")}`).pipe(
      map((res) => {

        return res['data'];
      }),
      catchError(this.handleError));
  }

  getLive() {
    return this.http.get(`${this.buildURL("get_match_live")}`).pipe(
      map((res) => {

        return res['data'];
      }),
      catchError(this.handleError));
  }


  insertNewMatch(payload: any) {

    return this.http.post(`${this.buildURL("set_new_match")}`,{ data: payload })
      .pipe(map((res) => {

        return res['data'];
      }),
        catchError(this.handleError));
  }

  insertNewRecord(payload: any) {

    return this.http.post(`${this.buildURL("set_new_record")}`,{ data: payload })
      .pipe(map((res) => {

        return res['data'];
      }),
        catchError(this.handleError));
  }

  delRecord(record: string) { //match_live

    const params = new HttpParams().set('id_record', record);

    return this.http.get<any>(`${this.buildURL("del_record")}`,{ params: params })
      .pipe(map((res) => {

        return res['data']

      }),
        catchError(this.handleError));
  }

  closeMatch() {
    return this.http.get(`${this.buildURL("set_close_match")}`).pipe(
      map((res) => {

        return res['data'];
      }),
      catchError(this.handleError));
  }
}
