import React, { Component } from 'react';
import 'bulma/css/bulma.css';

class FormAddFood extends Component{
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      calories: 0,
      image: "",
      quantity: 0,
      addNewFood: false,
    };
  }

  clickHandler= () => {
    this.setState({
      addNewFood: true,
    });
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  createFoodButton = (event) => {
    event.preventDefault();
    const { name, calories, image } = this.state;    
    this.setState({ name: name, calories: calories, image: image, addNewFood: false});   
    this.props.create( { name, calories, image });
  };
 

  render(){

    return(
      <div>
        <button className="button is-primary m-2" onClick={this.clickHandler}>Add New Food!!</button>
        <div className="field is-horizontal "> 
        <form style={{display: this.state.addNewFood ? 'block' : 'none' }}>
          <label><strong>Name:</strong></label>
          <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
 
          <label><strong>Calories:</strong></label>
          <input type="number" name="calories" value={this.state.calories} onChange={this.handleChange} />
          
          <label><strong>Image:</strong></label>
          <input type="text" name="image" value={this.state.image} onChange={this.handleChange} />
          
          <button className="button is-primary is-small ml-3" onClick={this.createFoodButton}>Submit</button>
        </form>
      </div>
      </div>
    )
  }
}  

export default FormAddFood;