import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vertical-sidebar',
  templateUrl: './vertical-sidebar.component.html',
  styleUrls: ['./vertical-sidebar.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class VerticalSidebarComponent implements OnInit {

  constructor() { }

  sidebarContents: any = [
    {
      title: "Navigation",
      content: [
        {
          isDropdown: true,
          imageUrl: "../../../../assets/images/vertical-sidebar-images/cube.svg",
          title: "Products"
        },
        {
          isDropdown: false,
          imageUrl: "../../../../assets/images/vertical-sidebar-images/truck.svg",
          title: "Orders"
        },
        {
          isDropdown: false,

          imageUrl: "../../../../assets/images/vertical-sidebar-images/mail.svg",
          title: "Inbox"
        }
      ]
    },
    {
      title: "Organization Settings",
      content: [
        {
          isDropdown: false,
          imageUrl: "../../../../assets/images/vertical-sidebar-images/cube.svg",
          title: "Organization Details"
        },
        {
          isDropdown: false,
          imageUrl: "../../../../assets/images/vertical-sidebar-images/users.svg",
          title: "Users"
        },
        {
          isDropdown: false,
          imageUrl: "../../../../assets/images/vertical-sidebar-images/mail.svg",
          title: "Preferences"
        }
      ]
    }
  ]

  ngOnInit(): void {
  }

}
