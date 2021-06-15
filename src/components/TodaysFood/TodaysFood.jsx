import React, { Component } from 'react';
import "./TodaysFood.css"
import 'bulma/css/bulma.css';

class TodaysFood extends Component {
  constructor(props){
    super(props)
    this.state = {
      todayFoodArray: this.props.addToList,
      totalCalories: 0,
    }
  }

sumCalories = () => {
  const { todayFoodArray } = this.state;
  let result= 0;
  todayFoodArray.map(x => {
    return (
      result = x.food.calories * x.quantity
    )    
  })  
  this.setState = {
    totalCalories: result,
  }
  console.log("caloires ", result)
  console.log("quantity ", todayFoodArray.quantity)
}

  render(){    
    const { todayFoodArray } = this.state
    return(
      <div className="todays_container">    
       <h2>Today's foods</h2>
      
      {todayFoodArray.map((item, index) => { 
        
        return (
          <div key={index}>
          <ul>
            <li > <strong>{item.quantity} {item.food.name}</strong> - {item.quantity * item.food.calories}cal</li>
           </ul>  
               
          </div> 
        )
      })}
          <h4> <strong>Total: </strong> {this.state.totalCalories} cals</h4>  
     </div>

    )
  }
}

export default TodaysFood