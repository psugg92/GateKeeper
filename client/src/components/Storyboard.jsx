import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

import CreateNPC from './CreateNPC';
import CreateEvent from './CreateEvent';
import ViewEvent from './ViewEvent';

export default class Storyboard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                <div className='container-fluid d-flex justify-content-center'>
                    <h2 className="display-6">Storyboard</h2>
                </div>
                <div className='container-fluid d-flex justify-content-center'>
                    <Link to="./CreateEvent" className="btn btn-danger btn-sm m-1">
                        Create Event
                    </Link>
                    <CreateNPC />
                </div>
                <div className='container-fluid d-flex justify-content-start'>
                    <div className="card text-white bg-danger mb-3 col-sm-3 d-flex mr-1">
                        <div className="card-header">Event Title</div>
                        <div className="card-body">
                            <h5 className="card-title">Event Location</h5>
                            <p className="card-text">This will be a short description that will help the DM understand which card represents which event.</p>
                            <ViewEvent />
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}