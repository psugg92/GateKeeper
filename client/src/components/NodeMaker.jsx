import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { oneNode } from "../services/nodes";

// import ViewEvent from './ViewEvent';

export default class NodeMaker extends Component {
    constructor(props) {
        super(props);

        this.state = {
            node: [0]
        }
    }

    pizza(id) {
        oneNode(id)
            .then(data => {
                this.setState({ node: data })
            })
    }

    npcCardMap() {
        let npcMap = this.state.node.map((hotdog, index) => {
            if (hotdog.npc_name !== null) {
                return (
                    <div className="card bank-text bg-white mb-3 col-md-6" key={index}>
                        <div className="card-header">
                            <h2>{hotdog.npc_name}</h2>
                            <p className="card-text m-0"><i>Size: {hotdog.npc_size} | Alignment: {hotdog.npc_alignment}</i></p>
                        </div>
                        <div className="card-body">
                            <div className="col-md-12 border-bottom pb-3 mb-3">
                                <p className="card-text m-0"><b>Armor Class</b> {hotdog.npc_armor}</p>
                                <p className="card-text m-0"><b>Hit Points:</b> {hotdog.npc_hp}</p>
                                <p className="card-text m-0"><b>Speed:</b> {hotdog.npc_speed} (Fly Speed {hotdog.npc_fly_speed}, Climb Speed {hotdog.npc_climb_speed})</p>
                            </div>
                            <div className="col-md-12 border-bottom pb-3 mb-3 row justify-content-around">
                                <div className="col-md-12 row justify-content-around">
                                    <h5>STR</h5>
                                    <h5>DEX</h5>
                                    <h5>CON</h5>
                                    <h5>INT</h5>
                                    <h5>WIS</h5>
                                    <h5>CHA</h5>
                                </div>
                                <div className="col-md-12 row justify-content-around">
                                    <h6>{hotdog.npc_strength}</h6>
                                    <h6>{hotdog.npc_dexterity}</h6>
                                    <h6>{hotdog.npc_constitution}</h6>
                                    <h6>{hotdog.npc_intelligence}</h6>
                                    <h6>{hotdog.npc_wisdom}</h6>
                                    <h6>{hotdog.npc_charisma}</h6>
                                </div>
                            </div>
                            <div className="col-md-12 border-bottom pb-3 mb-3">
                                <p className="card-text m-0"><b>Saving Throws:</b> STR {hotdog.npc_st_strength}, DEX {hotdog.npc_st_dexterity}, CON {hotdog.npc_st_constitution}, INT {hotdog.npc_st_intelligence}, WIS {hotdog.npc_st_wisdom}, CHA {hotdog.npc_st_charisma}</p>
                                <p className="card-text m-0"><b>Skills:</b> {hotdog.npc_skills}</p>
                                <p className="card-text m-0"><b>Speed:</b> {hotdog.npc_speed} (Fly Speed {hotdog.npc_fly_speed}, Climb Speed {hotdog.npc_climb_speed})</p>
                                <p className="card-text m-0"><b>Senses:</b> {hotdog.npc_senses}</p>
                                <p className="card-text m-0"><b>Damage Immunity:</b> {hotdog.npc_damage_immunity}</p>
                                <p className="card-text m-0"><b>Condition Immunity:</b> {hotdog.npc_condition_immunity}</p>
                                <p className="card-text m-0"><b>Passive Perception:</b> {hotdog.npc_passive_perception}</p>
                                <p className="card-text m-0"><b>Challenge:</b> {hotdog.npc_challenge_rating} ({hotdog.npc_xp_reward} XP)</p>
                            </div>
                            <h4>Actions</h4>
                            <p className="card-text m-0">{hotdog.npc_actions}</p>
                            <p className="card-text m-0"><b>Legendary Actions:</b> {hotdog.npc_legendary_actions}</p>
                            <p className="card-text mb-1"><b>Lair Actions:</b> {hotdog.npc_lair_actions}</p>
                            <h4 className="border-bottom">Description</h4>
                            <p className="card-text m-0"> {hotdog.npc_description}</p>
                        </div>
                    </div>
                )
            }
        })
        return <div className="row">{npcMap}</div>;
    }

