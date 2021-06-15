import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import "./FoodBox.css"

class FoodBox extends Component{
  constructor(props) {
    super(props);
    this.state = {
      food: this.props.item,
      quantity: 1,
    };
  }

  
  handleQuantity = (x) => {
    this.setState({quantity: x.target.value})   
  }

  addTodayDish = () => {  
    this.props.addToday({food: this.state.food, quantity: this.state.quantity})    
  } 

  render(){ 
     const { item } = this.props

    return(
     
      <div className="box">        
          
          <article className="media">
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
                <input className="input" type="number" value= {this.state.quantity} onChange={this.handleQuantity}/>
              </div>
              <div className="control">
                <button className="button is-info" onClick={this.addTodayDish}>
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


