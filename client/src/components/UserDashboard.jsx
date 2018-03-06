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
            this.setState({ campaignArray: data})
        })
    };

    // handleGet() {
    //     fetch('http://localhost:3000/api/campaigns/1', {
    //         method: "GET",
    //         body: JSON.stringify({
    //             title: this.state.title,
    //             content: this.state.content
    //         }),
    //         headers: new Headers({"Content-Type": "application/json"})
    //         .then((res) => {
    //             return res.json()
    //         })
    //         .then((body) => {
    //             console.log(body)
    //             console.log(this.state)
    //         })
    //     })  
    // }

    render() {
        return (
            <Fragment>
                <div className="container-fluid d-flex justify-content-center align-items-center">
                    <img src='../pics/sham.png' className='rounded-circle m-1' />
                    <h2 className="display-6 m-1">Poonslayer69</h2>
                </div>
                <div className="container-fluid d-flex justify-content-center">
                    <Link to='/CreateCampaign' className="btn btn-danger btn-lg m-3">
                        CREATE NEW CAMPAIGN
                    </Link>
                </div>
                <div className="container-fluid d-flex justify-content-around">
                    <CampaignMaker campaignList={this.state.campaignArray} />
                </div>
            </Fragment>
        );
    }
}