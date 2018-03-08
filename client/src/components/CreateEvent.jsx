import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

import CreateLocation from "./CreateLocation";
import CreateNPC from "./CreateNPC";
import CreateTrap from "./CreateTrap";
import CreateTreasure from "./CreateTreasure";

export default class CreateCampaign extends Component {
    constructor(props) {
        super(props);

        // this.state = {
        //     eventName: "",
        //     eventDescription: "",
        //     eventLocation: "",

        //     locationName: "",
        //     locationDescription: "",
        //     locationLore: "",
            
        //     npcName: "",
        //     npcSize: "",
        //     npcAlignment: "",
        //     npcArmor: 0,
        //     npcHitPoints: 0,
        //     npcSpeed: 0,
        //     npcFlySpeed: 0,
        //     npcClimbSpeed: 0,
        //     npcStrength: 0,
        //     npcDexterity: 0,
        //     npcConstitution: 0,
        //     npcIntelligence: 0,
        //     npcWisdom: 0,
        //     npcCharisma: 0,
        //     npcStStrength: 0,
        //     npcStDexterity: 0,
        //     npcStConstitution: 0,
        //     npcStIntelligence: 0,
        //     npcStWisdom: 0,
        //     npcStCharisma: 0,
        //     npcSkills: "",
        //     npcDamageImmunity: "",
        //     npcConditionImmunity: "",
        //     npcSenses: "",
        //     npcPassivePerception: 0,
        //     npcChallengeRating: 0,
        //     npcExperienceReward: 0,
        //     npcDescription: "",
        //     npcActions: "",
        //     npcLegendaryActions: "",
        //     npcLairActions: "",

        //     trapName: "",
        //     trapDescription: "",
        //     trapType: "",
        //     trapDamage: 0,
        //     trapSpotDC: 0,
        //     trapDisarmDC: 0,

        //     treasureName: "",
        //     treasureDescription: "",
        //     treasureValue: 0

        // }
    }

