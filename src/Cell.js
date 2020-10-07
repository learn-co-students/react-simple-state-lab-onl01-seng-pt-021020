import React, {Component} from 'react'

export default class Cell extends Component {
    constructor(props){
      super()
      this.state = {
        color: props.value
      }
    }

    colorChange = () => {
      this.setState({
        color: this.state.color = '#333'
      })
    }

    render(){
      return (
        <div className="cell" onClick={this.colorChange} style={{backgroundColor: this.state.color}}>
          {this.state.color}
        </div>
      )
    }
}