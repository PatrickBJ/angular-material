import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons',
  template: `
  <mat-icon>face</mat-icon>
    <mat-checkbox>
      Check me!
    </mat-checkbox>
  `,
  styles: []
})
export class ButtonsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
