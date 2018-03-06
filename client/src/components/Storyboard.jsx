import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import * as nodesService from '../services/nodes';

import NodeMaker from './NodeMaker';
import CreateNPC from './CreateNPC';
import CreateEvent from './CreateEvent';

export default class Storyboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nodeArray: []
        };
    };

    componentWillMount() {
        nodesService.all(`${this.props.match.params.id}`)
        .then(data => {
            this.setState ({ nodeArray: data })
        })
    };

    render() {
        return (
            <Fragment>
                <div className='container-fluid d-flex justify-content-center'>
                    <h2 className="display-6">Storyboard</h2>
                </div>
                <div className='container-fluid d-flex justify-content-center m-3'>
                    <Link to="./CreateEvent" className="btn btn-danger btn-lg m-1">
                        Create Event
                    </Link>
                </div>
                <div className='container-fluid d-flex justify-content-between'>
                    <NodeMaker nodeList={this.state.nodeArray}/>
                </div>
            </Fragment>
        );
    }
}