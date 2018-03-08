import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
// import * as eventsService from "../services/events";

import CreateLocation from "./CreateLocation";
import CreateNPC from "./CreateNPC";
import CreateTrap from "./CreateTrap";
import CreateTreasure from "./CreateTreasure";

export default class CreateEvent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                <div className="container-fluid d-flex justify-content-start p-5">
                    <h2 className="display-6 border-bottom border-dark">Create a New Event</h2>
                </div>
                <div className="container-fluid text-left">
                    {/* Create NPC */}
                    <div className="col-sm-3">
                        <h3>NPCs</h3>

                        {/* <!-- Button trigger for NPC modal --> */}
                        <button type="button" className="btn btn-danger" data-toggle="modal" data-target="#create-NPC">
                            Create NPC
                        </button>

                        {/* <!-- NPC Modal --> */}
                        <div className="modal fade" id="create-NPC" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                            <div className="modal-dialog modal-xl" role="document">
                                <div className="modal-content bg-danger text-light">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLongTitle">Create an NPC</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <div className="container-fluid">


                                            <div className="form-group row">
                                                <label className="col-2 col-form-label text-light">Name</label>
                                                <div className="col-10">
                                                    <input className="form-control" type="text" id="npc-name-input" onChange={(event) => { this.updateNpcName(event.target.value) }} />
                                                </div>
                                            </div>

                                            <div className="form-group row">
                                                <label className="col-2 col-form-label text-light">Size</label>
                                                <div className="col-10">
                                                    <select className="form-control" id="npc-select-size-input" onChange={(event) => { this.updateNpcSize(event.target.value) }}>
                                                        <option>Tiny ( less than 2 ft.)</option>
                                                        <option>Small (3 - 5 ft.)</option>
                                                        <option>Medium (5 - 9 ft.)</option>
                                                        <option>Large (10 - 14 ft.)</option>
                                                        <option>Huge (15 - 19 ft.</option>
                                                        <option>Gargantuan (20 ft. or larger)</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="form-group row">
                                                <label className="col-2 col-form-label text-light">Alignment</label>
                                                <div className="col-10">
                                                    <select className="form-control" id="npc-select-alignment-input" onChange={(event) => { this.updateNpcAlignment(event.target.value) }}>
                                                        <option>Lawful Good</option>
                                                        <option>Neutral Good</option>
                                                        <option>Chaotic Good</option>
                                                        <option>Lawful Neutral</option>
                                                        <option>True Neutral</option>
                                                        <option>Chaotic Neutral</option>
                                                        <option>Lawful Evil</option>
                                                        <option>Neutral Evil</option>
                                                        <option>Chaotic Evil</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="form-group row">
                                                <label className="col-2 col-form-label text-light">Armor</label>
                                                <div className="col-10">
                                                    <input className="form-control" type="number" id="npc-armor-input" onChange={(event) => { this.updateNpcArmor(event.target.value) }} />
                                                </div>
                                            </div>

                                            <div className="form-group row">
                                                <label className="col-2 col-form-label text-light">Hitpoints</label>
                                                <div className="col-10">
                                                    <input className="form-control" type="number" id="npc-hitpoints-input" onChange={(event) => { this.updateNpcHitPoints(event.target.value) }} />
                                                </div>
                                            </div>

                                            <div className="form-group row">
                                                <label className="col-2 col-form-label text-light">Speed</label>
                                                <div className="col-10">
                                                    <input className="form-control" type="number" id="npc-speed-input" onChange={(event) => { this.updateNpcSpeed(event.target.value) }} />
                                                </div>
                                            </div>

                                            <div className="form-group row">
                                                <label className="col-2 col-form-label text-light">Fly Speed</label>
                                                <div className="col-10">
                                                    <input className="form-control" type="number" id="npc-flySpeed-input" onChange={(event) => { this.updateNpcFlySpeed(event.target.value) }} />
                                                </div>
                                            </div>

                                            <div className="form-group row">
                                                <label className="col-2 col-form-label text-light">Climb Speed</label>
                                                <div className="col-10">
                                                    <input className="form-control" type="number" id="npc-climbSpeed-input" onChange={(event) => { this.updateNpcClimbSpeed(event.target.value) }} />
                                                </div>
                                            </div>

                                            <div className="form-group row">
                                                <label className="col-2 col-form-label text-light">Strength</label>
                                                <div className="col-10">
                                                    <input className="form-control" type="number" id="npc-strength-input" onChange={(event) => { this.updateNpcStrength(event.target.value) }} />
                                                </div>
                                            </div>

                                            <div className="form-group row">
                                                <label className="col-2 col-form-label text-light">Dexterity</label>
                                                <div className="col-10">
                                                    <input className="form-control" type="number" id="npc-dexterity-input" onChange={(event) => { this.updateNpcDexterity(event.target.value) }} />
                                                </div>
                                            </div>

                                            <div className="form-group row">
                                                <label className="col-2 col-form-label text-light">Constitution</label>
                                                <div className="col-10">
                                                    <input className="form-control" type="number" id="npc-constitution-input" onChange={(event) => { this.updateNpcConstitution(event.target.value) }} />
                                                </div>
                                            </div>

                                            <div className="form-group row">
                                                <label className="col-2 col-form-label text-light">Intelligence</label>
                                                <div className="col-10">
                                                    <input className="form-control" type="number" id="npc-intelligence-input" onChange={(event) => { this.updateNpcIntelligence(event.target.value) }} />
                                                </div>
                                            </div>

                                            <div className="form-group row">
                                                <label className="col-2 col-form-label text-light">Wisdom</label>
                                                <div className="col-10">
                                                    <input className="form-control" type="number" id="npc-wisdom-input" onChange={(event) => { this.updateNpcWisdom(event.target.value) }} />
                                                </div>
                                            </div>

                                            <div className="form-group row">
                                                <label className="col-2 col-form-label text-light">Charisma</label>
                                                <div className="col-10">
                                                    <input className="form-control" type="number" id="npc-charisma-input" onChange={(event) => { this.updateNpcCharisma(event.target.value) }} />
                                                </div>
                                            </div>

                                            <div className="form-group row">
                                                <label className="col-2 col-form-label text-light">Strength ST</label>
                                                <div className="col-10">
                                                    <input className="form-control" type="number" id="npc-saving-strength-input" onChange={(event) => { this.updateNpcStStrength(event.target.value) }} />
                                                </div>
                                            </div>

                                            <div className="form-group row">
                                                <label className="col-2 col-form-label text-light">Dexterity ST</label>
                                                <div className="col-10">
                                                    <input className="form-control" type="number" id="npc-saving-dexterity-input" onChange={(event) => { this.updateNpcStDexterity(event.target.value) }} />
                                                </div>
                                            </div>

                                            <div className="form-group row">
                                                <label className="col-2 col-form-label text-light">Constitution ST</label>
                                                <div className="col-10">
                                                    <input className="form-control" type="number" id="npc-saving-constitution-input" onChange={(event) => { this.updateNpcStConstitution(event.target.value) }} />
                                                </div>
                                            </div>

                                            <div className="form-group row">
                                                <label className="col-2 col-form-label text-light">Intelligence ST</label>
                                                <div className="col-10">
                                                    <input className="form-control" type="number" id="npc-saving-intelligence-input" onChange={(event) => { this.updateNpcStIntelligence(event.target.value) }} />
                                                </div>
                                            </div>

                                            <div className="form-group row">
                                                <label className="col-2 col-form-label text-light">Wisdom ST</label>
                                                <div className="col-10">
                                                    <input className="form-control" type="number" id="npc-saving-wisdom-input" onChange={(event) => { this.updateNpcStWisdom(event.target.value) }} />
                                                </div>
                                            </div>

                                            <div className="form-group row">
                                                <label className="col-2 col-form-label text-light">Charisma ST</label>
                                                <div className="col-10">
                                                    <input className="form-control" type="number" id="npc-saving-charisma-input" onChange={(event) => { this.updateNpcStCharisma(event.target.value) }} />
                                                </div>
                                            </div>

                                            <div className="form-group row">
                                                <label className="col-2 col-form-label text-light">Skills</label>
                                                <div className="col-10">
                                                    <input className="form-control" type="text" id="npc-skills-input" onChange={(event) => { this.updateNpcSkills(event.target.value) }} />
                                                </div>
                                            </div>

                                            <div className="form-group row">
                                                <label className="col-2 col-form-label text-light">Damage Immunity</label>
                                                <div className="col-10">
                                                    <input className="form-control" type="text" id="npc-damageImmunity-input" onChange={(event) => { this.updateNpcDamageImmunity(event.target.value) }} />
                                                </div>
                                            </div>

                                            <div className="form-group row">
                                                <label className="col-2 col-form-label text-light">Condition Immunity</label>
                                                <div className="col-10">
                                                    <input className="form-control" type="text" id="npc-conditionImmunity-input" onChange={(event) => { this.updateNpcConditionImmunity(event.target.value) }} />
                                                </div>
                                            </div>

                                            <div className="form-group row">
                                                <label className="col-2 col-form-label text-light">Senses</label>
                                                <div className="col-10">
                                                    <input className="form-control" type="text" id="npc-senses-input" onChange={(event) => { this.updateNpcSenses(event.target.value) }} />
                                                </div>
                                            </div>

                                            <div className="form-group row">
                                                <label className="col-2 col-form-label text-light">Passive Perception</label>
                                                <div className="col-10">
                                                    <input className="form-control" type="number" id="npc-passivePerception-input" onChange={(event) => { this.updateNpcPassivePerception(event.target.value) }} />
                                                </div>
                                            </div>

                                            <div className="form-group row">
                                                <label className="col-2 col-form-label text-light">Challenge Rating</label>
                                                <div className="col-10">
                                                    <input className="form-control" type="number" id="npc-challengeRating-input" onChange={(event) => { this.updateNpcChallengeRating(event.target.value) }} />
                                                </div>
                                            </div>

                                            <div className="form-group row">
                                                <label className="col-2 col-form-label text-light">Experience Reward</label>
                                                <div className="col-10">
                                                    <input className="form-control" type="number" id="npc-experienceReward-input" onChange={(event) => { this.updateNpcExperienceReward(event.target.value) }} />
                                                </div>
                                            </div>

                                            <div className="form-group row">
                                                <label className="col-2 col-form-label text-light">Description</label>
                                                <div className="col-10">
                                                    <input className="form-control" type="text" id="npc-description-input" onChange={(event) => { this.updateNpcDescription(event.target.value) }} />
                                                </div>
                                            </div>

                                            <div className="form-group row">
                                                <label className="col-2 col-form-label text-light">Actions</label>
                                                <div className="col-10">
                                                    <input className="form-control" type="text" id="npc-actions-input" onChange={(event) => { this.updateNpcActions(event.target.value) }} />
                                                </div>
                                            </div>

                                            <div className="form-group row">
                                                <label className="col-2 col-form-label text-light">Legendary Actions</label>
                                                <div className="col-10">
                                                    <input className="form-control" type="text" id="npc-legendaryActions-input" onChange={(event) => { this.updateNpcLegendaryActions(event.target.value) }} />
                                                </div>
                                            </div>

                                            <div className="form-group row">
                                                <label className="col-2 col-form-label text-light">Lair Actions</label>
                                                <div className="col-10">
                                                    <input className="form-control" type="text" id="npc-lairActions-input" onChange={(event) => { this.updateNpcLairActions(event.target.value) }} />
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                        <button type="button" className="btn btn-light">Save changes</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <CreateNPC /> */}
                    </div>

                    {/* Create Trap */}
                    <div className="col-sm-3">
                        <h3>Traps</h3>
                        {/* <!-- Button trigger for Traps modal --> */}
                        <button type="button" className="btn btn-danger" data-toggle="modal" data-target="#create-trap">
                            Create Trap
                        </button>

                        {/* <!-- Traps Modal --> */}
                        <div className="modal fade" id="create-trap" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                            <div className="modal-dialog modal-lg" role="document">
                                <div className="modal-content bg-danger text-light">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLongTitle">Create a Trap</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <div className="container-fluid">

                                            <div className="form-group row">
                                                <label className="col-2 col-form-label text-light">Name</label>
                                                <div className="col-10">
                                                    <input className="form-control" type="text" id="trap-name-input" onChange={(event) => { this.updateTrapName(event.target.value) }} />
                                                </div>
                                            </div>

                                            <div className="form-group row">
                                                <label className="col-2 col-form-label text-light">Description</label>
                                                <div className="col-10">
                                                    <input className="form-control" type="text" id="trap-description-input" onChange={(event) => { this.updateTrapDescription(event.target.value) }} />
                                                </div>
                                            </div>

                                            <div className="form-group row">
                                                <label className="col-2 col-form-label text-light">Trap Type</label>
                                                <div className="col-10">
                                                    <select className="form-control" id="trap-select-trap-input" onChange={(event) => { this.updateTrapType(event.target.value) }}>
                                                        <option>Mechanical</option>
                                                        <option>Magical</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="form-group row">
                                                <label className="col-2 col-form-label text-light">Damage</label>
                                                <div className="col-10">
                                                    <input className="form-control" type="number" id="trap-damage-input" onChange={(event) => { this.updateTrapDamage(event.target.value) }} />
                                                </div>
                                            </div>

                                            <div className="form-group row">
                                                <label className="col-2 col-form-label text-light">Spot DC</label>
                                                <div className="col-10">
                                                    <input className="form-control" type="number" id="trap-spotDC-input" onChange={(event) => { this.updateTrapSpotDC(event.target.value) }} />
                                                </div>
                                            </div>

                                            <div className="form-group row">
                                                <label className="col-2 col-form-label text-light">Disarm DC</label>
                                                <div className="col-10">
                                                    <input className="form-control" type="number" id="trap-disarmDC-input" onChange={(event) => { this.updateTrapDisarmDC(event.target.value) }} />
                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                        <button type="button" className="btn btn-light">Save changes</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <CreateTrap /> */}
                    </div>

                    {/* Create Treasure */}
                    <div className="col-sm-3">
                        <h3>Treasures</h3>
                        {/* <!-- Button trigger for Treasure modal --> */}
                        <button type="button" className="btn btn-danger" data-toggle="modal" data-target="#create-treasure">
                            Create Treasure
                        </button>

                        {/* <!-- Treasure Modal --> */}
                        <div className="modal fade" id="create-treasure" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                            <div className="modal-dialog modal-lg" role="document">
                                <div className="modal-content bg-danger text-light">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLongTitle">Create a Treasure</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <div className="container-fluid">

                                            <div className="form-group row">
                                                <label className="col-2 col-form-label text-light">Name</label>
                                                <div className="col-10">
                                                    <input className="form-control" type="text" id="treasure-name-input" onChange={(event) => { this.updateTreasureName(event.target.value) }} />
                                                </div>
                                            </div>

                                            <div className="form-group row">
                                                <label className="col-2 col-form-label text-light">Description</label>
                                                <div className="col-10">
                                                    <input className="form-control" type="text" id="treasure-description-input" onChange={(event) => { this.updateTreasureDescription(event.target.value) }} />
                                                </div>
                                            </div>

                                            <div className="form-group row">
                                                <label className="col-2 col-form-label text-light">Value</label>
                                                <div className="col-10">
                                                    <input className="form-control" type="number" id="treasure-value-input" onChange={(event) => { this.updateTreasureValue(event.target.value) }} />
                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                        <button type="button" className="btn btn-light">Save changes</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <CreateTreasure /> */}
                    </div>
                </div>
            </Fragment>
        )
    }
}
