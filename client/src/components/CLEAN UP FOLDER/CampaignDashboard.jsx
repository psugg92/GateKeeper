// import React, { Component, Fragment } from "react";
// import { Link } from "react-router-dom";

// export default class CampaignDashboard extends Component {
//     constructor(props) {
//         super(props);
//     }

//     render() {
//         return (
//             <Fragment>
//                 <div className="container-fluid d-flex justify-content-center">
//                     <h2 className="display-6">LOL I DON'T KNOW WHAT TO PUT HERE</h2>
//                 </div>
//                 <div className="jumbotron jumbotron-fluid d-flex">
//                     <div className="container">
//                         <h1 className="display-3">The Friendship Campaign!</h1>
//                         <p className="lead">Ladies and Gentlemen of the internet, we have gathered here today in honor of the creation of this campaign. May it provide this group of friends hours of fun and good vibes. May the DM not be a piece of shit and may the players be not idiots.</p>
//                         <Link to='/Storyboard' className="btn btn-danger btn-sm m-1">
//                             RUSH THROUGH THE GATE
//                         </Link>
//                         <Link to='/CampaignDashboard' className="btn btn-danger btn-sm m-1">
//                             MAINTAIN THE PORTCULLIS
//                         </Link>

//                         {/* Delete Button trigger modal */}
//                         <button type="button" className="btn btn-danger btn-sm" data-toggle="modal" data-target="#exampleModalCenter">
//                             Destroy the wall
//                         </button>

//                         {/* Delete Modal */}
//                         <div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
//                             <div className="modal-dialog modal-dialog-centered" role="document">
//                                 <div className="modal-content">
//                                     <div className="modal-header">
//                                         <h5 className="modal-title" id="exampleModalLongTitle">Delete Campaign</h5>
//                                         <button type="button" className="close" data-dismiss="modal" aria-label="Close">
//                                             <span aria-hidden="true">&times;</span>
//                                         </button>
//                                     </div>
//                                     <div className="modal-body">
//                                         Are you sure that you want to delete this campaign?
//                                     </div>
//                                     <div className="modal-footer">
//                                         <button type="button" className="btn btn-secondary" data-backdrop='false' data-dismiss="modal">Cancel</button>
//                                         <Link to="/UserDashboard" className="btn btn-danger">Delete</Link>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="container">
//                         <img src="../pics/cigLg.jpg" />
//                     </div>
//                 </div>
//             </Fragment>
//         );
//     }
// }