import React from 'react';

import "./TodaysFood.css"
import 'bulma/css/bulma.css';

const TodaysFood = (props) =>  {
  
  const todayFoodArray= props.addToList;
  
  let result = 0;
  const multiplyCalories = () => {    
    for (let i = 0 ; i < todayFoodArray.length; i++){
      result = result + (todayFoodArray[i].food.calories * todayFoodArray[i].quantity)
    }
    return result
  };
  
  // handleDuplicates = (dish) => {
  //   const { todayFoodArray } = this.state;
  //   let sameItem = todayFoodArray.findIndex(item => item.food.name === dish.food.name);
  //   sameItem !== -1 ? todayFoodArray[sameItem].quantity += 1 : this.setState({todayFoodArray})
  // }


 multiplyCalories()
 
    return(

      <div className="todays_container ">    
       <h2 className="title is-3 m-2">Today's foods</h2>
      
      {todayFoodArray.map((item, index) => { 
        
        return (
          <div key={index}>
          <ul>
            <li > <strong>{item.quantity} {item.food.name}</strong> - {item.quantity * item.food.calories}cal</li>
           </ul>  
               
          </div> 
        )
      })}
          <h4> <strong>Total: </strong> {result} cals</h4>  
     </div>
  
    )
}

export default TodaysFood

