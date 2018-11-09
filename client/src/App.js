import React, { Component } from "react";
import Jumbotron from "./Jumbotron";
import Results from "./Results";
import Search from "./Search";
import API from "../utils/API";

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
    api.search(topic, startDate, endDate)
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
        <SearchComponent 
          handleFormReset={this.handleFormReset}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        <ArticlesComponent
          title="Search Results"
          articles={this.state.searchedArticles}
        />
        <ArticlesComponent
          title="Saved Articles"
          articles={this.state.savedArticles}
        />
      </div>
    );
  }
}

export default App;