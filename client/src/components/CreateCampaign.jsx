import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";


export default class CreateCampaign extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                <div className='container-fluid d-flex justify-content-center' >
                    <h2 className="display-6 border-bottom border-dark">Create a New Campaign</h2>
                </div>
                <div className='container-fluid d-flex justify-content-center'>
                    <div className="d-flex flex-column">
                        <div className="p-2">Name of Campaign:</div>
                        <textarea onChange={(event) => { this.updateTitle(event.target.value) }}
                            className="form-control p-1 m-2"
                            id="exampleFormControlTextarea1"
                            rows="1"
                        />
                        <div className="p-2">Short Description:</div>
                        <textarea onChange={(event) => { this.updateTitle(event.target.value) }}
                            className="form-control p-1 m-2"
                            id="exampleFormControlTextarea1"
                            rows="5"
                        />
                        <div className="p-2">???</div>
                        <textarea onChange={(event) => { this.updateTitle(event.target.value) }}
                            className="form-control p-1 m-2"
                            id="exampleFormControlTextarea1"
                            rows="1"
                        />
                        <div className="container-fluid d-flex justify-content-center">
                            <Link to='/UserDashboard' className="btn btn-danger btn-lg">
                                CREATE CAMPAIGN
                            </Link>
                            <Link to='../UserDashboard' className="btn btn-danger btn-lg">
                                CANCEL
                            </Link>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}