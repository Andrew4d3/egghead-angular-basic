import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-simple-form",
  template: `
    <div>
      {{ message }} <input #myInput type="text" [(ngModel)]="message" />
      <button (mouseover)="onClick($event, myInput.value)">Click Me!</button>
    </div>
  `,
  styles: []
})
export class SimpleFormComponent implements OnInit {
  constructor() {
    setInterval(() => {
      this.message = Math.random().toString();
    }, 1000);
  }

  @Input() message;

  onClick(event, value) {
    console.log(value);
    console.log(event);
  }

  ngOnInit() {}
}
