import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

import CreateLocation from "./CreateLocation";
import CreateNPC from "./CreateNPC";
import CreateTrap from "./CreateTrap";
import CreateTreasure from "./CreateTreasure";

export default class CreateCampaign extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                <div className="container-fluid border-bottom border-dark p-5">
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
                        <select className="form-control p-1 m-2" id="event-select-locations-input">
                            <option>The Tavern</option>
                        </select>

                        <CreateLocation />

                    </div>
                </div>

                <div className="container-fluid d-flex justify-content-around p-5 mb-5">

                    <div className="col-sm-3">
                        <h3>NPCs</h3>
                        <CreateNPC />
                    </div>

                    <div className="col-sm-3">
                        <h3>Traps</h3>
                        <CreateTrap />
                    </div>

                    <div className="col-sm-3">
                        <h3>Treasures</h3>
                        <CreateTreasure />
                    </div>
                </div>
            </Fragment>
        );
    }
}