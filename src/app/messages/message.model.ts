export class Message {
  public id: number;
  public subject: string;
  public msgText: string;
  public sender: string;

  constructor(id: number, sub: string, msg: string, sender: string) {
    this.id = id;
    this.subject = sub;
    this.msgText = msg;
    this.sender = sender;
  }
}
