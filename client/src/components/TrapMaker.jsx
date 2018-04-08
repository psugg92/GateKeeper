import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

export default class TrapMaker extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.trap.id,
            checked: false
        }
    }

    handleChange() { 
        console.log(this.state.checked)
         if(this.state.checked === true) {
             console.log("checked")
             this.props.AddId(this.state.id)
 
         } else if(this.state.checked === false) {
             console.log("unchecked")
             this.props.Remove(this.state.id)
         }
     }

    render() {
        return( 
            <div>
                <input className="form-check-input" type="checkbox" value={this.state.id} onChange={ () => {
                    this.setState({checked: !this.state.checked}, () => {
                        this.handleChange();
                    })
                }} />
                <label className="form-check-label bank-text">
                    {this.props.trap.trap_name}
                </label>
            </div>
            )
    }
}