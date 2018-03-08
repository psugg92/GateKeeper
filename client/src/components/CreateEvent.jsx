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

        this.state = {
            eventName: "",
            eventDescription: "",
            eventLocation: "",

            locationName: "",
            locationDescription: "",
            locationLore: "",
            
            npcName: "",
            npcSize: "",
            npcAlignment: "",
            npcArmor: 0,
            npcHitPoints: 0,
            npcSpeed: 0,
            npcFlySpeed: 0,
            npcClimbSpeed: 0,
            npcStrength: 0,
            npcDexterity: 0,
            npcConstitution: 0,
            npcIntelligence: 0,
            npcWisdom: 0,
            npcCharisma: 0,
            npcStStrength: 0,
            npcStDexterity: 0,
            npcStConstitution: 0,
            npcStIntelligence: 0,
            npcStWisdom: 0,
            npcStCharisma: 0,
            npcSkills: "",
            npcDamageImmunity: "",
            npcConditionImmunity: "",
            npcSenses: "",
            npcPassivePerception: 0,
            npcChallengeRating: 0,
            npcExperienceReward: 0,
            npcDescription: "",
            npcActions: "",
            npcLegendaryActions: "",
            npcLairActions: "",

            trapName: "",
            trapDescription: "",
            trapType: "",
            trapDamage: 0,
            trapSpotDC: 0,
            trapDisarmDC: 0,

            treasureName: "",
            treasureDescription: "",
            treasureValue: 0

        }
    }

    // Update Event Methods
    updateEventName(value) {
        this.setState({ eventName: value });
        console.log({ eventName: value });
    }
    updateEventDescription(value) {
        this.setState({ eventDescription: value });
        console.log({ eventDescription: value });
    }
    updateEventLocation(value) {
        this.setState({ eventLocation: value });
        console.log({ eventLocation: value });
    }

    // Update Location Methods
    updateLocationName(value) {
        this.setState({ locationName: value });
        console.log({ locationName: value });
    }
    updateLocationDescription(value) {
        this.setState({ locationDescription: value });
        console.log({ locationDescription: value });
    }
    updateLocationLore(value) {
        this.setState({ locationLore: value });
        console.log({ locationLore: value });
    }

    // Update NPC Methods
    updateNpcName(value) {
        this.setState({ npcName: value });
        console.log({ npcName: value });
    }
    updateNpcSize(value) {
        this.setState({ npcSize: value });
        console.log({ npcSize: value });
    }
    updateNpcAlignment(value) {
        this.setState({ npcAlignment: value });
        console.log({ npcAlignment: value });
    }
    updateNpcArmor(value) {
        this.setState({ npcArmor: value });
        console.log({ npcArmor: value });
    }
    updateNpcHitPoints(value) {
        this.setState({ npcHitPoints: value });
        console.log({ npcHitPoints: value });
    }
    updateNpcSpeed(value) {
        this.setState({ npcSpeed: value });
        console.log({ npcSpeed: value });
    }
    updateNpcFlySpeed(value) {
        this.setState({ npcFlySpeed: value });
        console.log({ npcFlySpeed: value });
    }
    updateNpcClimbSpeed(value) {
        this.setState({ npcClimbSpeed: value });
        console.log({ npcClimbSpeed: value });
    }
    updateNpcStrength(value) {
        this.setState({ npcStrength: value });
        console.log({ npcStrength: value });
    }
    updateNpcDexterity(value) {
        this.setState({ npcDexterity: value });
        console.log({ npcDexterity: value });
    }
    updateNpcConstitution(value) {
        this.setState({ npcConstitution: value });
        console.log({ npcConstitution: value });
    }
    updateNpcIntelligence(value) {
        this.setState({ npcIntelligence: value });
        console.log({ npcIntelligence: value });
    }
    updateNpcWisdom(value) {
        this.setState({ npcWisdom: value });
        console.log({ npcWisdom: value });
    }
    updateNpcCharisma(value) {
        this.setState({ npcCharisma: value });
        console.log({ npcCharisma: value });
    }
    updateNpcStStrength(value) {
        this.setState({ npcStStrength: value });
        console.log({ npcStStrength: value });
    }
    updateNpcStDexterity(value) {
        this.setState({ npcStDexterity: value });
        console.log({ npcStDexterity: value });
    }
    updateNpcStConstitution(value) {
        this.setState({ npcStConstitution: value });
        console.log({ npcStConstitution: value });
    }
    updateNpcStIntelligence(value) {
        this.setState({ npcStIntelligence: value });
        console.log({ npcStIntelligence: value });
    }
    updateNpcStWisdom(value) {
        this.setState({ npcStWisdom: value });
        console.log({ npcStWisdom: value });
    }
    updateNpcStCharisma(value) {
        this.setState({ npcStCharisma: value });
        console.log({ npcStCharisma: value });
    }
    updateNpcSkills(value) {
        this.setState({ npcSkills: value });
        console.log({ npcSkills: value });
    }
    updateNpcDamageImmunity(value) {
        this.setState({ npcDamageImmunity: value });
        console.log({ npcDamageImmunity: value });
    }
    updateNpcConditionImmunity(value) {
        this.setState({ npcConditionImmunity: value });
        console.log({ npcConditionImmunity: value });
    }
    updateNpcSenses(value) {
        this.setState({ npcSenses: value });
        console.log({ npcSenses: value });
    }
    updateNpcPassivePerception(value) {
        this.setState({ npcPassivePerception: value });
        console.log({ npcPassivePerception: value });
    }
    updateNpcChallengeRating(value) {
        this.setState({ npcChallengeRating: value });
        console.log({ npcChallengeRating: value });
    }
    updateNpcExperienceReward(value) {
        this.setState({ npcExperienceReward: value });
        console.log({ npcExperienceReward: value });
    }
    updateNpcDescription(value) {
        this.setState({ npcDescription: value });
        console.log({ npcDescription: value });
    }
    updateNpcActions(value) {
        this.setState({ npcActions: value });
        console.log({ npcActions: value });
    }
    updateNpcLegendaryActions(value) {
        this.setState({ npcLegendaryActions: value });
        console.log({ npcLegendaryActions: value });
    }
    updateNpcLairActions(value) {
        this.setState({ npcLairActions: value });
        console.log({ npcLairActions: value });
    }

    // Update Trap Methods
    updateTrapName(value) {
        this.setState({ trapName: value });
        console.log({ trapName: value });
    }
    updateTrapDescription(value) {
        this.setState({ trapDescription: value });
        console.log({ trapDescription: value });
    }
    updateTrapType(value) {
        this.setState({ trapType: value });
        console.log({ trapType: value });
    }
    updateTrapDamage(value) {
        this.setState({ trapDamage: value });
        console.log({ trapDamage: value });
    }
    updateTrapSpotDC(value) {
        this.setState({ trapSpotDC: value });
        console.log({ trapSpotDC: value });
    }
    updateTrapDisarmDC(value) {
        this.setState({ trapDisarmDC: value });
        console.log({ trapDisarmDC: value });
    }

    // Update Treasure Methods
    updateTreasureName(value) {
        this.setState({ treasureName: value });
        console.log({ treasureName: value });
    }
    updateTreasureDescription(value) {
        this.setState({ treasureDescription: value });
        console.log({ treasureDescription: value });
    }
    updateTreasureValue(value) {
        this.setState({ treasureValue: value });
        console.log({ treasureValue: value });
    }

    // This creates a new event node
    createEvent() {
        eventsService.insert({
            eventName: this.state.eventName,
            eventDescription: this.state.eventDescription,
            eventLocation: this.state.eventLocation,

            locationName: this.state.locationName,
            locationDescription: this.state.locationDescription,
            locationLore: this.state.locationLore,

            npcName: this.state.npcName,
            npcSize: this.state.npcSize,
            npcAlignment: this.state.npcAlignment,
            npcArmor: this.state.npcArmor,
            npcHitPoints: this.state.npcHitPoints,
            npcSpeed: this.state.npcSpeed,
            npcFlySpeed: this.state.npcFlySpeed,
            npcClimbSpeed: this.state.npcClimbSpeed,
            npcStrength: this.state.npcStrength,
            npcDexterity: this.state.npcDexterity,
            npcConstitution: this.state.npcConstitution,
            npcIntelligence: this.state.npcIntelligence,
            npcWisdom: this.state.npcWisdom,
            npcCharisma: this.state.npcCharisma,
            npcStStrength: this.state.npcStStrength,
            npcStDexterity: this.state.npcStDexterity,
            npcStConstitution: this.state.npcStConstitution,
            npcStIntelligence: this.state.npcStIntelligence,
            npcStWisdom: this.state.npcStWisdom,
            npcStCharisma: this.state.npcStCharisma,
            npcSkills: this.state.npcSkills,
            npcDamageImmunity: this.state.npcDamageImmunity,
            npcConditionImmunity: this.state.npcConditionImmunity,
            npcSenses: this.state.npcSenses,
            npcPassivePerception: this.state.npcPassivePerception,
            npcChallengeRating: this.state.npcChallengeRating,
            npcExperienceReward: this.state.npcExperienceReward,
            npcDescription: this.state.npcDescription,
            npcActions: this.state.npcActions,
            npcLegendaryActions: this.state.npcLegendaryActions,
            npcLairActions: this.state.npcLairActions,

            trapName: this.state.trapName,
            trapDescription: this.state.trapDescription,
            trapType: this.state.trapType,
            trapDamage: this.state.trapDamage,
            trapSpotDC: this.state.trapSpotDC,
            trapDisarmDC: this.state.trapDisarmDC,

            treasureName: this.state.treasureName,
            treasureDescription: this.state.treasureDescription,
            treasureValue: this.state.treasureValue,
        })
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
                        <textarea onChange={(event) => { this.updateEventName(event.target.value) }}
                            className="form-control p-1 m-2"
                            id="exampleFormControlTextarea1"
                            rows="1"
                        />
                        <div className="p-2 text-left">Short Description:</div>
                        <textarea onChange={(event) => { this.updateEventDescription(event.target.value) }}
                            className="form-control p-1 m-2"
                            id="exampleFormControlTextarea1"
                            rows="3"
                        />
                        <div className="p-2 text-left">Location</div>
                        <select className="form-control p-1 m-2" id="event-select-locations-input" onChange={(event) => { this.updateEventLocation(event.target.value) }}>
                            <option>The Tavern</option>
                        </select>

                        {/* Create Location */}

                        {/* <!-- Button trigger for Locations modal --> */}
                        <button type="button" className="btn btn-danger m-5" data-toggle="modal" data-target="#create-location" >
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
                                                    <input className="form-control" type="text" id="location-name-input" onChange={(event) => { this.updateLocationName(event.target.value) }} />
                                                </div>
                                            </div>

                                            <div className="form-group row">
                                                <label className="col-2 col-form-label text-light">Visual Description</label>
                                                <div className="col-10">
                                                    <input className="form-control" type="text" id="location-description-input" onChange={(event) => { this.updateLocationDescription(event.target.value) }} />
                                                </div>
                                            </div>

                                            <div className="form-group row">
                                                <label className="col-2 col-form-label text-light">Lore</label>
                                                <div className="col-10">
                                                    <input className="form-control" type="text" id="location-lore-input" onChange={(event) => { this.updateLocationLore(event.target.value) }} />
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
                                                    <input className="form-control" type="text" id="npc-skills-input"  onChange={(event) => { this.updateNpcSkills(event.target.value) }} />
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