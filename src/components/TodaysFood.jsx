import React, { Component } from 'react';
import "./TodaysFood.css"
import 'bulma/css/bulma.css';

class TodaysFood extends Component {
  render(){
    
    return(
      <div className="todays_container">
        <h2>Today's foods</h2>
        <h4>Total: 0 cals</h4>
        {/* tendra que hacer un map de la array que le pase con las todays foods solo con nombre y calories. hacer suma calories aqui?¿*/}

      </div>
    )
  }
}

export default TodaysFood