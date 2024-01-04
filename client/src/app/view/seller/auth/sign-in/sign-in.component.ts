import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/shared/services/http.service';

// Components, Interface and Services
import { patternValidator } from 'src/app/shared/validators/pattern.validator';
import { ToasterServiceService } from 'src/app/shared/services/toaster-service.service';
import { SignIn } from 'src/app/shared/interface/signIn.interface';

// Environment File data
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit, OnDestroy {

  @ViewChild('captchaEle') captchaEle: any;

  // Instance variables
  showValidationMessage: boolean = false;
  signInForm!: FormGroup;
  passwordVisibility: boolean = false;
  imageUrl: string = "eye.svg";

  // Recaptcha instances
  reCaptchaSiteKey: string = environment.RECAPTCHA_SITE_KEY;

  constructor(
    private fb: FormBuilder,                       // Form Builder instance,
    private toasterService: ToasterServiceService, // Toaster service
    private httpService: HttpService,              // Http Service
    private router: Router,
  ) { }

  ///////////////////////////////////////////////// Life cycle methods

  ngOnInit(): void {
    this.initSignInForm()
  }

  ngOnDestroy(): void {

    // Reset the signInForm
    this.signInForm.reset();
  }

  ///////////////////////////////////////////////// Form Functions

  // This function initialize sign in form
  initSignInForm() {

    this.signInForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, patternValidator(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/)]],
      reCaptcha: ["", Validators.required]
    })
  }

  ////////////////// Getter 

  get email() {
    return this.signInForm.controls['email'];
  }

  get password() {
    return this.signInForm.controls['password'];
  }

  get reCaptcha() {
    return this.signInForm.controls['reCaptcha'];
  }

  // Change password hide show icon on clicking icon
  onPasswordVisibilityChanged() {

    this.passwordVisibility = !this.passwordVisibility;
    this.imageUrl = this.passwordVisibility ? "eye-off.svg" : "eye.svg";
  }

  // Gets ReCAPTCHA Token when resolved event of re-captcha is executed
  getReCaptchaToken(token: string) {

    this.reCaptcha.patchValue(token)
  }

  // Sign in function
  submitLoginForm() {

    this.router.navigateByUrl('/seller/app')


    let signInPayload: SignIn = this.signInForm.value;

    // // // If form is invalid show validation messages
    if (this.signInForm.invalid) {
      this.showValidationMessage = true;
      return;
    }

    // If recaptcha is not available
    // const url: string = "auth/seller/sign-in?captcha=false"
    const url: string = "auth/seller/sign-in"

    this.httpService.post(url, signInPayload).subscribe({
      next: (res: any) => {
        this.toasterService.showToaster.next({
          message: "Seller login in successfully",
          type: "Success"
        })

        // Reset form and captcha 
        this.captchaEle.reset();
        this.signInForm.reset();

        this.router.navigate(['/seller/app']);
      },
      error: (err: any) => {

        this.toasterService.showToaster.next({
          message: err.error.message || err.message,
          type: "Error"
        })

        // Reset form and captcha 
        this.captchaEle.reset();
        this.signInForm.reset();
      }
    })
  }
}

