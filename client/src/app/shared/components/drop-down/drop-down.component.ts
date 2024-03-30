import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'drop-down',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.scss']
})
export class DropDownComponent implements OnInit {

  @Input()
  label: string = "";
  @Input()
  imageUrl: string = "";
  @Input()
  position: string = "";
  @Input()
  borderColor: string = "";
  @Input()
  dropdownMenu!: any[];

  constructor() { }

  showDropDownContainer: boolean = false;

  ngOnInit(): void {
  }

  onButtonClicked() {

    let dropDown = document.getElementsByClassName('drop-down')[0];
    let dropdownMenu = document.getElementsByClassName('drop-down-menu')[0];
    console.log("Drop down: ",dropDown.getBoundingClientRect());
    console.log("Dropdown menu: ",dropdownMenu.getBoundingClientRect()); 
    this.showDropDownContainer = !this.showDropDownContainer;
  }

}
