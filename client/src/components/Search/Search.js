import React from "react";
import "./Search.css";

const Search = () => (

    <div className="row">
        <div className="col-sm-12">

                <div className="card">
                    <div className="card-header">
                        <strong>
                            <i className="fa fa-list-alt"></i>Search</strong>
                    </div>
                </div>

                <div className="card-body">

                    <form>

                        <div className="form-group"> 
                            <label for="search">Search Term:</label>
                            <input type="text" className="form-control" id="search-term"></input>
                        </div>

                        <div className="form-group">
                            <label for="start-year">Start Year (Optional):</label>
                            <input type="text" className="form-control" id="start-year"></input>
                        </div>


                        <div className="form-group">
                            <label for="end-year">End Year (Optional):</label>
                            <input type="text" className="form-control" id="end-year"></input>
                        </div>

                        <button type="submit" className="btn btn-default" id="run-search"><i className="fa fa-search"></i> Search</button>
                        <button className="btn btn-default" id="clear-all"><i className="fa fa-trash"></i> Clear Results</button>

                    </form>
                </div>
      
        </div>
    </div>

);

export default Search;
                
                
