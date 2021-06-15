import React, { Component } from 'react';
import foods from './foods.json';
import FoodBox from './components/FoodBox/FoodBox';
import FormAddFood from './components/FormAddFood/FormAddFood';
import SearchBar from './components/Searchbar/SearchBar';
import TodaysFood from './components/TodaysFood/TodaysFood';
import 'bulma/css/bulma.css';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      JSONFoods: foods,
      searchFoodArray: foods,
      todaysFood: [],
    };
  }

  createFood = ({ name, calories, image }) => {
    const oldFood = [...this.state.JSONFoods];
    oldFood.push({ name, calories, image });
    this.setState({
      searchFoodArray: oldFood,
    });
  };

  searchFoodQuery = (value) => {
    const searchFood = [...this.state.JSONFoods].filter((item) =>
      item.name.toLowerCase().includes(value)
    );
    return this.setState({
      searchFoodArray: searchFood,
    });
  };

  addTodayFood = (item) => {
    const today = this.state.todaysFood;
    today.push(item);
    this.setState({
      todaysFood: today,
    });
    console.log('foodtoday', this.state.todaysFood);
  };

  render() {
    const { searchFoodArray } = this.state;
    return (
      <div className="food_list_container">
        <h1>IronNutrition</h1>
        <FormAddFood create={this.createFood} />
        <SearchBar search={this.searchFoodQuery} />
        <TodaysFood addToList={this.state.todaysFood} />
        {searchFoodArray.map((item, index) => {
          return (
            <FoodBox addToday={this.addTodayFood} key={index} item={item} />
          );
        })}
      </div>
    );
  }
}

export default App;
