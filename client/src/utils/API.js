import axios from "axios";
require('dotenv').config()
const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=";
const APIKEY = process.env.KEY;

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
  saveArticle: function(articleData) {
    return axios.post("/api/article", articleData);
  }

};

