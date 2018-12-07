import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-simple-form",
  template: `
    <div>
      <input #myInput type="text" [(ngModel)]="message" />
      <button (click)="update.emit({ text: message, index: index })">
        Click Me!
      </button>
    </div>
  `,
  styles: [
    `
      :host {
        display: flex;
        flex-direction: column;
      }

      input:focus {
        font-weight: bold;
        outline: none;
      }

      * {
        font-family: monospace;
      }

      button {
        border: none;
      }
    `
  ]
})
export class SimpleFormComponent implements OnInit {
  constructor() {}

  @Input() message;
  @Input() index;

  @Output() update = new EventEmitter();

  ngOnInit() {}
}
