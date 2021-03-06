import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import * as campaignsService from '../services/campaigns';
import * as usersService from '../services/user';

import Header from "./Header"
import CampaignMaker from "./CampaignMaker";

export default class UserDashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            campaignArray: [],
            username: "",
            userid: this.props.match.params.id
        };
    };

    componentWillMount() {
        campaignsService.all(`${this.props.match.params.id}`)
            .then(data => {
                this.setState({ campaignArray: data })
            })
        usersService.getSingleUser(`${this.props.match.params.id}`)
            .then(result => {
                console.log(result[0].username)
                this.setState({ username: result[0].username})
            })
    };

    render() {
        return (
            <Fragment>
                <Header />
                <div className="jumbotron jumbotron-fluid">
                    <h1 className="mb-4">User Dashboard</h1>
                    <div className="container d-flex justify-content-center align-items-center">
                        <img src='../pics/sham.png' className='rounded-circle m-1' />
                        <h2 className="display-6 m-1">{this.state.username}</h2>
                    </div>
                    <div className="container-fluid d-flex justify-content-center">
                        <Link to={`/CreateCampaign/${this.state.userid}`} className="btn btn-lg text-light m-3">
                            CREATE NEW CAMPAIGN
                        </Link>
                    </div>
                </div>
                <div className="container d-flex justify-content-around mb-3">
                    <div className="alert alert-light text-left" role="alert">
                        Use this page to create, view, and manage your campaigns.
                    </div>
                </div>
                <div className="container d-flex">
                    <CampaignMaker campaignList={this.state.campaignArray} />
                </div>
            </Fragment>
        );
    }
}