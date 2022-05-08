import { Injectable } from '@angular/core';
import {environment} from "../../../../environments/environment.prod";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  public readonly API = environment.publicApi + "/";

  constructor(private http: HttpClient) { }

  public login(user: any) {
    return this.http.post<any>(this.API + `login`, user);
  }

}
