import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import Search from "../../components/Search";
import Results from "../../components/Results";
import Saved from "../../components/Saved";
import API from "../../utils/API";
import axios from "axios";

class App extends Component {
  state = {
    search: "",
    result: {},
    saved: {},
  };

  componentDidMount() {
    this.getSaved();
  }
 
  getSearched = (query) => {
    console.log("getSearched");
    API.search(query)
    .then(res => this.setState({ result: res.data }))
    .catch(err => console.log(err));
  };
  
  getSaved = () => {
    console.log("getSaved");
    axios.get("/api/article")
      .then(response => {
        this.setState({ saved: response });
      });
  }  

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.getSearched(this.state.search);
  };

  render() {
    return (
      <div className="container">
        <Jumbotron />
        <Search
          // handleFormReset={this.handleFormReset}
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
          
        />
        <Results
          articles={this.state.result}
        />
        <Saved
          articles={this.state.saved}
        />
      </div>
    );
  }
}

export default App;
