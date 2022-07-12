import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { LoginForm, RegisterForm } from '../types/Auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated: boolean = false; 
  isLoading: boolean  = false;

  constructor(private router: Router){}



  //Login function.......... 
  login(form:LoginForm)
  {
    if(this.isLoading) return; 
    this.isLoading = true; 

    const auth = getAuth(); 
    signInWithEmailAndPassword(auth, form.email, form.password)
    .then((userCredential) => {
      alert('Succesfully login !');
      this.isAuthenticated = true; 
      this.router.navigate(['']); ///that is navigate to the base URL or home. 
    })
    .catch((error) =>{
      const errorCode = error.code; 
      const errorMessage = error.message;
      alert("Credentials does not mathch our record!");
      
    }).finally(() => (this.isLoading = false));

  }
  passwordMathched: boolean = true;   
  

  //Register function..........
  register(form:RegisterForm)
  {
    if(this.isLoading) return; 
    this.isLoading = true; 
    if(form.password != form.confirm_password){ 
      this.passwordMathched = false; 
      alert('Password mismatched!');
      return;   
    }
    const auth = getAuth(); 
    createUserWithEmailAndPassword(auth, form.email, form.password)
    .then((userCredential) => {
        this.isAuthenticated =  true; //when user able to Reg in.
        alert('Registration successful!');
    })
    .catch((error)=> {         
      const errorCode = error.code; 
      const errorMessage = error.code;  
      this.isAuthenticated =  false; //when user not able to Reg in. 
      alert('Registration failed!');   
    })
    .finally(() => (this.isLoading =  false)); 

  }

  logout ()
  {
    const auth = getAuth(); 
    signOut(auth)
      .then(() => 
      {
        this.router.navigate(['login']); 
        this.isAuthenticated = false;
      }) 
      .catch((error) =>{

      }); 
  }
}
