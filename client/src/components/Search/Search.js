import React from "react";
import "./Search.css";

const Search = (props) => (

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
                            <label htmlFor="search">Search Term:</label>
                            <input onChange={props.handleInputChange} value={props.value} type="text" className="form-control" placeholder="search for a topic"></input>
                        </div>

                        {/* <div className="form-group">
                            <label htmlFor="start-year">Start Year (Optional):</label>
                            <input onChange={props.handleInputChange} type="text" className="form-control" id="start-year"></input>
                        </div>


                        <div className="form-group">
                            <label htmlFor="end-year">End Year (Optional):</label>
                            <input onChange={props.handleInputChange} type="text" className="form-control" id="end-year"></input>
                        </div> */}

                        <button onClick={props.handleFormSubmit} type="submit" className="btn btn-default" ><i className="fa fa-search"></i> Search</button>
                       

                    </form>
                </div>
      
        </div>
    </div>

);

export default Search;
                
                
