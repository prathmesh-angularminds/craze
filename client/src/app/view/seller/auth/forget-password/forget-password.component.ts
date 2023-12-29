import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/shared/services/http.service';
import { ToasterServiceService } from 'src/app/shared/services/toaster-service.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {

  forgetPasswordForm!: FormGroup;
  showValidationMessage: boolean = false;
  
  constructor(
    private fb: FormBuilder,
    private toasterService: ToasterServiceService,
    private httpService: HttpService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initForgetPasswordForm();
  }

  initForgetPasswordForm() {

    this.forgetPasswordForm = this.fb.group({
      email: ['',[Validators.required,Validators.email]]
    })
  }

  get email() {

    return this.forgetPasswordForm.get('email') as FormControl;
  }

  // Submit forget password form
  submitForgetPasswordForm() {
    
    // If forget password form is in valid
    if(this.forgetPasswordForm.invalid) {
      this.showValidationMessage = true;
      return;
    }

    console.log("Hello");

    const url = "auth/seller/forget-password"

    this.httpService.post(url,this.forgetPasswordForm.value).subscribe({
      next: () => {
        this.toasterService.showToaster.next({
          message: "Reset password link is send to " + this.forgetPasswordForm.value.email,
          type: "Success"
        })
      },
      error: (err) => {
        console.log(err);
        this.toasterService.showToaster.next({
          message: err.error.message,
          type: "Danger"
        })
      }
    })
  }
}
