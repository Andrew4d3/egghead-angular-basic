import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class MailService {
  message = "You've got mail";
  messages = ["Hello world", "let's have fun", "I love JS"];

  constructor() {}

  public updateMessageByIndex(index, message) {
    this.messages[index] = message;
  }
}
