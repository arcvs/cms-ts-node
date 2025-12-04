export interface Item {
  id: number;
  name: string;
}

export class Article {

  private data: Item[] = [{id: 1, name: 'John'}, {id: 2, name: 'Doe'}];

  create (item: Item) {
    this.data.push(item);
    return this.data;
  }
  update (item: Item) {
    this.data.push(item);
    return this.data;
  }

  read () {
    return this.data;
  }


  readId (id: number) {
    return this.data;
  }

}
