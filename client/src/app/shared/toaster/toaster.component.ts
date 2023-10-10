import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toaster',
  templateUrl: './toaster.component.html',
  styleUrls: ['./toaster.component.scss']
})
export class ToasterComponent implements OnInit {

  // Instance variables
  message!: String;
  isSuccess: Boolean = false;
  duration!: Number;
  position!: Number;
  show: Boolean = false;

  constructor() {

    this.show = true;
    setTimeout(() => {
      // this.show = false
    },3000);
  }

  ngOnInit(): void {
  }

}
