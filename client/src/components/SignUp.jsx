import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";


export default class SignUp extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                <div className="jumbotron jumbotron-fluid">
                    <div className='container-fluid d-flex justify-content-center' >
                        <h2 className="display-6 border-bottom border-light">Create an Account</h2>
                    </div>
                    <div className='container-fluid d-flex justify-content-center'>
                        <div className="d-flex flex-column">
                            <div className="p-2">Username</div>
                            <textarea onChange={(event) => { this.updateTitle(event.target.value) }}
                                className="form-control p-1 m-2"
                                id="exampleFormControlTextarea1"
                                rows="1"
                            />
                            <div className="p-2">Email Address:</div>
                            <textarea onChange={(event) => { this.updateTitle(event.target.value) }}
                                className="form-control p-1 m-2"
                                id="exampleFormControlTextarea1"
                                rows="1"
                            />
                            <div className="p-2">Password</div>
                            <textarea onChange={(event) => { this.updateTitle(event.target.value) }}
                                className="form-control p-1 m-2"
                                id="exampleFormControlTextarea1"
                                rows="1"
                            />
                            <div className="container-fluid d-flex justify-content-center">
                                <Link to='/UserDashboard' className="btn btn-lg text-light m-1">
                                    CREATE ACCOUNT
                            </Link>
                                <Link to='../' className="btn btn-lg text-light m-1">
                                    CANCEL
                            </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}