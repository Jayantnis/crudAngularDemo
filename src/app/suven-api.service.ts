import { Injectable } from '@angular/core';

import { HttpClient } from "@angular/common/http";

import {Observable} from 'rxjs';
import { policy } from './policy';


@Injectable({
  providedIn: 'root'
})
export class SuvenApiService {

  constructor(private _httpClient:HttpClient) { }

  php_api_server = "http://localhost:80/suvan_api";

  readPolicies():Observable<policy[]>{
    return this._httpClient.get<policy[]>(`${this.php_api_server}/read.php`);
  }

  createPolicy(policy:policy):Observable<policy>{
    return this._httpClient.post<policy>(`${this.php_api_server}/create.php`,policy);
  }

  updatePolicy(policy:policy){
      return this._httpClient.put<policy>(`${this.php_api_server}/update.php`,policy);
  }

  deletePolicy(id:number)
  {
    return this._httpClient.delete<policy>(`${this.php_api_server}/delete.php/?id=${id}`);
  }
}
