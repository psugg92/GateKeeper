import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";


export default class CreateCampaign extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                <div className="container-fluid border-bottom border-dark">
                    <div className='container-fluid d-flex ' >
                        <h2 className="display-6 border-bottom border-dark">Create a New Event</h2>
                    </div>
                    <div className="d-flex flex-column">
                        <div className="p-2 text-left">Name of Campaign:</div>
                        <textarea onChange={(event) => { this.updateTitle(event.target.value) }}
                            className="form-control p-1 m-2"
                            id="exampleFormControlTextarea1"
                            rows="1"
                        />
                        <div className="p-2 text-left">Short Description:</div>
                        <textarea onChange={(event) => { this.updateTitle(event.target.value) }}
                            className="form-control p-1 m-2"
                            id="exampleFormControlTextarea1"
                            rows="3"
                        />
                        <div className="p-2 text-left">Location</div>
                        <select className="form-control" id="event-select-locations-input">
                            <option>The Tavern</option>
                        </select>

                        {/* button for location-creation module */}
                        <button type="button" className="btn btn-danger btn-sm" data-toggle="modal" data-target="#create-location">
                            Create Location
                    </button>

                        {/* location-creation module */}

                    </div>
                </div>

                <div className="container-fluid d-flex justify-content-around">

                    <div className="col-sm-3">
                        <h3>NPCs</h3>
                        <button type="button" class="btn btn-danger" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">Open modal for @mdo</button>
                    </div>

                    <div className="col-sm-3">
                        <h3>Traps</h3>
                        {/* <!-- Button trigger modal --> */}
                        <button type="button" class="btn btn-danger" data-toggle="modal" data-target="#exampleModalLong">
                            Launch demo modal
                        </button>

                        {/* <!-- Modal --> */}
                        <div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                            <div class="modal-dialog" role="document">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        ...
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                        <button type="button" class="btn btn-primary">Save changes</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-3">
                        <h3>Treasures</h3>
                        <button type="button" class="btn btn-danger" data-toggle="modal" data-target="#exampleModal" data-whatever="@getbootstrap">Open modal for @getbootstrap</button>
                    </div>
                </div>
            </Fragment>
        );
    }
}