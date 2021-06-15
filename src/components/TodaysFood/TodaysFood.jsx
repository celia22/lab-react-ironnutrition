import React, { Component } from 'react';
import "./TodaysFood.css"
import 'bulma/css/bulma.css';

let result = 0;

class TodaysFood extends Component {
  constructor(props){
    super(props)
    this.state = {
      todayFoodArray: this.props.addToList
    }
  }

sumCalories = () => {
const { todayFoodArray } = this.state;
 result = todayFoodArray.food.calories * todayFoodArray.quantity
}

  render(){
    
    const { todayFoodArray } = this.state
    console.log("todayfood", todayFoodArray)
    return(
      <div className="todays_container">    
       <h2>Today's foods</h2>
      {todayFoodArray.map((item, index) => { 
        return (
          <div key={index}>
          <ul>
            <li > {item.quantity} {item.food.name} - {result} cal</li>
           </ul>        
          </div> 
        )
      })}
          <h4>Total: 0 cals</h4>
     </div>

    )
  }
}

export default TodaysFood