    render() {
        return (
            <Fragment>
                <div className="container-fluid border-bottom border-dark p-5">
                    <div className='container-fluid d-flex ' >
                        <h2 className="display-6 border-bottom border-dark">Create a New Event</h2>
                    </div>
                    <div className="d-flex flex-column">
                        <div className="p-2 text-left">Name of Event:</div>
                        <textarea onChange={(event) => { this.updateTitle(event.target.value) }}
                            className="form-control p-1 m-2"
                            id="exampleFormControlTextarea1"
                            rows="1"
                        />
                        <div className="p-2 text-left">Short Description:</div>
                        <textarea onChange={(event) => { this.updateTitle(event.target.value) }}
                            className="form-control p-1 m-2"
                            id="exampleFormControlTextarea1"
                            rows="3"
                        />
                        <div className="p-2 text-left">Location</div>
                        <select className="form-control p-1 m-2" id="event-select-locations-input">
                            <option>The Tavern</option>
                        </select>

                        {/* Create Location */}

                        {/* <!-- Button trigger for Locations modal --> */}
                        <button type="button" className="btn btn-danger m-5" data-toggle="modal" data-target="#create-location">
                            Create Location
                        </button>

                        {/* <!-- Locations Modal --> */}
                        <div className="modal fade" id="create-location" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                            <div className="modal-dialog modal-lg" role="document">
                                <div className="modal-content bg-danger text-light">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLongTitle">Create a Location</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <div className="container-fluid">

                                            <div className="form-group row">
                                                <label className="col-2 col-form-label text-light">Name</label>
                                                <div className="col-10">
                                                    <input className="form-control" type="text" id="location-name-input" />
                                                </div>
                                            </div>

                                            <div className="form-group row">
                                                <label className="col-2 col-form-label text-light">Visual Description</label>
                                                <div className="col-10">
                                                    <input className="form-control" type="text" id="location-description-input" />
                                                </div>
                                            </div>

                                            <div className="form-group row">
                                                <label className="col-2 col-form-label text-light">Lore</label>
                                                <div className="col-10">
                                                    <input className="form-control" type="text" id="location-lore-input" />
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
                        {/* <CreateLocation /> */}

                    </div>
                </div>

                <div className="container-fluid d-flex justify-content-around p-5 mb-1">

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
                                                    <input className="form-control" type="text" id="npc-name-input" />
                                                </div>
                                            </div>

                                            <div className="form-group row">
                                                <label className="col-2 col-form-label text-light">Size</label>
                                                <div className="col-10">
                                                    <select className="form-control" id="npc-select-size-input">
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
                                                    <select className="form-control" id="npc-select-alignment-input">
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
                                                    <input className="form-control" type="number" id="npc-armor-input" />
                                                </div>
                                            </div>

                                            <div className="form-group row">
                                                <label className="col-2 col-form-label text-light">Hitpoints</label>
                                                <div className="col-10">
                                                    <input className="form-control" type="number" id="npc-hitpoints-input" />
                                                </div>
                                            </div>

                                            <div className="form-group row">
                                                <label className="col-2 col-form-label text-light">Speed</label>
                                                <div className="col-10">
                                                    <input className="form-control" type="number" id="npc-speed-input" />
                                                </div>
                                            </div>

                                            <div className="form-group row">
                                                <label className="col-2 col-form-label text-light">Fly Speed</label>
                                                <div className="col-10">
                                                    <input className="form-control" type="number" id="npc-flySpeed-input" />
                                                </div>
                                            </div>

                                            <div className="form-group row">
                                                <label className="col-2 col-form-label text-light">Climb Speed</label>
                                                <div className="col-10">
                                                    <input className="form-control" type="number" id="npc-climbSpeed-input" />
                                                </div>
                                            </div>

                                            <div className="form-group row">
                                                <label className="col-2 col-form-label text-light">Strength</label>
                                                <div className="col-10">
                                                    <input className="form-control" type="number" id="npc-strength-input" />
                                                </div>
                                            </div>

                                            <div className="form-group row">
                                                <label className="col-2 col-form-label text-light">Dexterity</label>
                                                <div className="col-10">
                                                    <input className="form-control" type="number" id="npc-dexterity-input" />
                                                </div>
                                            </div>

                                            <div className="form-group row">
                                                <label className="col-2 col-form-label text-light">Constitution</label>
                                                <div className="col-10">
                                                    <input className="form-control" type="number" id="npc-constitution-input" />
                                                </div>
                                            </div>

                                            <div className="form-group row">
                                                <label className="col-2 col-form-label text-light">Intelligence</label>
                                                <div className="col-10">
                                                    <input className="form-control" type="number" id="npc-intelligence-input" />
                                                </div>
                                            </div>

                                            <div className="form-group row">
                                                <label className="col-2 col-form-label text-light">Wisdom</label>
                                                <div className="col-10">
                                                    <input className="form-control" type="number" id="npc-wisdom-input" />
                                                </div>
                                            </div>

                                            <div className="form-group row">
                                                <label className="col-2 col-form-label text-light">Charisma</label>
                                                <div className="col-10">
                                                    <input className="form-control" type="number" id="npc-charisma-input" />
                                                </div>
                                            </div>

                                            <div className="form-group row">
                                                <label className="col-2 col-form-label text-light">Strength</label>
                                                <div className="col-10">
                                                    <input className="form-control" type="number" id="npc-saving-strength-input" />
                                                </div>
                                            </div>

                                            <div className="form-group row">
                                                <label className="col-2 col-form-label text-light">Dexterity</label>
                                                <div className="col-10">
                                                    <input className="form-control" type="number" id="npc-saving-dexterity-input" />
                                                </div>
                                            </div>

                                            <div className="form-group row">
                                                <label className="col-2 col-form-label text-light">Constitution</label>
                                                <div className="col-10">
                                                    <input className="form-control" type="number" id="npc-saving-constitution-input" />
                                                </div>
                                            </div>

                                            <div className="form-group row">
                                                <label className="col-2 col-form-label text-light">Intelligence</label>
                                                <div className="col-10">
                                                    <input className="form-control" type="number" id="npc-saving-intelligence-input" />
                                                </div>
                                            </div>

                                            <div className="form-group row">
                                                <label className="col-2 col-form-label text-light">Wisdom</label>
                                                <div className="col-10">
                                                    <input className="form-control" type="number" id="npc-saving-wisdom-input" />
                                                </div>
                                            </div>

                                            <div className="form-group row">
                                                <label className="col-2 col-form-label text-light">Charisma</label>
                                                <div className="col-10">
                                                    <input className="form-control" type="number" id="npc-saving-charisma-input" />
                                                </div>
                                            </div>

                                            <div className="form-group row">
                                                <label className="col-2 col-form-label text-light">Skills</label>
                                                <div className="col-10">
                                                    <input className="form-control" type="text" id="npc-skills-input" />
                                                </div>
                                            </div>

                                            <div className="form-group row">
                                                <label className="col-2 col-form-label text-light">Damage Immunity</label>
                                                <div className="col-10">
                                                    <input className="form-control" type="text" id="npc-damageImmunity-input" />
                                                </div>
                                            </div>

                                            <div className="form-group row">
                                                <label className="col-2 col-form-label text-light">Condition Immunity</label>
                                                <div className="col-10">
                                                    <input className="form-control" type="text" id="npc-conditionImmunity-input" />
                                                </div>
                                            </div>

                                            <div className="form-group row">
                                                <label className="col-2 col-form-label text-light">Senses</label>
                                                <div className="col-10">
                                                    <input className="form-control" type="text" id="npc-senses-input" />
                                                </div>
                                            </div>

                                            <div className="form-group row">
                                                <label className="col-2 col-form-label text-light">Passive Perception</label>
                                                <div className="col-10">
                                                    <input className="form-control" type="number" id="npc-passivePerception-input" />
                                                </div>
                                            </div>

                                            <div className="form-group row">
                                                <label className="col-2 col-form-label text-light">Challenge Rating</label>
                                                <div className="col-10">
                                                    <input className="form-control" type="number" id="npc-challengeRating-input" />
                                                </div>
                                            </div>

                                            <div className="form-group row">
                                                <label className="col-2 col-form-label text-light">Experience Reward</label>
                                                <div className="col-10">
                                                    <input className="form-control" type="number" id="npc-experienceReward-input" />
                                                </div>
                                            </div>

                                            <div className="form-group row">
                                                <label className="col-2 col-form-label text-light">Description</label>
                                                <div className="col-10">
                                                    <input className="form-control" type="text" id="npc-description-input" />
                                                </div>
                                            </div>

                                            <div className="form-group row">
                                                <label className="col-2 col-form-label text-light">Actions</label>
                                                <div className="col-10">
                                                    <input className="form-control" type="text" id="npc-actions-input" />
                                                </div>
                                            </div>

                                            <div className="form-group row">
                                                <label className="col-2 col-form-label text-light">Legendary Actions</label>
                                                <div className="col-10">
                                                    <input className="form-control" type="text" id="npc-legendaryActions-input" />
                                                </div>
                                            </div>

                                            <div className="form-group row">
                                                <label className="col-2 col-form-label text-light">Lair Actions</label>
                                                <div className="col-10">
                                                    <input className="form-control" type="text" id="npc-lairActions-input" />
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
                                                    <input className="form-control" type="text" id="trap-name-input" />
                                                </div>
                                            </div>

                                            <div className="form-group row">
                                                <label className="col-2 col-form-label text-light">Description</label>
                                                <div className="col-10">
                                                    <input className="form-control" type="text" id="trap-description-input" />
                                                </div>
                                            </div>

                                            <div className="form-group row">
                                                <label className="col-2 col-form-label text-light">Trap Type</label>
                                                <div className="col-10">
                                                    <select className="form-control" id="trap-select-trap-input">
                                                        <option>Mechanical</option>
                                                        <option>Magical</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="form-group row">
                                                <label className="col-2 col-form-label text-light">Damage</label>
                                                <div className="col-10">
                                                    <input className="form-control" type="number" id="trap-damage-input" />
                                                </div>
                                            </div>

                                            <div className="form-group row">
                                                <label className="col-2 col-form-label text-light">Spot DC</label>
                                                <div className="col-10">
                                                    <input className="form-control" type="number" id="trap-spotDC-input" />
                                                </div>
                                            </div>

                                            <div className="form-group row">
                                                <label className="col-2 col-form-label text-light">Disarm DC</label>
                                                <div className="col-10">
                                                    <input className="form-control" type="number" id="trap-disarmDC-input" />
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
                                                    <input className="form-control" type="text" id="treasure-name-input" />
                                                </div>
                                            </div>

                                            <div className="form-group row">
                                                <label className="col-2 col-form-label text-light">Description</label>
                                                <div className="col-10">
                                                    <input className="form-control" type="text" id="treasure-description-input" />
                                                </div>
                                            </div>

                                            <div className="form-group row">
                                                <label className="col-2 col-form-label text-light">Value</label>
                                                <div className="col-10">
                                                    <input className="form-control" type="number" id="treasure-value-input" />
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
                <div className="container-fluid d-flex justify-content-center">
                    <Link to="/Storyboard/1" className="btn btn-danger btn-lg m-1">
                        DONE
                    </Link>
                    <Link to="/Storyboard/1" className="btn btn-danger btn-lg m-1">
                        CANCEL
                    </Link>
                </div>
            </Fragment>
        );
    }
}