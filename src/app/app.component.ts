import { Component, Inject } from "@angular/core";
import { MailService } from "./mail.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "Angular2 - Fundamentals";

  constructor(@Inject("mail") private mail, @Inject("api") private api) {}
}
