import axios from "axios";
// require('dotenv').config()
const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=";
const APIKEY = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";

export default {
  // Query NYT API 
  search: function(query) {
    return axios.get(BASEURL + APIKEY + "&q=" + query);
  },
  // Gets all articles
  getSaved: function() {
    return axios.get("/api/article");
  },
  // Gets the article with the given id
  getArticle: function(id) {
    return axios.get("/api/article/" + id);
  },
  // Deletes the article with the given id
  deleteArticle: function(id) {
    return axios.delete("/api/article/" + id);
  },
  // Saves a article to the database
  saveArticle: function(article) {
    let cleanArticle = {
      title: article.headline.main,
      date: article.pub_date,
      url: article.web_url
    }
    return axios.post("/api/article", cleanArticle);
  }

};

