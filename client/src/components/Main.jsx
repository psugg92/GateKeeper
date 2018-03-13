import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";


export default class Main extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                <div className="jumbotron jumbotron-fluid d-flex">
                    <div className="container">
                        <h1 className="display-3">Welcome to Gatekeeper!</h1>
                        <p className="lead">This is a good ass application. Sign up if you ain't a bitch</p>
                        <Link to='/SignUp' className="btn btn-lg text-light">
                            SIGN UP
                        </Link>
                    </div>
                    <div className="container">
                        <img src="../pics/cigLg.jpg" />
                    </div>
                </div>
                <div className="container-fluid d-flex justify-content-around">
                    <div className="card col-md-3 d-flex p-2">
                        <img className="card-img-top" src="../pics/cigSm.jpg" alt="Card image cap" />
                        <div className="card-body">
                            <p className="card-text text-light">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                    <div className="card col-md-3 d-flex p-2">
                        <img className="card-img-top" src="../pics/cigSm.jpg" alt="Card image cap" />
                        <div className="card-body">
                            <p className="card-text text-light">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                    <div className="card col-md-3 d-flex p-2">
                        <img className="card-img-top" src="../pics/cigSm.jpg" alt="Card image cap" />
                        <div className="card-body">
                            <p className="card-text text-light">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}