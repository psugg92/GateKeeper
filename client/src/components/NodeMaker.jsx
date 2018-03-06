import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

import ViewEvent from './ViewEvent';

export default class NodeMaker extends Component {
    render() {

        let nodeCollection = this.props.nodeList.map(nodeInfo => {
            return (
                <Fragment key={nodeInfo.id}>

                    {console.log(nodeInfo.node_name)}

                    {/* Event/Node Cards */}
                    <div className="container">
                        <div className="card text-white bg-danger mb-3 col-sm-3 d-flex mr-1">
                            <div className="card-header">{nodeInfo.node_name}</div>
                            <div className="card-body">
                                <h5 className="card-title">{nodeInfo.location_id}</h5>
                                <p className="card-text">{nodeInfo.node_description}</p>
                                <ViewEvent />
                            </div>
                        </div>
                    </div>

                </Fragment>
            )

        })
        return <div>{nodeCollection}</div>;
    }
}