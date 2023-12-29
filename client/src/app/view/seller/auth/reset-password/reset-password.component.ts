import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

// Components, Interface and Services
import { HttpService } from 'src/app/shared/services/http.service';
import { ToasterServiceService } from 'src/app/shared/services/toaster-service.service';
import { patternValidator } from 'src/app/shared/validators/pattern.validator';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit, OnDestroy {

  // Instance variable
  resetPasswordForm!: FormGroup; 
  sellerId!: string;
  token!: string;

  constructor(
    private fb: FormBuilder,                                                  // Form Builder
    private httpService: HttpService,                                         // Http service
    private toasterService: ToasterServiceService,                            // Toaster service
    private activeRoute: ActivatedRoute                                       // Activated Route
  ) { }

  ngOnInit(): void {
    this.getParamsAndQueryParams()
  }

  ngOnDestroy(): void {
    
    this.resetPasswordForm.reset();
  }

  initResetPasswordForm(): void {

    this.resetPasswordForm = this.fb.group({
      password: ['',[Validators.required,patternValidator(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/)]]
    })
  }

  getParamsAndQueryParams() {

    this.activeRoute.params.subscribe((res: any) => {
      console.log("Res: ",res)
      this.sellerId = res.sellerId
    })

    this.activeRoute.queryParams.subscribe((res: any) => {
      this.token = res.token

      this.verifyResetPasswordLink(this.sellerId,this.token);
    })
  }

  verifyResetPasswordLink(sellerId: string,token: string) {

    const url = `auth/seller/reset-password/${sellerId}?token=${token}`

    this.httpService.get(url).subscribe({
      next: (res) => {

      },
      error: (err: any) => {
      }
    })
  }

  submitResetPasswordForm() {

    this.httpService.post("",{}).subscribe({

    })
  }
}
