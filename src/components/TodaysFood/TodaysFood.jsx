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
  
 multiplyCalories()
 
 console.log(result)
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



// import React, { Component } from 'react';
// import "./TodaysFood.css"
// import 'bulma/css/bulma.css';

// class TodaysFood extends Component {
//   constructor(props){
//     super(props)
//     this.state = {
//       todayFoodArray: this.props.addToList,
//       totalCalories: this.props.multCal,
//     }
//   }


// multiplyCals = (cal) => {  
//   this.props.multCal({cal: this.state.totalCalories})    
//   this.setState={
//     totalCalories: cal,
//   }
// } 


//   render(){    
//     const { todayFoodArray } = this.state
//     return(

//       <div className="todays_container ">    
//        <h2 className="title is-3 m-2">Today's foods</h2>
      
//       {todayFoodArray.map((item, index) => { 
//         console.log(this.state.totalCalories)
        
//         return (
//           <div key={index}>
//           <ul>
//             <li > <strong>{item.quantity} {item.food.name}</strong> - {item.quantity * item.food.calories}cal</li>
//            </ul>  
               
//           </div> 
//         )
//       })}
//           <h4> <strong>Total: </strong> {this.state.totalCalories} cals</h4>  
//      </div>
  
//     )
//   }
// }

// export default TodaysFood