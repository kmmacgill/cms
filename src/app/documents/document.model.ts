/**
 * Created by kmmac on 5/15/2017.
 */
export class Document {
  public id: number;
  public name: string;
  public description: string;
  public url: string;
  public children: string[];

  constructor(id: number, name: string, description: string, url: string, children: string[]) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.url = url;
    this.children = children;
  }
}
