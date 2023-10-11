import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/shared/http.service';

// Components, Interface and Services
import { patternValidator } from 'src/app/shared/validators/pattern.validator';
import { ToasterServiceService } from 'src/app/shared/toaster/toaster-service/toaster-service.service';
import { SignIn } from 'src/app/shared/interface/signIn.interface';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit, OnDestroy {

  // Instance variables
  showValidationMessage: boolean = false;
  signInForm!: FormGroup;
  passwordVisibility: boolean = false;
  imageUrl: string = "eye.svg";

  constructor(
    private fb: FormBuilder,                       // Form Builder instance,
    private toasterService: ToasterServiceService, // Toaster service
    private httpService: HttpService,              // Http Service
    private router: Router
  ) { 

    this.initSignInForm()
  }

  ///////////////////////////////////////////////// Life cycle methods

  ngOnInit(): void {
  }

  ngOnDestroy(): void {

    // Reset the signInForm
    this.signInForm.reset();
  }

  ///////////////////////////////////////////////// Form Functions

  // This function initialize sign in form
  initSignInForm() {

    this.signInForm = this.fb.group({
      email: ["",[Validators.required,Validators.email]],
      password: ["",[Validators.required]]
      // ,patternValidator(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/)
    })
  }

  ////////////////// Getter 

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
  }

  // Sign in function
  submitLoginForm() {

    let signInPayload: SignIn = this.signInForm.value;

    // If form is invalid
    console.log(this.signInForm.invalid);
    console.log(this.signInForm);
    if(this.signInForm.invalid) {
      this.showValidationMessage = true;
      return;
    }

    const url: string = "seller"

    console.log("Here");

    this.httpService.get(url,signInPayload).subscribe({
      next: () => {
        this.toasterService.showToaster.next({
          message: "Seller login in successfully ",
          type: "Success"
        })
      },
      error: (err: any) => {

        this.toasterService.showToaster.next({
          message: err.error.message,
          type: "Danger"
        })
      }
    })
  }
}

