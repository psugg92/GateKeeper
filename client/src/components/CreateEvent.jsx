import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import * as campaignsService from "../services/campaigns";
import LocationMaker from "./LocationMaker";

import CreateLocation from "./CreateLocation";
import CreateNPC from "./CreateNPC";
import CreateTrap from "./CreateTrap";
import CreateTreasure from "./CreateTreasure";

export default class CreateEvent extends Component {
    constructor(props) {
        super(props);

        this.state = {

            locationArray: [],

            eventName: "",
            eventDescription: "",
            eventLocation: "",

            locationName: "",
            locationDescription: "",
            locationLore: ""

        }

    }

    // Update Event Methods
    updateEventName(value) {
        this.setState({ eventName: value });
        console.log({ eventName: value });
    }
    updateEventDescription(value) {
        this.setState({ eventDescription: value });
        console.log({ eventDescription: value });
    }
    updateEventLocation(value) {
        this.setState({ eventLocation: value });
        console.log({ eventLocation: value });
    }

    // Update Location Methods
    updateLocationName(value) {
        this.setState({ locationName: value });
        console.log({ locationName: value });
    }
    updateLocationDescription(value) {
        this.setState({ locationDescription: value });
        console.log({ locationDescription: value });
    }
    updateLocationLore(value) {
        this.setState({ locationLore: value });
        console.log({ locationLore: value });
    }



    // This creates a new event node
    createLocation() {
        campaignsService.insertLocation({

            // eventName: this.state.eventName,
            // eventDescription: this.state.eventDescription,
            // eventLocation: this.state.eventLocation,

            locationName: this.state.locationName,
            locationDescription: this.state.locationDescription,
            locationLore: this.state.locationLore,

        }, this.props.match.params.id)

    }

    componentWillMount() {
        campaignsService.allLocations(`${this.props.match.params.id}`)
            .then(data => {
                this.setState({ locationArray: data })
                console.log(this.state.locationArray);
            })
    };

    updateList() {
        campaignsService.allLocations(`${this.props.match.params.id}`)
            .then(data => {
                this.setState({ locationArray: data })
                console.log(this.state.locationArray);
            })
    }

    render() {
        return (
            <Fragment>
                <div className="container-fluid border-bottom border-dark p-5">
                    <div className='container-fluid d-flex ' >
                        <h2 className="display-6 border-bottom border-dark">Create a New Event</h2>
                    </div>
                    <div className="d-flex flex-column">
                        <div className="p-2 text-left">Name of Event:</div>
                        <textarea onChange={(event) => { this.updateEventName(event.target.value) }}
                            className="form-control p-1 m-2"
                            id="exampleFormControlTextarea1"
                            rows="1"
                        />
                        <div className="p-2 text-left">Short Description:</div>
                        <textarea onChange={(event) => { this.updateEventDescription(event.target.value) }}
                            className="form-control p-1 m-2"
                            id="exampleFormControlTextarea1"
                            rows="3"
                        />
                        <div className="p-2 text-left">Location</div>
                        <select className="form-control p-1 m-2" id="event-select-locations-input" onChange={(event) => { this.updateEventLocation(event.target.value) }}>
                            <LocationMaker locationList={this.state.locationArray} />
                        </select>

                        {/* Create Location */}
                        <button className="btn btn-danger" type="button" data-toggle="collapse" data-target="#create-location" aria-expanded="false" aria-controls="collapseExample">
                            CREATE LOCATION
                        </button>
                        <div className="collapse" id="create-location">
                            <div className="card card-body bg-danger">

                                <div className="form-group row">
                                    <label className="col-2 col-form-label text-light">Name</label>
                                    <div className="col-10">
                                        <input className="form-control" type="text" id="location-name-input" onChange={(event) => { this.updateLocationName(event.target.value) }} />
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <label className="col-2 col-form-label text-light">Visual Description</label>
                                    <div className="col-10">
                                        <input className="form-control" type="text" id="location-description-input" onChange={(event) => { this.updateLocationDescription(event.target.value) }} />
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <label className="col-2 col-form-label text-light">Lore</label>
                                    <div className="col-10">
                                        <input className="form-control" type="text" id="location-lore-input" onChange={(event) => { this.updateLocationLore(event.target.value) }} />
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <button className="btn btn-secondary" type="button" data-toggle="collapse" data-target="#create-location" aria-expanded="false" aria-controls="collapseExample">
                                        Cancel
                                    </button>
                                    <button className="btn btn-light col-1" type="button" onClick={() => { this.createLocation(); location.reload(); }}>
                                        Create
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-fluid d-flex justify-content-center">
                    <Link to="/Storyboard/1" className="btn btn-danger btn-lg m-1">
                        CANCEL
                    </Link>
                    <Link to="/CreateEvent2" className="btn btn-danger btn-lg m-1">
                        NEXT
                    </Link>
                </div>
            </Fragment>
        );
    }
}