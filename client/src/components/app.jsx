import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import Header from './Header';
import Main from './Main';
import SignUp from './SignUp';
import UserDashboard from './UserDashboard';
import CreateCampaign from './CreateCampaign';
// import CampaignDashboard from './CampaignDashboard';
import Storyboard from './Storyboard';
import CreateEvent from './CreateEvent';

// import Donate from './donate';
// import PrivateRoute from './auth/privateRoute';
// import Login from './auth/login';
// import Logout from './auth/logout';
// import AuthButton from './auth/authButton';





export default class App extends Component {

    render() {
        return (
            <Router>
                <Fragment>
                    <Header />
                    <Link to=""></Link>
                    <Switch>
                        <Route exact path='/' component={Main} />
                        <Route exact path='/SignUp' component={SignUp} />
                        <Route exact path='/UserDashboard' component={UserDashboard} />
                        <Route exact path='/CreateCampaign' component={CreateCampaign} />
                        {/* <Route exact path='/CampaignDashboard' component={CampaignDashboard} /> */}
                        <Route exact path='/Storyboard' component={Storyboard} />
                        {/* <Route exact path='/Storyboard' component={Storyboard} /> */}

                        <Route exact path='/CreateEvent' component={CreateEvent} />

                        {/* <Route exact path='/CreateNPC' component={CreateNPC} /> */}
                    </Switch>
                </Fragment>
            </Router>
        )
    }
}
{/* <AuthButton /> */}
{/* <Route path="/login" component={Login} />
    <Route path="/logout" component={Logout} />
    <Route path="/donate" component={Donate} /> */}