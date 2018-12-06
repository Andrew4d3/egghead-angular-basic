import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-simple-form",
  template: `
    <div>
      {{ message }} <input #myInput type="text" />
      <button (mouseover)="onClick($event, myInput.value)">Click Me!</button>
    </div>
  `,
  styles: []
})
export class SimpleFormComponent implements OnInit {
  constructor() {}

  @Input() message;

  onClick(event, value) {
    console.log(value);
    console.log(event);
  }

  ngOnInit() {}
}
