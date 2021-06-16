import React, { Component } from 'react';

class SearchBar extends Component{
  constructor(props){
    super(props)
    this.state = {
       query: "",
    }
  }

  handleChange = (x) => {
    this.setState({ query: x.target.value });  
    this.props.search(x.target.value)
  }

  render(){
    return(
      <div>
          <input className="input is-medium m-4" placeholder="Search food..." type="text" name="value" value={this.state.query} onChange={this.handleChange}/>
     </div>
    )
  }
}

export default SearchBar;