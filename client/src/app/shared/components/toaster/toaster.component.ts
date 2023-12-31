import { Component, OnInit } from '@angular/core';
import { ToasterServiceService } from '../../services/toaster-service.service';
import { ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-toaster',
  templateUrl: './toaster.component.html',
  styleUrls: ['./toaster.component.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [CommonModule]
})
export class ToasterComponent implements OnInit {

  // Instance variables
  toasterList: Toaster[] = [];
  duration!: number;
  position!: number;

  constructor(private toasterService: ToasterServiceService) { }

  ngOnInit(): void {

    this.toasterService.showToaster.subscribe((res: any) => {

      if (res) {

        this.toasterList = [{ message: res.message, show: true, type: res.type }, ...this.toasterList];

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
  type: string;
  show: boolean;
}

// Style not works if we are adding html in innerHTML
// https://stackoverflow.com/questions/44210786/style-not-working-for-innerhtml-in-angular
