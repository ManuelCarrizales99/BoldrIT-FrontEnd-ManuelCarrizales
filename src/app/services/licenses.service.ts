import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { License } from '../models/licenses.model';

@Injectable({
  providedIn: 'root'
})
export class LicensesService {
  apiUrl="https://api.crossref.org/licenses";
  constructor(private http:HttpClient) { }
  getAllLicenses(rows?:number, offset?: number){
    let params = new HttpParams();
    if(rows && offset){
      params = params.set('rows',rows)
      params = params.set('offset',offset)
    }
    return this.http.get<License[]>(this.apiUrl,{params});
  }

}
