import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

export default class TreasureMaker extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.treasure.id
        }
    }
    render() {
        return( 
            <div>
                <input className="form-check-input" type="checkbox" value={this.state.id} />
                <label className="form-check-label">
                    {this.props.treasure.loot_name}
                </label>
            </div>
            )
    }
}