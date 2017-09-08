import {observable} from 'mobx';


export class Item {
  @observable name: string;
  @observable quantity: number;

  constructor(name: string){
    this.name = name;
    this.quantity = 1;
  }
}

class ItemStore {
  @observable items: Item[] = [new Item('TV')];

  createItem(name: string){
    this.items.push(new Item(name));
  }
}

export default new ItemStore;
