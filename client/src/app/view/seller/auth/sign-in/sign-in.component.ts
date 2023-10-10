import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  // Instance variables
  signInForm!: FormGroup;
  passwordVisibility: boolean = false;
  imageUrl: String = "eye.svg";

  constructor(
    private fb: FormBuilder                       // Form Builder instance
  ) { 

    this.initSignInForm()
  }


  ngOnInit(): void {
  }

  // Form Functions

  // This function initialize sign in form
  initSignInForm() {

    this.signInForm = this.fb.group({
      email: ["",[Validators.required,Validators.email]],
      password: ["",[Validators.required,Validators.pattern('^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$')]]
    })
  }

  get email() {
    return this.signInForm.controls['email'];
  }

  get password() {
    return this.signInForm.controls['password'];
  }

  // Change password icon on clicking icon
  onPasswordVisibilityChanged() {

    this.passwordVisibility = !this.passwordVisibility;
    this.imageUrl = this.passwordVisibility ? "eye-off.svg" : "eye.svg";
    console.log(this.imageUrl);
  }
}
