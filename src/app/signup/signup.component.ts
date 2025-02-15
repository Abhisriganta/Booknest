import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms'
import {createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from '../firebase'
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  imports: [CommonModule,FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  email:string=''
  password:string=''

  constructor(private router:Router){}


onSignup(){

  if(this.password.length<6){
    alert('Your password should contain atleast 6 digits')
    this.password=''
  }

  else{
    
    createUserWithEmailAndPassword(auth, this.email, this.password)
  .then((userCredential) => {
    const user = userCredential.user;
    alert("Account created successfully")
    
    this.router.navigate(['/login'])


  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert('Invalid email or account already exists')
    this.email=''
    this.password=''
  });
  }

  }


}


