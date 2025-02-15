import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { signInWithEmailAndPassword } from 'firebase/auth';
import {auth} from '../firebase'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email:string=''
  password:string=''

  constructor(private router:Router){}

  onLogin(){
    signInWithEmailAndPassword(auth, this.email, this.password)
    .then((userCredential) => {
      
      const user = userCredential.user;
      
      alert('Valid account, You are redirected to Home page')
      this.router.navigate(['/home'])
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert('Wrong Email or password or Account does not exists')
      this.email=''
      this.password=''
    });
  }
}


