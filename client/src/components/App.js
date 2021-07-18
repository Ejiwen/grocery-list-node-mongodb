import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import GroceryForm from './GroceryForm.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  }

  addItem (item, quantity) {
    //console.log('---------');
    this.setState({
      //items: [...this.state.items, item]
    })
    axios.post('/item', {
      item: item,
    })
    .then((response) => console.log(response.data));
  }

  render() {
    return (
      <div style={{ width: '550px', margin: 'auto'}}>
        <img src="grocery-bags.png"/>
        <h1 style={{textAlign: 'center'}}>Grocery List</h1>
        <GroceryForm addItem={this.addItem.bind(this)} />
      </div>
    )
  }
}

export default App;