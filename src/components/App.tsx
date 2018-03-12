import * as React from "react";
import { hot  } from "react-hot-loader";
import ItemList from './ItemList';
import ItemStore from '../stores/ItemStore';

export interface AppProps { }

class App extends React.Component<AppProps, undefined> {

    private createItem(evt: React.KeyboardEvent<HTMLInputElement>){
      if (evt.which === 13){
        ItemStore.createItem(evt.currentTarget.value);
        evt.currentTarget.value = '';
      }
    }

    render() {
        return (
          <div>
            <h1>Add my Items</h1>
            <input type='text' onKeyPress={this.createItem.bind(this)} />
            <ItemList items={ItemStore.items} />
          </div>
        );
    }
}

export default hot(module)(App)