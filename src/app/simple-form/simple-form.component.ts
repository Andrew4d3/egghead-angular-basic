import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-simple-form",
  template: `
    <div>
      <input
        #myInput
        type="text"
        [(ngModel)]="message"
        [ngClass]="{ mousedown: isMouseDown }"
        (mousedown)="isMouseDown = true"
        (mouseup)="isMouseDown = false"
        (mouseleave)="isMouseDown = false"
      />
      <button
        class="white bg-black code"
        (click)="update.emit({ text: message, index: index })"
      >
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

      .mousedown {
        border: 2px solid green;
      }
    `
  ]
})
export class SimpleFormComponent implements OnInit {
  isMouseDown: boolean;

  constructor() {}

  @Input() message;
  @Input() index;

  @Output() update = new EventEmitter();

  ngOnInit() {}
}
