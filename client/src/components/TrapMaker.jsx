import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

export default class TrapMaker extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.trap.id
        }
    }
    render() {
        return( 
            <div>
                <input className="form-check-input" type="checkbox" value={this.state.id} />
                <label className="form-check-label">
                    {this.props.trap.trap_name}
                </label>
            </div>
            )
    }
}