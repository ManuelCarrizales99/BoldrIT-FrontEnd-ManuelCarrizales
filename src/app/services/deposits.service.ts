import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Deposit } from '../models/deposits.model';

@Injectable({
  providedIn: 'root'
})
export class DepositsService {

  apiUrl="https://api.crossref.org/deposits";
  constructor(private http:HttpClient) { }

  getAllDeposits(rows?:number, offset?: number){
    let params = new HttpParams();
    if(rows && offset){
      params = params.set('rows',rows)
      params = params.set('offset',offset)
    }
    return this.http.get<Deposit[]>(this.apiUrl,{params});
  }

  getDeposit(id: string){
    return this.http.get<Deposit>(`${this.apiUrl}/${id}`)
  }

}
