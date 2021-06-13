import React, { Component } from 'react';

class SearchBar extends Component{
  constructor(props){
    super(props)
    this.state = {
       query: " ",
    }
  }

  handleChange = (x) => this.setState({ query: x.target.value });
  

  render(){
    return(
      <div>
          <input type="text" name="value" value={this.state.value} onChange={this.handleChange}/>
     </div>
    )
  }
}

export default SearchBar;