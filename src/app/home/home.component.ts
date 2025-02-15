import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import {signOut } from "firebase/auth";
import {auth} from '../firebase'
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private router:Router){}

  books = [
    {
      img:'/assets/atomic.jpg',
      title:'Atomic Habits',
      src:'/assets/Atomic habits.pdf'
    },
    {
      img:'/assets/money.jpg',
      title:'Pyschology of Money',
      src:'/assets/money.pdf'
    },
    {
      img:'/assets/rich.jpg',
      title:'Rich Dad Poor Dad',
      src:'/assets/Rich-Dad-Poor-Dad.pdf'
    },
    {
      img:'/assets/subtle.jpg',
      title:'The Subtle Art ',
      src:'/assets/subtle.pdf'
    },
    {
      img:'/assets/ends.jpg',
      title:'It ends with us',
      src:'/assets/ends.pdf'
    }
  ]

  signOut(){
    this.router.navigate(['/login'])
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });

   
  }
}
    
  

