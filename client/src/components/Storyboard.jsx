import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import * as nodesService from '../services/nodes';

import NodeMaker from './NodeMaker';
import CreateEvent from './CreateEvent';

export default class Storyboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nodeArray: []
        };
    };

    componentWillMount() {
        nodesService.all(`${this.props.match.params.id}`)
            .then(data => {
                this.setState({ nodeArray: data })
            })
    };

    render() {
        return (
            <Fragment>
                <div className="jumbotron jumbotron-fluid">
                    <div className='container-fluid d-flex justify-content-center'>
                        <h2 className="display-6">Storyboard</h2>
                    </div>
                    <div className='container-fluid d-flex justify-content-center m-3'>
                        <Link to={`/CreateEvent/${this.props.match.params.id}`} className="btn btn-lg text-light m-1">
                            Create Event
                    </Link>
                        {/* <!-- Button trigger for Delete Campaign modal --> */}
                        <button type="button" className="btn m-1" data-toggle="modal" data-target="#delete-campaign">
                            Delete Campaign
                    </button>

                        {/* <!-- Delete Campaign Modal --> */}
                        <div className="modal fade" id="delete-campaign" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
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
                        </div>
                        <Link to="../UserDashboard" className="btn btn-lg text-light m-1">
                            Delete Campaign
                    </Link>
                    </div>
                </div>
                <div className='container d-flex justify-content-between'>
                    <NodeMaker nodeList={this.state.nodeArray} />
                </div>
            </Fragment>
        );
    }
}