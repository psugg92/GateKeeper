import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

export default class LocationMaker extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.location.id
        }
    }
    render() {
            return <option value={this.state.id}>{this.props.location.location_name}</option>
    }
}