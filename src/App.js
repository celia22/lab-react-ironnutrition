import React, { Component } from 'react';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import 'bulma/css/bulma.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foods: {
        name: ' ',
        quantity: 0,
        calories: 0,
        image: ' ',
        addNewFood: false,
      },
    };
  }

  addNewFoodHandler = () => {};

  render() {
    return (
      <div className="Container">
        <h1>IronNutrition</h1>
        <button onClick={this.addNewFoodHandler}>Add New Food!!</button>
        {foods.map((item, index) => {
          return (
            <FoodBox
              key={index}
              image={item.image}
              name={item.name}
              quantity={item.quantity}
              calories={item.calories}
              addNewFood={false}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
