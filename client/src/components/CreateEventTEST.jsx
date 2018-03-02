import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

export default class CreateEventTEST extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                {/* <!-- Button trigger for 1st modal --> */}
                <button type="button" className="btn btn-light" data-toggle="modal" data-target="#create-event">
                    Create Event
                </button>

                {/* <!-- Modal 1 --> */}
                <div className="modal fade" id="create-event" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                    <div className="modal-dialog modal-lg" role="document">
                        <div className="modal-content bg-danger text-light">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLongTitle">Create Event</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="container-fluid">

                                    <div className="form-group row">
                                        <label className="col-2 col-form-label text-light">Name</label>
                                        <div className="col-10">
                                            <input className="form-control" type="text" id="event-name-input" />
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label className="col-2 col-form-label text-light">Description</label>
                                        <div className="col-10">
                                            <input className="form-control" type="text" id="event-description-input" />
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label className="col-2 col-form-label text-light">Locations</label>
                                        <div className="col-10">
                                            <select className="form-control" id="event-select-locations-input">
                                                <option>Tiny ( less than 2 ft.)</option>
                                                <option>Small (3 - 5 ft.)</option>
                                                <option>Medium (5 - 9 ft.)</option>
                                                <option>Large (10 - 14 ft.)</option>
                                                <option>Huge (15 - 19 ft.</option>
                                                <option>Gargantuan (20 ft. or larger)</option>
                                            </select>

                                            {/* <!-- Button trigger for CreateLocation modal --> */}
                                            <button type="button" className="btn btn-light" data-toggle="modal" data-target="#location-creation" data-dismiss="modal">
                                                Create New Location
                                            </button>

                                            {/* <!-- Button trigger modal --> */}

                                            {/* <div class="modal fade" id="SELECTOR" tabindex="-1">
                                                <div class="modal-dialog">
                                                    <div class="modal-content">
                                                        <div class="modal-body"> ... </div>
                                                        <div class="modal-footer">
                                                            <ANY data-toggle="modal" data-target="TARGET-2" data-dismiss="modal">...</ANY>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> */}

                                            {/* <!-- Modal 2 --> */}
                                            

                                        </div>
                                    </div>

                                    {/* <div className="form-group row">
                                        <label className="col-2 col-form-label text-light">Traps</label>
                                        <div className="col-10">
                                            <select className="form-control" id="event-select-traps-input">
                                                <option>Tiny ( less than 2 ft.)</option>
                                                <option>Small (3 - 5 ft.)</option>
                                                <option>Medium (5 - 9 ft.)</option>
                                                <option>Large (10 - 14 ft.)</option>
                                                <option>Huge (15 - 19 ft.</option>
                                                <option>Gargantuan (20 ft. or larger)</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label className="col-2 col-form-label text-light">Treasures</label>
                                        <div className="col-10">
                                            <select className="form-control" id="event-select-treasures-input">
                                                <option>Tiny ( less than 2 ft.)</option>
                                                <option>Small (3 - 5 ft.)</option>
                                                <option>Medium (5 - 9 ft.)</option>
                                                <option>Large (10 - 14 ft.)</option>
                                                <option>Huge (15 - 19 ft.</option>
                                                <option>Gargantuan (20 ft. or larger)</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <div className="col-sm-2">NPC</div>
                                        <div className="col-sm-10">
                                            <div className="form-check">
                                                <input className="form-check-input " type="checkbox" id="gridCheck1" />
                                                <label className="form-check-label text-light text-left" htmlFor="gridCheck1">
                                                    Example NPC
                                                </label>
                                            </div>
                                        </div>
                                    </div> */}

                                </div>
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