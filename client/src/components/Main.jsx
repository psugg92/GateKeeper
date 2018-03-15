import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import AuthButton from "./auth/authButton";


export default class Main extends Component {
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
                <div className="jumbotron jumbotron-fluid d-flex">
                    <div className="container">
                        <h1 className="display-3">Welcome to Dungeon Keeper!</h1>
                        <p className="lead"></p>
                        <Link to='/SignUp' className="btn btn-lg text-light">
                            SIGN UP
                        </Link>
                    </div>
                    <div className="container">
                        <img src="../pics/logo_white_lg.png" />
                    </div>
                </div>
                <div className="container-fluid d-flex justify-content-around my-5">
                    <div className="card col-md-4 d-flex p-2">
                        <img className="card-img-top" src="../pics/peter.jpg" alt="Card image cap" />
                        <div className="card-body">
                            <h2>Peter Sugg</h2>
                            <h4>Back End</h4>
                        </div>
                    </div>
                    <div className="card col-md-4 d-flex p-2 mr-2 ml-2">
                        <img className="card-img-top" src="../pics/jason.jpg" alt="Card image cap" />
                        <div className="card-body">
                            <h2>Jason Simons</h2>
                            <h4>Front End</h4>
                        </div>
                    </div>
                    <div className="card col-md-4 d-flex p-2">
                        <img className="card-img-top" src="../pics/matt.jpg" alt="Card image cap" />
                        <div className="card-body">
                            <h2>Matt Bolton</h2>
                            <h4>Front End</h4>
                        </div>
                    </div>
                    

                    
                </div>
            </Fragment>
        );
    }
}

{/* <button className="btn dropdown-toggle mr-3" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Sign In
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <form className="px-4 py-3">
                                <div className="form-group">
                                    <label>Email address</label>
                                    <input type="email" className="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com" />
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" className="form-control" id="exampleDropdownFormPassword1" placeholder="Password" />
                                </div>
                                <Link to='UserDashboard' className="btn text-light">Sign in</Link>
                            </form>
                            <div className="dropdown-divider"></div>
                            <p className="dropdown-item" href="#">New around here? <Link to='/SignUp'>Sign up</Link></p>
                        </div>
                    </div> */}