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
      searchFoodArray: foods,
    };
  }

  createFood = (newfood) => {
    const oldFood = [...this.state.foods];
    oldFood.push(newfood);
    this.setState({
      foods: oldFood,
    });
  };

  searchFoodQuery = (value) => {
    const searchFood = [...this.state.foods].filter((item) =>
      item.name.toLowerCase().includes(value)
    );
    return this.setState({
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
        {searchFoodArray.map((food, index) => {
          return <FoodBox key={index} food={food} />;
        })}
      </div>
    );
  }
}

export default App;
