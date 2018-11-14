import React from "react";
import "./Results.css";

const Results = props => (

    <div className="row">
        <div className="col-sm-12">

            <div className="card">

                <div className="card-header">
                    <strong><i className="fa fa-table"></i>Results</strong>
                </div>

                <div className="card-body">
                    <h3>{props.title}</h3>
                    <p>{props.date}</p>
                    <a href={props.url} target="_blank">
                        <button className="btn btn-default ">View Article</button>
                    </a>
                    <button className="btn btn-primary" onClick={() => props.handleSaveButton(props.article)}>Save</button>
                </div>
            </div>
        </div>
    </div>
)

export default Results;