import { Router } from '@angular/router';
import { LoginService } from './../login.service';
import { Component, OnInit } from '@angular/core';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  data: any;
  message: string;

  constructor(private loginService : LoginService, private router: Router) { 
    this.data = {
      username: '',
      password: ''
    };
  }

  ngOnInit(): void {

  }

  logon(){
    this.loginService.loginRequest(this.data)
    .subscribe(res => {
      console.log(res);
      console.log(res.body.status+' '+res.body.data);
      if(res.body.status !== 'error'){
        this.loginService.saveToken(res.body);
        this.message = '';
        if(res.body.authorities[0].authority === 'ROLE_ADMIN'){
            this.router.navigate(['produits']);
        }
      }
      else{
        if (res.body.data.error === 'INVALID_USERNAME'){
          this.message = 'Utilisateur inexistant';
        }
        else if (res.body.data.error === 'BAD_CREDENTIALS'){
          this.message = 'Mot de passe incorect';
        }
      }
    },
    err => {
      console.log(err);
    });
  }

}
