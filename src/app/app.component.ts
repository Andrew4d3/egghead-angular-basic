import { Component } from "@angular/core";
import { MailService } from "./mail.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "Angular2 - Fundamentals";

  constructor(private mail: MailService) {}
}
