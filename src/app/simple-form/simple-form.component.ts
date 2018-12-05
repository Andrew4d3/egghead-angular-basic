import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-simple-form",
  template: `
    <div>
      <input #myInput type="text" />
      <button (mouseover)="onClick($event, myInput.value)">Click Me!</button>
    </div>
  `,
  styles: []
})
export class SimpleFormComponent implements OnInit {
  constructor() {}

  onClick(event, value) {
    console.log(value);
    console.log(event);
  }

  ngOnInit() {}
}
