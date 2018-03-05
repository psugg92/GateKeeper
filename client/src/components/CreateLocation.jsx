import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

export default class CreateLocation extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                {/* <!-- Button trigger for Locations modal --> */}
                <button type="button" className="btn btn-danger m-5" data-toggle="modal" data-target="#create-location">
                    Create Location
                </button>

                {/* <!-- Locations Modal --> */}
                <div className="modal fade" id="create-location" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                    <div className="modal-dialog modal-lg" role="document">
                        <div className="modal-content bg-danger text-light">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLongTitle">Create a Location</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="container-fluid">

                                    <div className="form-group row">
                                        <label className="col-2 col-form-label text-light">Name</label>
                                        <div className="col-10">
                                            <input className="form-control" type="text" id="location-name-input" />
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label className="col-2 col-form-label text-light">Visual Description</label>
                                        <div className="col-10">
                                            <input className="form-control" type="text" id="location-description-input" />
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label className="col-2 col-form-label text-light">Lore</label>
                                        <div className="col-10">
                                            <input className="form-control" type="text" id="location-lore-input" />
                                        </div>
                                    </div>

                                </div>

                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-light">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}