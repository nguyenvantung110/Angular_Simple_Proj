import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProvincesService {

  constructor(private http: HttpClient) { }

  readonly APIUrl = "http://10.128.12.243:8081/api/provinces";
  getProvinces():Observable<any[]>{
    return this.http.get<any>(this.APIUrl);
  }
}
