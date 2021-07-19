import React from 'react';
import ReactDOM from 'react-dom';

class GroceryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      item: '',
      quantity: ''
    }
  }

  onSubmitFn(e) {
    e.preventDefault();
    console.log('the button was clicked ...');
    this.props.addItem(this.state.item, this.state.quantity);
  }


  onChangeFn(e) {
    const { name, value } = e.target
    this.setState({
      [name]: value,
    })
  }


  render() {
    return (
      <form onSubmit={this.onSubmitFn.bind(this)}>
        <label> Item
          <input name="item" value={this.state.item} onChange={this.onChangeFn.bind(this)} />
        </label>
        <label> Qunatity
          <input name="quantity" value={this.state.quantity} onChange={this.onChangeFn.bind(this)} />
        </label>
        <button>Add Grocery</button>
      </form>
    )
  }
}

export default GroceryForm

//  onChange={this.onChangeFn.bind(this)}