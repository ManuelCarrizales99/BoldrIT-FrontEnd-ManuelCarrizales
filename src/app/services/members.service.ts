import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Member } from '../models/members.model';
import { Works } from '../models/works.model';

@Injectable({
  providedIn: 'root'
})
export class MembersService {

  apiUrl="https://api.crossref.org/members";
  constructor(private http: HttpClient) { }

  getAllMembers(rows?:number, offset?: number){
    let params = new HttpParams();
    if(rows && offset){
      params = params.set('rows',rows)
      params = params.set('offset',offset)
    }
    return this.http.get<Member[]>(this.apiUrl,{params});
  }

  getMember(id: string){
    return this.http.get<Member>(`${this.apiUrl}/${id}`)
  }

  getMemberWork(id:string){
    return this.http.get<Works[]>(`${this.apiUrl}/${id}/works`)
  }
}
