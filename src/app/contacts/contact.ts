export class Contact {
  public contactId: number;
  public name: string;
  public email: string;
  public phone: number;
  public imageUrl: string;
  public group: string[];

  constructor(id: number, name: string, email: string, pho: number, imgUrl: string, gro: string[]) {
    this.contactId = id;
    this.name = name;
    this.email = email;
    this.phone = pho;
    this.imageUrl = imgUrl;
    this.group = gro;
  }
}
