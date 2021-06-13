import React, { Component } from 'react';
import foods from '../foods.json';
import 'bulma/css/bulma.css';

class FoodBox extends Component{
  constructor(props) {
    super(props);
    this.state = {
      foods,
    };
  }

  render(){
    return(
      <div className="box">
        {foods.map((item, index) => {
          return(
          <article key={index} className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={item.image} alt="food"/>
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{item.name}</strong> <br />
                <small>{item.calories}</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input className="input" type="number" value= {item.quantity} />
              </div>
              <div className="control">
                <button className="button is-info">
                  +
                </button>
              </div>
            </div>
          </div>
        </article>
        )
      })}
  
</div>
    )
  }
}

export default FoodBox;