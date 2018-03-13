import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

export default class CampaignMaker extends Component {
    render() {

        let campaignCollection = this.props.campaignList.map(campaignInfo => {
            return (
                <Fragment key={campaignInfo.id}>
                    {/* Campaign Cards */}
                        <div className="card col-md-4 p-3">
                            <img className="card-img-top rounded" src="../pics/cigSm.jpg" alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">{campaignInfo.campaign_name}</h5>
                                <p className="card-text">{campaignInfo.campaign_description.substring(0, 60)}...</p>
                                <Link to={`/Storyboard/${campaignInfo.id}`} className="btn text-light">
                                    Enter Campaign
                                </Link>
                            </div>
                        </div>
                </Fragment>  
            )
            
        })
        return <div className="row">{campaignCollection}</div>;
    }
}