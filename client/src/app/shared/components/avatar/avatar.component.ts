import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-avatar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent implements OnInit, OnChanges {

  @Input()
  hasProfileImage: boolean = false;
  @Input()
  displayData!: string;
  
  // Instance variables
  initialLetters: string = "";

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
      
    if(!changes['hasProfileImage'].currentValue) {
      let nameArray: string[] = changes['displayData'].currentValue.split(' ');
      nameArray.forEach((name: string) => {
        this.initialLetters = this.initialLetters + name[0];
      })
    }
  }

  ngOnInit(): void {
  }

}
