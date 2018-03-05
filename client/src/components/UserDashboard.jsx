import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

export default class UserDashboard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                <div className="container-fluid d-flex justify-content-center">
                    <img src='../pics/sham.png' className='rounded-circle' />
                    <h2 className="display-6">Poonslayer69</h2>
                </div>
                <div className="container-fluid d-flex justify-content-center">
                    <Link to='/CreateCampaign' className="btn btn-danger btn-lg">
                        CREATE NEW CAMPAIGN
                    </Link>
                </div>
                <div className="container-fluid d-flex justify-content-start">
                    <div className="card col-sm-3">
                        <img className="card-img-top" src="../pics/cigSm.jpg" alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">Campaign Title</h5>
                            <p className="card-text">A short description of this particular campaign</p>
                            <Link to='/CampaignDashboard' className="btn btn-danger">
                                Enter Campaign
                            </Link>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}