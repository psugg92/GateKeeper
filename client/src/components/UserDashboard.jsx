import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import * as campaignsService from '../services/campaigns';

import CampaignMaker from "./CampaignMaker";

export default class UserDashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            campaignArray: []
        };
    };

    componentWillMount() {
        campaignsService.all(1)
            .then(data => {
                this.setState({ campaignArray: data })
            })
    };

    render() {
        return (
            <Fragment>
                <div className="jumbotron jumbotron-fluid">
                    <div className="container d-flex justify-content-center align-items-center">
                        <img src='../pics/sham.png' className='rounded-circle m-1' />
                        <h2 className="display-6 m-1">Poonslayer69</h2>
                    </div>
                    <div className="container-fluid d-flex justify-content-center">
                        <Link to='/CreateCampaign' className="btn btn-lg text-light m-3">
                            CREATE NEW CAMPAIGN
                    </Link>
                    </div>
                </div>
                <div className="container d-flex justify-content-around">
                    <CampaignMaker campaignList={this.state.campaignArray} />
                </div>
            </Fragment>
        );
    }
}