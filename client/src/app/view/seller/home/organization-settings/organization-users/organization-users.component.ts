import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HttpService } from 'src/app/shared/services/http.service';
import { ToasterServiceService } from 'src/app/shared/services/toaster-service.service';

@Component({
  selector: 'app-organization-users',
  templateUrl: './organization-users.component.html',
  styleUrls: ['./organization-users.component.scss']
})
export class OrganizationUsersComponent implements OnInit {

  orgId!: string;
  userList: any = [];
  dropDownMenu: any = [
    {
      label: "Deactivate",
      route: "/seller/app/organization-settings/users"
    },
    {
      label: "Activate",
      route: "/seller/app/organization-settings/users"
    },
    {
      label: "Delete",
      route: "/seller/app/organization-settings/users"
    },
  ]

  constructor(private httpService: HttpService,private toasterService: ToasterServiceService) { }

  ngOnInit(): void {

    this.self();
  }

  // API methods

  self() {

    const url: string = 'auth/self';

    this.httpService.get(url).subscribe({
      next: (res: any) => {
        this.orgId = res.result._org._id;

        this.getOrganizationUsers();
      },
      error: (err: Error) => {

        this.toasterService.showToaster.next({
          message: err.message || err.message,
          type: "Error"
        })
      }
    })
  }

  getOrganizationUsers() {

    const url: string = 'organization/users' + `/${this.orgId}` ;

    this.httpService.get(url).subscribe({
      next: (res: any) => {
        this.userList = res.result;
      },
      error: (err: Error) => {

        this.toasterService.showToaster.next({
          message: err.message || err.message,
          type: "Error"
        })
      }
    });
  }

  inviteUser() {
    
    const url: string = 'organization/invite-seller' + `/${this.orgId}`;

    const payload = {
      firstName: "Aditya",
      lastName: "Dhamal",
      email: "adityadhamal10@gmail.com",
      sellerRole: "Admin"
    }

    this.httpService.post(url,payload).subscribe({
      next: (res: any) => {
        this.getOrganizationUsers();
      },
      error: () => {

      }
    })
  }

  deActivateOrganizationUser() {
  }

  deleteOrganizationUser() {

  }
}
