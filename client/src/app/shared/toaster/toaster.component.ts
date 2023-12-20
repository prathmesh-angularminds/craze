import { Component, OnInit } from '@angular/core';
import { ToasterServiceService } from './toaster-service/toaster-service.service';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-toaster',
  templateUrl: './toaster.component.html',
  styleUrls: ['./toaster.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ToasterComponent implements OnInit {

  // Instance variables
  toasterList: Toaster[] = [];
  duration!: number;
  position!: number;
  toaster: boolean = false;

  constructor(private toasterService: ToasterServiceService) { }

  ngOnInit(): void {

    this.toasterService.showToaster.subscribe((res: any) => {

      if (res) {

        this.toasterList = [{ message: res.message, show: true, isSuccess: this.toaster ? 'Success' : 'Error' }, ...this.toasterList];
        this.toaster = !this.toaster;
        // After 6 second hide toaster
        setTimeout(() => {
          this.toasterList.pop();
        }, 6000)
      }
    })
  }

}

// Toaster Interface
interface Toaster {
  message: string;
  isSuccess: string;
  show: boolean;
}

// Style not works if we are adding html in innerHTML
// https://stackoverflow.com/questions/44210786/style-not-working-for-innerhtml-in-angular
