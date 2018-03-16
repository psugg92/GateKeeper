import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import * as campaignsService from "../services/campaigns";

import Header from "./Header";


export default class CreateCampaign extends Component {
    constructor(props) {
        super(props);

        this.state = {
            campaignName: "",
            campaignDescription: "",
            userid: this.props.match.params.id

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
            campaignName: this.state.campaignName,
            campaignDescription: this.state.campaignDescription,
            userid: this.state.userid
        })
    }

    render() {
        return (
            <Fragment>
                <Header />
                <div className="jumbotron jumbotron-fluid">
                    <div className='container-fluid d-flex justify-content-center' >
                        <h2 className="display-6 border-bottom border-light">Create a New Campaign</h2>
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
                            <div className="container-fluid d-flex justify-content-center m-1">
                                <Link to={`/UserDashboard/${this.state.userid}`} onClick={() => { this.createCampaign() }} className="btn text-light btn-lg">
                                    CREATE CAMPAIGN
                            </Link>
                                <Link to={`/UserDashboard/${this.state.userid}`} className="btn text-light btn-lg">
                                    CANCEL
                            </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}