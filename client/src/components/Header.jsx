import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                <div className="d-flex justify-content-start">
                    <Link to='/'>
                        <img src="../pics/swordGuy.png" className='ml-3 mt-3 mr-1' />
                    </Link>
                    {/* <Link to='/' style={{ textDecoration: 'none' }}> */}
                        <h1 className="display-3 ml-1 mb-1 mt-2">Gatekeeper</h1>
                    {/* </Link> */}
                    <div className="dropleft ml-auto d-flex align-items-center">
                        <button className="btn btn-danger dropdown-toggle mr-3" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
                                <Link to='UserDashboard' className="btn btn-danger">Sign in</Link>
                            </form>
                            <div className="dropdown-divider"></div>
                            <p className="dropdown-item" href="#">New around here? <Link to='/SignUp'>Sign up</Link></p>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}