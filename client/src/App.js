import React, { Component } from "react";
import Jumbotron from "./components/Jumbotron";
import Results from "./components/Results";
import Search from "./components/Search";
import API from "./utils/API";
import axios from "axios";

class App extends Component {
  state = {
    result: {},
    search: ""
  };

  getSaved = () => {
    console.log("getSaved");
    axios.get("/api/article")
      .then(response => {
        this.setState({ saved: response });
      });
  }

  getSearched = (topic, startDate, endDate) => {
    console.log("getSearched");
    API.search(topic, startDate, endDate)
      .then(articles => {
        console.log(articles);
        this.setState({ searchedArticles: articles.data });
      });
  }

  // When this component mounts, search for article
  componentDidMount() {
    this.getSaved();
  }

  searchArticle = query => {
    API.search(query)
      .then(res => this.setState({ result: res.data }))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, search the OMDB API for the value of `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchMovies(this.state.search);
  };

  render() {
    return (
      <div className="container">
        <Jumbotron />
        <Search
          handleFormReset={this.handleFormReset}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        <Results
          articles={this.state.searchedArticles}
        />
      </div>
    );
  }
}

export default App;
