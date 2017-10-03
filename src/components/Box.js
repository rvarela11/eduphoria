import React, { Component } from 'react';

class Box extends Component {

  render () {
    return (
      <div className="box">
        <h3 className="box__artist backgroundBlack textWhite">{this.props.artist}</h3>
        <img src={this.props.image} className="box__image" alt={`${this.props.title} cover`}/>
        <h4 className="box__title">{this.props.title}</h4>
      </div>
    )
  }
}

export default Box;
