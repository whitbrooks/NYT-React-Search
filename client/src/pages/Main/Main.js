import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import Search from "../../components/Search";
import Results from "../../components/Results";
import Saved from "../../components/Saved";
import API from "../../utils/API";

class Main extends Component {
  
  state = {
    search: "",
    result: [],
    saved: [],

  };

  componentDidMount() {
    this.getSaved();
  }

  searchArticles = query => {
    API.search(query)
      .then(res => this.setState({ result: res.data }))
      .catch(err => console.log(err));
  };

  
  getSaved = () => {
    console.log("getSaved");
    API.getSaved()
      .then(res => {
        this.setState({ saved: res.data });
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
    this.searchArticles(this.state.search);
  };


  handleSaveButton = (id) => {
    console.log("saveArticle");
    API.saveArticle(id)
      .then(this.getSaved());
  }

  handleRemoveButton = (id) => {
    console.log("removeArticle");
    API.deleteArticle(id)
      .then(this.getSaved());
  }

  renderResults = () => {
    return this.state.articles.map(article => (
      <Results
        _id={article._id}
        key={article._id}
        title={article.headline.main}
        date={article.pub_date}
        url={article.web_url}
      />
    ));
  }

  renderSaved = () => {
    return this.state.saved.map(save => (
      <Saved
        _id={save._id}
        key={save._id}
        title={save.title}
        date={save.date}
        url={save.url}
      />
    ));
  }

  render() {
    return (
      <div className="container">
        <Jumbotron />
        <Search
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
        />
        <Results
          renderResults={this.renderResults}
      
        />
        <Saved
          renderSaved={this.state.renderSaved}
        />
      </div>
    );
  }
}

export default Main;
