import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpService } from 'src/app/shared/http.service';
import { ToasterServiceService } from 'src/app/shared/toaster/toaster-service/toaster-service.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  // Instance variables
  showValidationMessage: boolean = false;
  signInForm!: FormGroup;
  passwordVisibility: boolean = false;
  imageUrl: String = "eye.svg";

  constructor(
    private fb: FormBuilder,                       // Form Builder instance,
    private toasterService: ToasterServiceService, // Toaster service
    private httpService: HttpService               // Http Service
  ) { 

    this.initSignInForm()
  }


  ngOnInit(): void {
  }

  ///////////////////////////////////////////////// Form Functions

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

    this.toasterService.showToaster.next(true);

    this.passwordVisibility = !this.passwordVisibility;
    this.imageUrl = this.passwordVisibility ? "eye-off.svg" : "eye.svg";
  }

  submitLoginForm() {

    let signIn = this.signInForm.value;

    // If form is invalid
    if(this.signInForm.invalid) {
      this.showValidationMessage = true;
      console.log(this.showValidationMessage);
      return;
    }

    this.httpService.post('',signIn).subscribe({
      next: () => {

        this.toasterService.showToaster.next({
          message: "Seller login in successfully ",
          type: "Success"
        })
      },
      error: (err: any) => {

        this.toasterService.showToaster.next({
          message: err.message,
          type: "Success"
        })
      }
    })
  }
}
