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

  constructor() { }

  showDropDownContainer: boolean = false;

  ngOnInit(): void {
  }

  onButtonClicked() {

    this.showDropDownContainer = !this.showDropDownContainer;
  }

}
