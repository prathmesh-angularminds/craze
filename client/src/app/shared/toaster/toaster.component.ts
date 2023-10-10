import { Component, OnInit } from '@angular/core';
import { ToasterServiceService } from './toaster-service/toaster-service.service';

@Component({
  selector: 'app-toaster',
  templateUrl: './toaster.component.html',
  styleUrls: ['./toaster.component.scss']
})
export class ToasterComponent implements OnInit {

  // Instance variables
  message!: string;
  isSuccess: boolean = false;
  duration!: number;
  position!: number;
  show: boolean = false;

  constructor(private toasterService: ToasterServiceService) {}

  ngOnInit(): void {

    this.toasterService.showToaster.subscribe((res: any) => {
      
      if(res) {
        
        this.show = true;
        this.message = res.message;
        this.isSuccess = res.type === 'Success' ? true : false;
      }

      // After 6 second hide toaster
      setTimeout(() => {
        this.show = false;
      },6000)
    })
  }

}
