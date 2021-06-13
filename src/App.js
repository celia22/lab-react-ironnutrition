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
  };

  searchFoodQuery = (value) => {
    const searchFood = [...this.state.foods].filter((item) =>
      item.includes(value)
    );
    this.setState({
      searchFoodArray: searchFood,
    });
  };

  render() {
    const { searchFoodArray } = this.state;
    console.log('foodarray', searchFoodArray);
    return (
      <div className="food_list_container">
        <h1>IronNutrition</h1>
        <FormAddFood create={this.createFood} />
        <SearchBar search={this.searchFoodQuery} />
        {foods.map((food, index) => {
          return <FoodBox key={index} food={food} />;
        })}
      </div>
    );
  }
}

export default App;
