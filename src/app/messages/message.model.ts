export class Message {
  public id: string;
  public subject: string;
  public msgText: string;
  public sender: string;

  constructor(id: string, sub: string, msg: string, sender: string) {
    this.id = id;
    this.subject = sub;
    this.msgText = msg;
    this.sender = sender;
  }
}
