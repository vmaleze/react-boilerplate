import * as React from "react";
import {observer} from "mobx-react";
import {Item} from '../stores/ItemStore';

export interface ItemListProps {
  items: Item[]
}

@observer
export default class ItemList extends React.Component<ItemListProps, undefined> {

  render(){
    const items = this.props.items.map((item, idx) => (
      <div key={idx}>{item.name} - {item.quantity}</div>
    ));
    return (
      <div>
        {items}
      </div>
    );
  }

}
