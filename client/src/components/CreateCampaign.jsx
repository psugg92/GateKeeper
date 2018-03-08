import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import * as campaignsService from "../services/campaigns";


export default class CreateCampaign extends Component {
    constructor(props) {
        super(props);

        this.state = {
            campaignName: "",
            campaignDescription: "",

        }
    }

    updateCampaignName(value) {
        this.setState({ campaignName: value });
        console.log({ campaignName: value });
    }

    updateCampaignDescription(value) {
        this.setState({ campaignDescription: value });
        console.log({ campaignDescription: value });
    }

    createCampaign() {
        campaignsService.insert({
            campaign_name: this.state.campaignName,
            campaign_description: this.state.campaignDescription
        })
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
                        <textarea onChange={(event) => { this.updateCampaignName(event.target.value) }}
                            className="form-control p-1 m-2"
                            id="exampleFormControlTextarea1"
                            rows="1"
                        />
                        <div className="p-2">Short Description:</div>
                        <textarea onChange={(event) => { this.updateCampaignDescription(event.target.value) }}
                            className="form-control p-1 m-2"
                            id="exampleFormControlTextarea1"
                            rows="5"
                        />
                        <div className="container-fluid d-flex justify-content-center">
                            <Link to='/UserDashboard' onClick={() => { this.createCampaign()}} className="btn btn-danger btn-lg">
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