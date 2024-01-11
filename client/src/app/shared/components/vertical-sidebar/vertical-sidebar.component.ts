import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AvatarComponent } from '../avatar/avatar.component';

import { sidebarMenu, organizationMenu } from './vertical-sidebar-menu';

// Service
import { HttpService } from '../../services/http.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-vertical-sidebar',
  templateUrl: './vertical-sidebar.component.html',
  styleUrls: ['./vertical-sidebar.component.scss'],
  standalone: true,
  imports: [CommonModule,AvatarComponent,RouterModule]
})
export class VerticalSidebarComponent implements OnInit {

  sidebarContents!: any;
  organizationMenu!: any;
  seller!: any;


  constructor(private httpService: HttpService) {}

  ngOnInit(): void {

    this.sidebarContents = sidebarMenu;
    this.organizationMenu = organizationMenu;
    this.self();
  }

  // Api Calls

  // This method will returns sellers data
  self() {

    const url = 'auth/self';

    this.httpService.get(url).subscribe({
      next: (res: any) => {
        this.seller = res.result;
      }
    })
  }

}
