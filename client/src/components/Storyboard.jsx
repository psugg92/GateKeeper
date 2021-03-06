import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import * as nodesService from '../services/nodes';
import * as campaignsService from '../services/campaigns';

import Header from "./Header";
import NodeMaker from './NodeMaker';
import CreateEvent from './CreateEvent';
import AuthButton from './auth/authButton';

export default class Storyboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nodeArray: [],
            description: '',
            name: ''
        };
    };

    componentWillMount() {
        nodesService.all(`${this.props.match.params.id}`)
            .then(data => {
                this.setState({ nodeArray: data })
            })
        

        campaignsService.one(`${this.props.match.params.id}`)
            .then(data => {
                this.setState({ description: data[0].campaign_description,
                                name: data[0].campaign_name})
                console.log(data);
                console.log(this.state.description);
            })
        
    };

    render() {
        return (
            <Fragment>
                <Header />
                <div className="jumbotron jumbotron-fluid">
                    <div className='container-fluid d-flex justify-content-center mb-1'>
                        <p className="m-0 font-weight-light">{this.state.name}</p>
                    </div>
                    <div className='container-fluid d-flex justify-content-center mb-1'>
                        <p className="m-0 font-weight-light font-italic">"{this.state.description}"</p>
                    </div>
                    <div className='container-fluid d-flex justify-content-center mb-1'>
                        <h2 className="display-6">Storyboard</h2>
                    </div>
                    <div className='container-fluid d-flex justify-content-center '>
                        <Link to={`/CreateEvent/${this.props.match.params.id}`} className="btn btn-lg text-light">
                            Create Event
                        </Link>
                        {/* <!-- Button trigger for Delete Campaign modal -->
                        <button type="button" className="btn" data-toggle="modal" data-target="#delete-campaign">
                            Delete Campaign
                        </button>

                        {/* <!-- Delete Campaign Modal --> */}
                        {/* <div className="modal fade" id="delete-campaign" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content bg-danger text-light">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLongTitle">Delete Campaign</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <div className="container-fluid text-left">
                                            You are about to delete this campaign. Would you like to continue?
                                    </div>

                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn text-light" data-dismiss="modal">Cancel</button>
                                        <button type="button" className="btn text-light">Delete Campaign</button>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                        {/* <Link to="" className="btn btn-lg text-light">
                            Delete Campaign
                    </Link> */}
                    </div>
                </div>
                <div className="container d-flex justify-content-around mb-3">
                    <div className="alert alert-light" role="alert">
                        Use this page to manage the events in your campaign. Click on one of the "View Event" buttons below to review the details for a specific event. Click on the "Create Event" button above to create a new event for your campaign.
                    </div>
                </div>
                <div className='container-fluid scroll'>
                    <NodeMaker nodeList={this.state.nodeArray} />
                </div>
            </Fragment>
        );
    }
}