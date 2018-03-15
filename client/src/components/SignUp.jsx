import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import AuthButton from "./auth/authButton";


export default class SignUp extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                <div className="d-flex justify-content-start align-items-center" id="top">
                    <Link to='/'>
                    <span id="edit-img">
                        <img src="../pics/logo_white.png" className='ml-3 mt-3 mr-1' />
                    </span>
                    </Link>
                    {/* <Link to='/' style={{ textDecoration: 'none' }}> */}
                        {/* <h1 className="display-3 ml-1 mb-1 mt-2">Gatekeeper</h1> */}
                    {/* </Link> */}

                    <div className="dropleft ml-auto d-flex align-items-center">
                        <AuthButton />
                    </div>
                </div>
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