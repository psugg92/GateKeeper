import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

export default class NpcMaker extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.npc.id
        }
    }

    // changeChosenNpcArray(id) {
    //     let chosenNpcArrayCopy = this.state.chosenNpcArray;
    //     chosenNpcArrayCopy.push(id)
    //     this.setState({
    //         chosenNpcArray: chosenNpcArrayCopy
    //     })
        
    // }

    render() {
        return( 
            <div>
                <input className="form-check-input" type="checkbox" value={ this.state.id } />
                <label className="form-check-label">
                    {this.props.npc.npc_name}
                </label>
            </div>
            )
    }
}
// onClick={(event) => { this.changeChosenNpcArray(this.state.id), console.log(this.state.chosenNpcArray); }}