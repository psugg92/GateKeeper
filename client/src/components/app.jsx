import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import Header from './Header';
import Main from './Main';
import Login from './auth/login';
import Logout from './auth/logout';
import SignUp from './SignUp';
import UserDashboard from './UserDashboard';
import CreateCampaign from './CreateCampaign';
import Storyboard from './Storyboard';
import CreateEvent from './CreateEvent';
import CreateEvent2 from './CreateEvent2';
import PrivateRoute from './auth/privateRoute';

// import Donate from './donate';
// import Login from './auth/login';
// import CampaignDashboard from './CampaignDashboard';
// import AuthButton from './auth/authButton';





export default class App extends Component {

    render() {
        return (
            <Router>
                <Fragment>
                
                    {/* <Link to=""></Link> */}
                    <Switch>
                        <Route exact path='/' component={Main} />
                        <Route path="/login" component={Login} />
                        <Route path="/logout" component={Logout} />
                        <Route exact path='/SignUp' component={SignUp} />
                        <PrivateRoute exact path='/UserDashboard' component={UserDashboard} />
                        <PrivateRoute exact path='/CreateCampaign' component={CreateCampaign} />
                        <PrivateRoute exact path='/Storyboard/:id' component={Storyboard} />
                        <PrivateRoute exact path='/CreateEvent/:id' component={CreateEvent} />
                        <PrivateRoute exact path='/CreateEvent2/:id' component={CreateEvent2} />
                    </Switch>
                </Fragment>
            </Router>
        )
    }
}
{/* <AuthButton />  */}
{/* <Route path="/login" component={Login} />
    <Route path="/logout" component={Logout} />
    <Route path="/donate" component={Donate} /> */}