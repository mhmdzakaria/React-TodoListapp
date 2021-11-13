import React, { Component } from "react";
import TodoItems from "./components/TodoItems/TodoItems";
import AddItem from "./components/AddItem/AddItem";

class App extends Component {
  // The state

  state = {
    items: [
      { id: 1, name: "Hamza", age: 22 },
      { id: 2, name: "Mohamed", age: 23 },
      { id: 3, name: "Ahmed", age: 24 },
    ],
  };

  // The Functions

  deleteItem = (id) => {
    let items = this.state.items;
    let i = items.findIndex((item) => item.id === id);
    items.splice(i, 1);
    this.setState({ items: items });
  };

  // add item

  addItem = (item) => {
    item.id = Math.random();
    let items = this.state.items;
    items.push(item);
    this.setState({ items });
  };

  // The render
  render() {
    return (
      <div className="App container">
        <h1 className="text-center"> Todo List Application</h1>
        <TodoItems items={this.state.items} deleteItem={this.deleteItem} />

        <AddItem addItem={this.addItem} />
      </div>
    );
  }
}

export default App;
