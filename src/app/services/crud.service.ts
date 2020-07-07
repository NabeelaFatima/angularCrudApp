import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  SERVER_URL: string = "api";
  getURL: string;
  createURL: string;
  updateURL: string;
  deleteURL: string;
  headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');
  httpOptions = {
    headers: this.headers
  };

  constructor(private httpClient: HttpClient) { }

  private handleError(error: any) { //Created a function to handle and log errors, in case
    return throwError(error);
  }

  public setBaseURL(baseURL: string, getURL: string, createURL: string, updateURL: string, deleteURL: string): void {
    this.SERVER_URL = baseURL;
    this.getURL = getURL;
    this.createURL = createURL;
    this.updateURL = updateURL;
    this.deleteURL = deleteURL;
  }

  public getRecords() {
    return this.httpClient.get(`${this.SERVER_URL + '/' + this.getURL}`).pipe(
      tap(data => console.log("Table Data Loaded")),
      catchError(this.handleError)
    );
  }

  public createRecord(data) {
    data.id = <number>null;
    return this.httpClient.post(`${this.SERVER_URL + '/' + this.createURL}`, data, this.httpOptions).pipe(
      tap(data => console.log(`Added record, response:` + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  public deleteRecord(Id) {
    let id = <number>Id;
    return this.httpClient.delete(`${this.SERVER_URL + '/' + this.deleteURL}/${id}`).pipe(
      tap(data => console.log(`Deleted record, response:` + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }
  public updateRecord(data) {
    let id = Number(data["id"]);

    return this.httpClient.put(`${this.SERVER_URL + '/' + this.updateURL}`, data, this.httpOptions).pipe(
      tap(data => console.log(`Updated record, response:` + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

}
