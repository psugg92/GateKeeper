import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

export default class ViewEvent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                {/* <!-- Button trigger modal --> */}
                <button type="button" className="btn btn-light" data-toggle="modal" data-target="#firstEvent">
                    View Event
                </button>

                {/* <!-- Modal --> */}
                <div className="modal fade" id="firstEvent" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                    <div className="modal-dialog modal-lg" role="document">
                        <div className="modal-content bg-danger text-light">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLongTitle">Event Title</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body text-left">
                                <h5>Location:</h5>
                                <p>The Tavern</p>
                                <h5>Description:</h5>
                                <p>this will be a description of the event. this will be a description of the event. this will be a description of the event. this will be a description of the event. this will be a description of the event. this will be a description of the event. this will be a description of the event.</p>
                                <h5>NPCs:</h5>
                                <p>Tom the Bartender</p>
                                <h5>Traps:</h5>
                                <p>N/A</p>
                                <h5>Treasures:</h5>
                                <p>N/A</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-light" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-light">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>

            </Fragment>
        )
    }
}    