    trapCardMap() {
        let trapMap = this.state.node.map((burger, index) => {
            if (burger.trap_name !== null) {
                return (
                    <div className="card bank-text bg-white mb-3 col-md-4" key={index}>
                        <div className="card-header">
                            <h5>{burger.trap_name}</h5>
                        </div>
                        <div className="card-body">
                            <p className="card-text m-0"><b>Trap Type:</b> {burger.trap_type}</p>
                            <p className="card-text m-0"><b>Seen DC:</b> {burger.trap_seen_dc}</p>
                            <p className="card-text m-0"><b>Disarm DC:</b> {burger.trap_disarm_dc}</p>
                            <p className="card-text"><b>Damage:</b> d{burger.trap_damage_die}</p>
                            <h6 className="card-text border-bottom"><b>Description</b></h6>
                            <p className="card-text ml-2">{burger.trap_description}</p>
                        </div>
                    </div>
                )
            }
        })
        return <div className="row justify-content-around">{trapMap}</div>;
    }

    treasureCardMap() {
        let treasureMap = this.state.node.map((taco, index) => {
            if (taco.loot_name !== null) {
                return (
                    <div className="card bank-text bg-white mb-3 col-md-4" key={index}>
                        <div className="card-header">
                            <h5>{taco.loot_name}</h5>
                        </div>
                        <div className="card-body">
                            <h6><b>Value</b></h6>
                            <p className="card-text ml-2">{taco.loot_value} GP</p>
                            <h6 className="border-bottom"><b>Description</b></h6>
                            <p className="card-text ml-2">{taco.loot_description}</p>
                        </div>
                    </div>
                )
            }
        })
        return <div className="row justify-content-around">{treasureMap}</div>;
    }

    render() {

        let nodeCollection = this.props.nodeList.map(nodeInfo => {

            return (
                <Fragment key={nodeInfo.id}>
                    {console.log(nodeInfo.node_name)}

                    {/* Event/Node Cards */}
                    <div className="card text-white  mb-5 col-md-3">
                        <div className="card-header">{nodeInfo.node_name}</div>
                        <div className="card-body">
                            <h5 className="card-title">{nodeInfo.location_id}</h5>
                            <p className="card-text">{nodeInfo.node_description}</p>


                        </div>
                        <div className="card-footer">
                            {/* <!-- Button trigger modal --> */}

                            <div className="container-fluid d-flex justify-content-center">
                                <button type="button" className="btn btn-sm" data-toggle="modal" data-target="#firstEvent" onClick={() => { this.pizza(nodeInfo.id) }}>
                                    View Event
                                </button>
                                {/* <button type="button" className="btn btn-light btn-sm">
                                    Edit Event
                                </button> */}
                            </div>


                            {/* <!-- Modal --> */}
                            <div className="modal fade" id="firstEvent" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                                <div className="modal-dialog modal-xl" id="phat" role="document">
                                    <div className="modal-content dropdownCard text-light">
                                        <div className="modal-header">
                                            <h1 className="modal-title" id="exampleModalLongTitle">{this.state.node[0].node_name}</h1>
                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div className="modal-body text-left">
                                            <h3>Description:</h3>
                                            <p>{this.state.node[0].node_description} Peter, Eat shit</p>
                                            <h3>Location:</h3>
                                            <p>{this.state.node[0].location_name} - {this.state.node[0].location_description}</p>


                                            <h3>NPCs:</h3>

                                            {/* let nodeCollection = this.props.nodeList.map(nodeInfo => { */}
                                            {/* NPC Cards */}
                                            <div className="container-fluid">
                                                {this.npcCardMap()}
                                            </div>

                                            <h3>Traps:</h3>

                                            <div className="container-fluid">
                                                {this.trapCardMap()}
                                            </div>

                                            <h3>Treasures:</h3>

                                            <div className="container-fluid">
                                                {this.treasureCardMap()}
                                            </div>

                                        </div>

                                    </div>
                                    <div className="modal-footer d-flex align-items-center">
                                        <button type="button" className="btn" data-dismiss="modal">Close</button>
                                        <button type="button" className="btn">Edit Event</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-md-1 d-flex align-items-center mb-5">
                        <img src="../../pics/arrow.png" />
                    </div>
                </Fragment>
            )

        })
        return <div className=" d-flex justify-content-between">{nodeCollection}</div>;
    }
}