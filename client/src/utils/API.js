require('dotenv').config()
import axios from "axios";
const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";
const APIKEY = process.env.APIKEY;

export default {
  // Query NYT API 
  search: function(query) {
    return axios.get(BASEURL + query + APIKEY);
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

