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
    console.log(query);
    API.search(query)
      .then(res => {
      console.log(res);
      this.setState({ result: res.data.response.docs })})
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


  handleSaveButton = (article) => {
    console.log("saveArticle");
    API.saveArticle(article)
      .then(this.getSaved());
  }

  handleRemoveButton = (id) => {
    console.log("removeArticle");
    API.deleteArticle(id)
      .then(this.getSaved());
  }

  renderResults = () => {
    return this.state.result.map(article => (
      <Results
        _id={article._id}
        key={article._id}
        title={article.headline.main}
        date={article.pub_date}
        url={article.web_url}
        handleSaveButton={this.handleSaveButton}
        article={article}
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
        handleRemoveButton={this.handleRemoveButton}
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
        {this.renderResults()}
        {this.renderSaved()}
      </div>
    );
  }
}

export default Main;
