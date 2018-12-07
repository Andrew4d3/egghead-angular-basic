import { Component, Inject } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  styles: [
    `
      app-simple-form {
        margin-top: 10px;
      }
    `
  ]
})
export class AppComponent {
  title = "Angular2 - Fundamentals";

  constructor(@Inject("mail") private mail, @Inject("api") private api) {}

  onUpdate(event) {
    console.log(event);
    this.mail.updateMessageByIndex(event.index, event.text);
  }
}
