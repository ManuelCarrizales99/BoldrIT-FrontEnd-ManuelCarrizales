import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse, HttpStatusCode } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FundersService {
  apiUrl="https://api.crossref.org/funders";
  constructor(private http:HttpClient) { }

  getAllFunders(limit?:number, offset?: number){
    let params = new HttpParams();
    if(limit && offset){
      params = params.set('limit',limit)
      params = params.set('offset',offset)
    }
    return this.http.get(this.apiUrl,{params});
  }


}
