import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AvatarComponent } from '../avatar/avatar.component';

@Component({
  selector: 'app-vertical-sidebar',
  templateUrl: './vertical-sidebar.component.html',
  styleUrls: ['./vertical-sidebar.component.scss'],
  standalone: true,
  imports: [CommonModule,AvatarComponent]
})
export class VerticalSidebarComponent implements OnInit {

  constructor() { }

  sidebarContents: any = [
    {
      title: "Navigation",
      content: [
        {
          imageUrl: "../../../../assets/images/vertical-sidebar-images/cube.svg",
          title: "Products"
        },
        {
          imageUrl: "../../../../assets/images/vertical-sidebar-images/truck.svg",
          title: "Orders"
        },
        {
          imageUrl: "../../../../assets/images/vertical-sidebar-images/mail.svg",
          title: "Inbox"
        }
      ]
    },
    {
      title: "Organization Settings",
      content: [
        {
          imageUrl: "../../../../assets/images/vertical-sidebar-images/cube.svg",
          title: "Organization Details"
        },
        {
          imageUrl: "../../../../assets/images/vertical-sidebar-images/users.svg",
          title: "Users"
        },
        {
          imageUrl: "../../../../assets/images/vertical-sidebar-images/mail.svg",
          title: "Preferences"
        }
      ]
    }
  ]

  ngOnInit(): void {
  }

}
