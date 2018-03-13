import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import * as campaignsService from "../services/campaigns";
import * as nodesService from "../services/nodes";
import LocationMaker from "./LocationMaker";

// import CreateLocation from "./CreateLocation";
// import CreateNPC from "./CreateNPC";
// import CreateTrap from "./CreateTrap";
// import CreateTreasure from "./CreateTreasure";

export default class CreateEvent extends Component {
    constructor(props) {
        super(props);

        this.state = {

            locationArray: [],
            nodeId: 0,

            eventName: "",
            eventDescription: "",
            eventLocation: 1,

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

            locationName: this.state.locationName,
            locationDescription: this.state.locationDescription,
            locationLore: this.state.locationLore,

        }, this.props.match.params.id)
    }


    //hardcoded user
    //remember to change
    createNode() {
        fetch('http://localhost:3000/api/campaigns/nodes/1', {
			method: 'post',
			body: JSON.stringify({
			    eventName: this.state.eventName,
				eventDescription: this.state.eventDescription,
				eventLocation: this.state.eventLocation,
				campaignId: this.props.match.params.id
			}),
			headers: new Headers({
				'Content-Type': 'application/json'
			})
        }).then(res => res.json())
            .then(results => {
                // this.setState({ nodeId: results.insertId });
                this.setState({nodeId: results[0][0].insertId}, () => {this.props.history.replace("/CreateEvent2/" + this.state.nodeId)});
            })
            
    };



    componentWillMount() {
        campaignsService.allLocations(`${this.props.match.params.id}`)
            .then(data => {
                this.setState({ locationArray: data })
                console.log(this.state.locationArray);
            })
    };



    render() {
        return (
            <Fragment>
                <div className="jumbotron jumbotron-fluid">
                    <div className="container-fluid p-5">
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
                                {this.state.locationArray.map((location, index) => {
                                    return <LocationMaker location={location} key={index} />
                                })
                                }

                            </select>

                            {/* Create Location */}
                            <button className="btn" type="button" data-toggle="collapse" data-target="#create-location" aria-expanded="false" aria-controls="collapseExample">
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
                                    eat a dick lol
                                    <div className="form-group row">
                                        <button className="btn text-light" type="button" data-toggle="collapse" data-target="#create-location" aria-expanded="false" aria-controls="collapseExample">
                                            Cancel
                                    </button>
                                        <button className="btn text-light col-1" type="button" onClick={() => { this.createLocation(); location.reload(); }}>
                                            Create
                                    </button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                

                <div className="container-fluid d-flex justify-content-center">
                    {/* <button type="button" className="btn btn-danger btn-lg m-1" onClick={ () => { this.createNode(); this.getNodeId(); }}>
                        Generate
                    </button> */}
                    <Link to="/Storyboard/1" className="btn btn-lg text-light m-1">
                        CANCEL
                    </Link>
                    <button type="button" className="btn btn-danger btn-lg m-1" onClick={ () => {this.createNode()}}>
                        NEXT
                    </button>
                </div>
                </div>
            </Fragment>
            // to={`/CreateEvent2/${this.props.match.params.id}`}
        );
    }
}