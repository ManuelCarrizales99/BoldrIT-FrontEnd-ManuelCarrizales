import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse, HttpStatusCode } from '@angular/common/http';
import { Funder } from '../models/funder.model';
import { Works } from '../models/works.model';

@Injectable({
  providedIn: 'root'
})
export class FundersService {
  apiUrl="https://api.crossref.org/funders";
  constructor(private http:HttpClient) { }

  getAllFunders(rows?:number, offset?: number){
    let params = new HttpParams();
    if(rows && offset){
      params = params.set('rows',rows)
      params = params.set('offset',offset)
    }
    return this.http.get<Funder[]>(`${this.apiUrl}`,{params});
  }

  getFunder(id: string){
    return this.http.get<Funder>(`${this.apiUrl}/${id}`)
  }

  getFunderWorks(id: string){
    return this.http.get<Works[]>(`${this.apiUrl}/${id}/works`)
  }

}
