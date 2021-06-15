import React, { Component } from 'react';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import FormAddFood from './components/FormAddFood';
import SearchBar from './components/SearchBar';
import TodaysFood from './components/TodaysFood';
import 'bulma/css/bulma.css';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      JSONFoods: foods,
      searchFoodArray: foods,
      todaysFood: foods,
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

  addTodayFood = (items) => {
    const today = [...this.state.todaysFood];
    today.push(items);
    this.setState({
      todaysFood: today,
    });
    //console.log(this.todaysFood);
    console.log('hago click en el boton MAS', items.quantity);
  };

  render() {
    const { searchFoodArray } = this.state;
    return (
      <div className="food_list_container">
        <h1>IronNutrition</h1>
        <FormAddFood create={this.createFood} />
        <SearchBar search={this.searchFoodQuery} />
        <TodaysFood />
        {searchFoodArray.map((food, index) => {
          return (
            <FoodBox addToday={this.addTodayFood} key={index} food={food} />
          );
        })}
      </div>
    );
  }
}

export default App;
