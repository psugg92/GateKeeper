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
                    <div className="card text-danger bg-white mb-3 col-md-12" key={index}>
                        <div className="card-header">
                            <h2>{hotdog.npc_name}</h2>
                            <p className="card-text">Size: {hotdog.npc_size} | Alignment: {hotdog.npc_alignment}</p>
                        </div>
                        <div className="card-body">
                            <div className="col-md-12 border-bottom pb-3 mb-3">
                                <p className="card-text">Armor Class: {hotdog.npc_armor}</p>
                                <p className="card-text">Hit Points: {hotdog.npc_hp}</p>
                                <p className="card-text">Speed: {hotdog.npc_speed} (Fly Speed {hotdog.npc_fly_speed}, Climb Speed {hotdog.npc_climb_speed})</p>
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
                                <p className="card-text">Saving Throws: STR {hotdog.npc_st_strength}, DEX {hotdog.npc_st_dexterity}, CON {hotdog.npc_st_constitution}, INT {hotdog.npc_st_intelligence}, WIS {hotdog.npc_st_wisdom}, CHA {hotdog.npc_st_charisma}</p>
                                <p className="card-text">Skills: {hotdog.npc_skills}</p>
                                <p className="card-text">Speed: {hotdog.npc_speed} (Fly Speed {hotdog.npc_fly_speed}, Climb Speed {hotdog.npc_climb_speed})</p>
                                <p className="card-text">Senses: {hotdog.npc_senses}</p>
                                <p className="card-text">Damage Immunity: {hotdog.npc_damage_immunity}</p>
                                <p className="card-text">Condition Immunity: {hotdog.npc_condition_immunity}</p>
                                <p className="card-text">Passive Perception: {hotdog.npc_passive_perception}</p>
                                <p className="card-text">Challenge: {hotdog.npc_challenge_rating} ({hotdog.npc_xp_reward} XP)</p>
                            </div>
                            <h4>Actions</h4>
                            <p className="card-text">{hotdog.npc_actions}</p>
                            <p className="card-text">Legendary Actions: {hotdog.npc_legendary_actions}</p>
                            <p className="card-text">Lair Actions: {hotdog.npc_lair_actions}</p>
                            <h4 className="border-bottom">Description</h4>
                            <p className="card-text"> {hotdog.npc_description}</p>
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
                    <div className="card text-danger bg-white mb-3 col-md-4" key={index}>
                        <div className="card-header">
                            <h5>{burger.trap_name}</h5>
                        </div>
                        <div className="card-body">
                            <p className="card-text">Trap Type: {burger.trap_type}</p>
                            <p className="card-text">Seen DC: {burger.trap_seen_dc}</p>
                            <p className="card-text">Disarm DC: {burger.trap_disarm_dc}</p>
                            <p className="card-text">Damage: d{burger.trap_damage_die}</p>
                            <h6 className="card-text border-bottom">Description</h6>
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
                    <div className="card text-danger bg-white mb-3 col-md-4" key={index}>
                        <div className="card-header">
                            <h5>{taco.loot_name}</h5>
                        </div>
                        <div className="card-body">
                            <h6>Value</h6>
                            <p className="card-text ml-2">{taco.loot_value} GP</p>
                            <h6 className="border-bottom">Description</h6>
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