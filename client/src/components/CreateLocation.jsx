// import React, { Component, Fragment } from 'react';
// import { Link } from 'react-router-dom';

// export default class CreateLocation extends Component {
//     constructor(props) {
//         super(props);
//     }

//     render() {
//         return (
//             <Fragment>
//                 {/* <!-- Button trigger for 2nd modal --> */}
//                 <button type="button" className="btn btn-light" data-toggle="modal" data-target="#upload-avatar">
//                     Create New Location
//                 </button>

//                 {/* <!-- Modal 2 --> */}
//                 <div className="modal" id="upload-avatar" tabIndex="-1" role="dialog" aria-labelledby="upload-avatar-title" aria-hidden="true">
//                     <div className="modal-dialog">
//                         <div className="modal-content bg-danger text-light">
//                             <div className="modal-header">
//                                 <h5 className="modal-title" id="upload-avatar-title">Create Location</h5>
//                                 <button type="button" className="close" data-dismiss="modal" aria-label="Close">
//                                     <span aria-hidden="true">&times;</span>
//                                 </button>
//                             </div>
//                             <div className="modal-body">
//                                 <div className="container-fluid">

//                                     <div className="form-group row">
//                                         <label className="col-2 col-form-label text-light">Location Name</label>
//                                         <div className="col-10">
//                                             <input className="form-control" type="text" id="event-name-input" />
//                                         </div>
//                                     </div>

//                                     <div className="form-group row">
//                                         <label className="col-2 col-form-label text-light">Visual Description</label>
//                                         <div className="col-10">
//                                             <input className="form-control" type="text" id="event-name-input" />
//                                         </div>
//                                     </div>

//                                     <div className="form-group row">
//                                         <label className="col-2 col-form-label text-light">Lore or History</label>
//                                         <div className="col-10">
//                                             <input className="form-control" type="text" id="event-name-input" />
//                                         </div>
//                                     </div>

//                                 </div>


//                                 <div className="modal-footer">
//                                     <button type="button" className="btn btn-light" data-dismiss="modal">Close</button>
//                                     <button type="button" className="btn btn-light">Save changes</button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </Fragment>
//         )
//     }
// }