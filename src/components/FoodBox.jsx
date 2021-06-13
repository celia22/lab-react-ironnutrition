import React, { Component } from 'react';
import 'bulma/css/bulma.css';

class FoodBox extends Component{
  constructor(props) {
    super(props);
    this.state = {
      food: this.props.food
    };
  }

  render(){

    const { food } = this.props
    return(
     
      <div className="box">        
          
          <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={food.image} alt="food"/>
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{food.name}</strong> <br />
                <small>{food.calories}</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input className="input" type="number" value= {this.state.quantity} />
              </div>
              <div className="control">
                <button className="button is-info">
                  +
                </button>
              </div>
            </div>
          </div>
        </article>        
  </div>
    )
  }
}

export default FoodBox;