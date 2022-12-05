import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse, HttpStatusCode } from '@angular/common/http';
import { Journals } from '../models/journals.model';
import { Works } from '../models/works.model';
import { ApiResponse } from '../models/apiResponse.model';

@Injectable({
  providedIn: 'root'
})
export class JournalsService {
  apiUrl="http://api.crossref.org/journals";
  // mailto='&mailto=manuicv99@gmail.com'
  constructor(private http:HttpClient) { }

  getAllJournals(rows?:number, offset?: number){
    let params = new HttpParams();
    if(rows && offset){
      params = params.set('rows',rows)
      params = params.set('offset',offset)
    }
    return this.http.get<ApiResponse>(this.apiUrl,{params});
  }

  getJournal(issn: string){
    return this.http.get<Journals>(`${this.apiUrl}/${issn}`)
  }

  getJournalWorks(issn: string){
    return this.http.get<Works[]>(`${this.apiUrl}/${issn}/works`)
  }
}
