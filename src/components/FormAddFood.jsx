import React, { Component } from 'react';
import 'bulma/css/bulma.css';

class FormAddFood extends Component{
  constructor(props) {
    super(props);
    this.state = {
      newName: "",
      newCalories: " ",
      newImage: " ",
      addNewFood: false,
    };
  }

  clickHandler= () => {
    this.setState({
      addNewFood: true,
    });
  };

  handleName = (x) => this.setState({ newName: x.target.value });
  handleCalories = (x) => this.setState({ newCalories: x.target.value });
  handleImage = (x) => this.setState({ newImage: x.target.value });

  createFood = (x) => {
    const { newName, newCalories, newImage } = this.state;
    this.props.create(x, newName, newCalories, newImage);
    this.setState({ newName: '', newCalories: '', newImage: '' });
    
  };
 

  render(){

    return(
      <div>
        <button onClick={this.clickHandler}>Add New Food!!</button>
        <div>
        <form style={{display: this.state.addNewFood ? 'block' : 'none' }}>
          <label>Name:</label>
          <input type="text" name="name" value={this.state.newName} onChange={this.handleName} />
 
          <label>Calories:</label>
          <input type="number" name="Calories" value={this.state.newCalories}  onChange={this.handleCalories} />
          
          <label>Image:</label>
          <input type="text" name="image" value={this.state.newImage}  onChange={this.handleImage} />
          
          <button onClick={this.createFood}>Submit</button>
        </form>
      </div>
      </div>
    )
  }
}  

export default FormAddFood;