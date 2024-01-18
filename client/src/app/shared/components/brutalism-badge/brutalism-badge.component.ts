import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-brutalism-badge',
  templateUrl: './brutalism-badge.component.html',
  styleUrls: ['./brutalism-badge.component.scss'],
  standalone: true,
  imports: []
})
export class BrutalismBadgeComponent implements OnInit {

  @Input()
  label!: string;
  @Input()
  className!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
