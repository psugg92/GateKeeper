import React, { Component, Fragment } from 'react';
import * as userService from '../../services/user';
import { Redirect, Link } from 'react-router-dom';
import IndeterminateProgress from '../utilities/indeterminateProgress';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirectToReferrer: false,
            email: '',
            password: '',
            feedbackMessage: '',
            checkingLogin: true
        };
    }

    componentDidMount() {
        userService.checkLogin()
        .then((loggedIn) => {
            if (loggedIn) {
                this.setState({ redirectToReferrer: true, checkingLogin: false });
            } else {
                this.setState({ checkingLogin: false });
            }
        });
    }

    login(e) {
        e.preventDefault();
        userService.login(this.state.email, this.state.password)
        .then(() => {
            this.setState({ redirectToReferrer: true });
        }).catch((err) => {
            if (err.message) {
                this.setState({ feedbackMessage: err.message });
            }
        });
    }

    handleEmailChange(value) {
        this.setState({ email: value });
    }

    handlePasswordChange(value) {
        this.setState({ password: value });
    }

    render() {
       const { from } = this.props.location.state || { from: { pathname: '/UserDashboard' } };
       const { redirectToReferrer, checkingLogin } = this.state;

       if (checkingLogin) {
           return <IndeterminateProgress message="Checking Login Status..." />;
       }
       if (redirectToReferrer) {
           return (
               <Redirect to={from} />
           );
       }

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
                </div>
                <div className="jumbotron jumbotron-fluid">
                <div className="container">
                <p>You must be logged in to view this page.</p>
                <form onSubmit={(e) => this.login(e)} className="bg-light">
                    <div className="form-group">
                        <label htmlFor="email" className="aqua-text">Email</label>
                        <input id="email" className="form-control" type="email" onChange={(e) => this.handleEmailChange(e.target.value)} required /> 
                    </div>
                    <div className="form-group">
                        <label htmlFor="password" className="aqua-text">Password</label>
                        <input id="password" className="form-control" type="password" onChange={(e) => this.handlePasswordChange(e.target.value)} required /> 
                    </div>
                    {this.state.feedbackMessage ? (
                        <p>{ this.state.feedbackMessage }</p>
                    ): null}
                    <input type="submit" value="Login" className="btn btn-lg text-light" />
                </form>
                </div>
                </div>
            </Fragment>
       );
    }
}

export default Login;