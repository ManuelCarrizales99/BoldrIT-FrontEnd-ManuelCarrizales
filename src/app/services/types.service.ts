import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Types } from '../models/types.model';
import { Works } from '../models/works.model';

@Injectable({
  providedIn: 'root'
})
export class TypesService {
  apiUrl="https://api.crossref.org/types";
  constructor(private http:HttpClient) { }

  getAllTypes(rows?:number, offset?: number){
    let params = new HttpParams();
    if(rows && offset){
      params = params.set('rows',rows)
      params = params.set('offset',offset)
    }
    return this.http.get<Types[]>(this.apiUrl,{params});
  }

  getTypeInformation(id: string){
    return this.http.get<Types>(`${this.apiUrl}/${id}`)
  }

  getTypesWorks(id: string){
    return this.http.get<Works[]>(`${this.apiUrl}/${id}/works`)
  }
}
