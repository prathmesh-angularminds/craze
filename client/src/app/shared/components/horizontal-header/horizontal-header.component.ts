import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLinkActive, RouterModule } from '@angular/router';

@Component({
  selector: 'app-horizontal-header',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './horizontal-header.component.html',
  styleUrls: ['./horizontal-header.component.scss']
})
export class HorizontalHeaderComponent implements OnInit {

  headerTitle!: string;

  constructor(private router: Router) { 
    this.router.events.subscribe((routeObj: any) => {

      if(routeObj?.url) {
        this.setHeaderTitle(routeObj.url)
      }
    })
  }

  setHeaderTitle(url: string) {

    switch(url) {
      case '/seller/app/orders':
        this.headerTitle = "Orders";
        break;
      case '/seller/app/products':
        this.headerTitle = "Products" 
        break;
      case '/seller/app/inbox':
        this.headerTitle = "Inbox" 
        break;
      case '/seller/app/organization-settings/details':
        this.headerTitle = "Organization details" 
        break;
      case '/seller/app/organization-settings/users':
        this.headerTitle = "Organization users" 
        break;
      case '/seller/app/organization-settings/preferences':
        this.headerTitle = "Organization preferences" 
        break;
    }
  }

  ngOnInit(): void {

  }

}
