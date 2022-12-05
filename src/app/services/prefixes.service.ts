import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Prefix } from '../models/prefix.model';
import { Works } from '../models/works.model';

@Injectable({
  providedIn: 'root'
})
export class PrefixesService {
  apiUrl="https://api.crossref.org/prefixes";
  constructor(private http:HttpClient) { }

  getPrefixWorks(prefix: string){
    return this.http.get<Works[]>(`${this.apiUrl}/${prefix}/works`)
  }

  getPrefix(prefix: string){
    return this.http.get<Prefix>(`${this.apiUrl}/${prefix}`)
  }
}
