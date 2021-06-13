import React, { Component } from 'react';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import FormAddFood from './components/FormAddFood';
import SearchBar from './components/SearchBar';
import 'bulma/css/bulma.css';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foods,
      searchFoodArray: [],
    };
  }

  createFood = (name, calories, image) => {
    const oldFood = [...this.state.foods];
    oldFood.push({ name, calories, image, quantity: 0 });
    this.setState({
      foods: oldFood,
    });
    console.log(this.state);
  };

  searchFoodQuery = (value) => {
    const searchFoodArray = [...this.state.foods].filter((item) =>
      item.includes(value)
    );
    this.setState({
      searchFoodArray: searchFoodArray,
    });
    console.log(searchFoodArray);
  };

  render() {
    return (
      <div className="food_list_container">
        <h1>IronNutrition</h1>
        <FormAddFood create={this.createFood} />
        <SearchBar search={this.searchFoodQuery} />
        <FoodBox />
      </div>
    );
  }
}

export default App;
