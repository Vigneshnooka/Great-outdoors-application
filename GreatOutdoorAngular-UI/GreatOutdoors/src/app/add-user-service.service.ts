import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError} from 'rxjs/operators';
import { AddUserResponse } from './add-user/models/add-user-response';
import { User } from './add-user/models/user';

@Injectable({
  providedIn: 'root'
})
export class AddUserServiceService {

  constructor(private httpClient:HttpClient) {
   }

   public doRegistration(user: any): AddUserResponse{
     let response : any = this.httpClient.post("http://localhost:8585/signUp",user);
     return response;
   }


   public doLogin(username : String , password: String):Observable<AddUserResponse>{
     let headers =new HttpHeaders({Authorization : 'Basic ' + btoa(username + ':' + password) });
     let obser : Observable<AddUserResponse> = this.httpClient.
                                  get<AddUserResponse>("http://localhost:8585/user",{headers})
                                  .pipe(catchError(this.handleError));
      return obser;
   }

   handleError(error: { message: any; }){
     return throwError(error.message || "Server Error");
    
   }
}