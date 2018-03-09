import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

export default class LocationMaker extends Component {
    render() {

        let locationCollection = this.props.locationList.map(locationInfo => {
            return (
                <Fragment key={locationInfo.id}>
                    <option>{locationInfo.location_name}</option>
                </Fragment>  
            )
            
        })
        return <Fragment>{locationCollection}</Fragment>;
    }
}