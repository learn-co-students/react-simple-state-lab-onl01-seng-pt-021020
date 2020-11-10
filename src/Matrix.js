import React, { Component } from 'react';
import Cell from './Cell.js'

export default class Matrix extends Component {

  genRow = (vals) => {

    return vals.map(val => <Cell value={val}/>) // replace me and render a cell component instead!
  }
  //vals = ["#F00", "#00F", "#F00", "#00F", "#F00", "#00F", "#F00", "#00F", "#F00", "#00F"]

  genMatrix = () => {
    console.log(this.props.values)
    return this.props.values.map(rowVals => <div className="row">{this.genRow(rowVals)}</div>)
  }

//   this.props.values = [
//     ["#F00", "#00F", "#F00", "#00F", "#F00", "#00F", "#F00", "#00F", "#F00", "#00F"]
// 1: (10) ["#F00", "#00F", "#F00", "#00F", "#F00", "#00F", "#F00", "#00F", "#F00", "#00F"]
// 2: (10) ["#F00", "#00F", "#F00", "#00F", "#F00", "#00F", "#F00", "#00F", "#F00", "#00F"]
// 3: (10) ["#F00", "#00F", "#F00", "#00F", "#F00", "#00F", "#F00", "#00F", "#F00", "#00F"]
// 4: (10) ["#F00", "#00F", "#F00", "#00F", "#F00", "#00F", "#F00", "#00F", "#F00", "#00F"]
// 5: (10) ["#F00", "#00F", "#F00", "#00F", "#F00", "#00F", "#F00", "#00F", "#F00", "#00F"]
// 6: (10) ["#F00", "#00F", "#F00", "#00F", "#F00", "#00F", "#F00", "#00F", "#F00", "#00F"]
// 7: (10) ["#F00", "#00F", "#F00", "#00F", "#F00", "#00F", "#F00", "#00F", "#F00", "#00F"]
// 8: (10) ["#F00", "#00F", "#F00", "#00F", "#F00", "#00F", "#F00", "#00F", "#F00", "#00F"]
// 9: (10) ["#F00", "#00F", "#F00", "#00F", "#F00", "#00F", "#F00", "#00F", "#F00", "#00F"]
//   ]

  render() {
    return (
      <div id="matrix">
        {this.genMatrix()}
      </div>
    )
  }

}

Matrix.defaultProps = {
  values: (() => {
    const defRow = ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00']
    return (new Array(10).fill(defRow))
  })()
}
