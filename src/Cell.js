import React, { Component } from 'react';

export default class Cell extends Component {

  constructor(props) {
    super()
    this.state = {
      color: props.value
    }
  }

  //Define a constructor method in Cell, which sets an initial state key of
  //color to the value prop which is passed from its parent component.
  //Remember to call super() on the first line of the constructor
  //(this is required in React components if we are to use this.state in
  //the constructor).

  handleClick = () => {
    this.setState({
      color: '#333'
    })
  }

  render() {
    return (
      <div
        className="cell"
        // Cell should render a single <div> with a className of cell
        style={{backgroundColor: this.state.color}}
        //In render, the cell should set the background color in-line for the <div> by adding the following attribute: style={{backgroundColor: '#FFF'}}
        //('#FFF' is just used as an example value here - the value should be the state's color)
        //Create a click listener which, when activated, updates the state to the following hex value: '#333'

        onClick={this.handleClick}>
      </div>
    )
  }

}
