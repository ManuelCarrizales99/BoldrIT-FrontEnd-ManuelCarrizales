import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Agency } from '../models/agency.model';
import { ApiResponse, ApiResponseWork } from '../models/apiResponse.model';

@Injectable({
  providedIn: 'root'
})
export class WorksService {

  apiUrl="https://api.crossref.org/works";
  constructor(private http: HttpClient) { }

  getAllWorks(rows?:number, offset?: number){
    let params = new HttpParams();
    if(rows && offset){
      params = params.set('rows',rows)
      params = params.set('offset',offset)
    }
    return this.http.get<ApiResponse>(this.apiUrl,{params});
  }

  getWorkDoi(doi: string){
    return this.http.get<ApiResponseWork>(`${this.apiUrl}/${doi}`)
  }

  getWorkDoiAgency(doi:string){
    return this.http.get<Agency>(`${this.apiUrl}/${doi}/agency`)
  }
}
