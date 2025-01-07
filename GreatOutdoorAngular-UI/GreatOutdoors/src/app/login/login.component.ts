import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AddUserResponse } from '../add-user/models/add-user-response';
import { AddUserServiceService } from 'src/app/add-user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username : any;
  password : any;
  message : any;
  errorMessage : any = "";
  anyError : any = false;

  constructor(private httpClient : AddUserServiceService,private router : Router) { }

  ngOnInit(): void {
  }
  public doLogin(){
    let observable:Observable<AddUserResponse> =  this.httpClient.doLogin(this.username,this.password);
    observable.subscribe((data)=>{
     this.router.navigateByUrl("/welcome");
   },(error)=>{
     console.log(error);
     this.errorhandling(error);
    
   })
  }

  public errorhandling(error : any){
    if(error === "Http failure response for http://localhost:8585/user: 401 OK"){
      this.errorMessage = "Please enter valid details"; 
      this.anyError = true;
    }
  }
}