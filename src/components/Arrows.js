import React, { Component } from 'react';

class ArrowLeft extends Component {

  render () {
    return (
      <button onClick={this.handleClick} id="arrowLeft" className="arrowButton">
        <svg width="60px" height="80px" viewBox="0 0 50 80">
          <polyline fill="none" stroke="#000" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" points="
        45.63,75.8 0.375,38.087 45.63,0.375 "/>
        </svg>
      </button>
    )
  }

  handleClick = () => {
    const arrowLeft = document.getElementById('arrowLeft');
    this.props.arrowClick(arrowLeft.id)
  }

}

class ArrowRight extends Component {

  render () {
    return (
      <button onClick={this.handleClick} id="arrowRight" className="arrowButton">
        <svg width="60px" height="80px" viewBox="0 0 50 80">
          <polyline fill="none" stroke="#000" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" points="
        0.375,0.375 45.63,38.087 0.375,75.8 "/>
        </svg>
      </button>
    )
  }

  handleClick = (e) => {
    const arrowRight = document.getElementById('arrowRight');
    this.props.arrowClick(arrowRight.id)
  }

}



export {ArrowLeft, ArrowRight } ;
