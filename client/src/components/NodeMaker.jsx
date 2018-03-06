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
                    <div className="card text-danger bg-white mb-3 col-md-4" key={index}>
                        <div className="card-header">{hotdog.npc_name}</div>
                        <div className="card-body">
                            <p className="card-text">Size - {hotdog.npc_size}</p>
                            <p className="card-text">{hotdog.npc_alignment}</p>
                            <p className="card-text">Armor Class - {hotdog.npc_armor}</p>
                            <p className="card-text">Hit Points - {hotdog.npc_hp}</p>
                            <p className="card-text">Speed - {hotdog.npc_speed}</p>
                            <p className="card-text">Fly Speed - {hotdog.npc_fly_speed}</p>
                            <p className="card-text">Climb Speed - {hotdog.npc_climb_speed}</p>
                            <h5>Ability Scores</h5>
                            <p className="card-text">Strength - {hotdog.npc_strength}</p>
                            <p className="card-text">Dexterity - {hotdog.npc_dexterity}</p>
                            <p className="card-text">Constitution - {hotdog.npc_constitution}</p>
                            <p className="card-text">Intelligence - {hotdog.npc_intelligence}</p>
                            <p className="card-text">Wisdom - {hotdog.npc_wisdom}</p>
                            <p className="card-text">Charisma - {hotdog.npc_charisma}</p>
                            <h5>Saving Throws</h5>
                            <p className="card-text">Strength - {hotdog.npc_st_strength}</p>
                            <p className="card-text">Dexterity - {hotdog.npc_st_dexterity}</p>
                            <p className="card-text">Constitution - {hotdog.npc_st_constitution}</p>
                            <p className="card-text">Intelligence - {hotdog.npc_st_intelligence}</p>
                            <p className="card-text">Wisdom - {hotdog.npc_st_wisdom}</p>
                            <p className="card-text">Charisma - {hotdog.npc_st_charisma}</p>
                            <h5>Skills</h5>
                            <p className="card-text">Skills - {hotdog.npc_skills}</p>
                            <p className="card-text">Damage Immunity - {hotdog.npc_damage_immunity}</p>
                            <p className="card-text">Condition Immunity - {hotdog.npc_condition_immunity}</p>
                            <p className="card-text">Senses - {hotdog.npc_senses}</p>
                            <p className="card-text">Passive Perception - {hotdog.npc_passive_perception}</p>
                            <p className="card-text">Challenge Rating - {hotdog.npc_challenge_rating}</p>
                            <p className="card-text">XP Reward - {hotdog.npc_xp_reward}</p>
                            <p className="card-text">Description - {hotdog.npc_description}</p>
                            <p className="card-text">Actions - {hotdog.npc_actions}</p>
                            <p className="card-text">Legendary Actions - {hotdog.npc_legendary_actions}</p>
                            <p className="card-text">Lair Actions - {hotdog.npc_lair_actions}</p>
                        </div>
                    </div>
                )
            }
        })
        return <div className="row">{npcMap}</div>;
    }

    trapCardMap () {
        let trapMap = this.state.node.map((burger, index) => {
            if (burger.trap_name !== null) {
                return (
                    <div className="card text-danger bg-white mb-3 col-md-4" key={index}>
                        <div className="card-header">{burger.trap_name}</div>
                        <div className="card-body">
                            <p className="card-text">Trap Type - {burger.trap_type}</p>
                            <p className="card-text">Seen DC - {burger.trap_seen_dc}</p>
                            <p className="card-text">Disarm DC - {burger.trap_disarm_dc}</p>
                            <p className="card-text">Description - {burger.trap_description}</p>
                            <p className="card-text">Damage - d{burger.trap_damage_die}</p>
                        </div>
                    </div>
                )
            }
        })
        return <div className="row">{trapMap}</div>;
    }

    treasureCardMap () {
        let treasureMap = this.state.node.map((taco, index) => {
            if (taco.loot_name !== null) {
                return (
                    <div className="card text-danger bg-white mb-3 col-md-4" key={index}>
                        <div className="card-header">{taco.loot_name}</div>
                        <div className="card-body">
                            <p className="card-text">Value - {taco.loot_value}</p>
                            <p className="card-text">Description - {taco.loot_description}</p>
                        </div>
                    </div>
                )
            }
        })
        return <div className="row">{treasureMap}</div>;
    }

    render() {

        let nodeCollection = this.props.nodeList.map(nodeInfo => {

            return (
                <Fragment key={nodeInfo.id}>
                    {console.log(nodeInfo.node_name)}

                    {/* Event/Node Cards */}
                    <div className="card text-white bg-danger mb-3 col-sm-3">
                        <div className="card-header">{nodeInfo.node_name}</div>
                        <div className="card-body">
                            <h5 className="card-title">{nodeInfo.location_id}</h5>
                            <p className="card-text">{nodeInfo.node_description}</p>

                            {/* <!-- Button trigger modal --> */}
                            <button type="button" className="btn btn-light" data-toggle="modal" data-target="#firstEvent" onClick={() => { this.pizza(nodeInfo.id) }}>
                                View Event
                            </button>

                            {/* <!-- Modal --> */}
                            <div className="modal fade" id="firstEvent" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                                <div className="modal-dialog modal-lg" role="document">
                                    <div className="modal-content bg-danger text-light">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="exampleModalLongTitle">{this.state.node[0].node_name}</h5>
                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div className="modal-body text-left">
                                            <h5>Description:</h5>
                                            <p>{this.state.node[0].node_description} Peter, Eat shit</p>
                                            <h5>Location:</h5>
                                            <p>{this.state.node[0].location_name} - {this.state.node[0].location_description}</p>


                                            <h5>NPCs:</h5>

                                            {/* let nodeCollection = this.props.nodeList.map(nodeInfo => { */}
                                            {/* NPC Cards */}
                                            <div className="container-fluid">
                                                {this.npcCardMap()}
                                            </div>

                                            <h5>Traps:</h5>

                                            <div className="container-fluid">
                                                {this.trapCardMap()}
                                            </div>

                                            <h5>Treasures:</h5>

                                            <div className="container-fluid">
                                                {this.treasureCardMap()}
                                            </div>

                                        </div>

                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-light" data-dismiss="modal">Close</button>
                                        <button type="button" className="btn btn-light">Save changes</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </Fragment>
            )

        })
        return <div className="row">{nodeCollection}</div>;
    }
}