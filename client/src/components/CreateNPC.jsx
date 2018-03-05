import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

export default class CreateNPC extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                {/* <!-- Button trigger for NPC modal --> */}
                <button type="button" className="btn btn-danger" data-toggle="modal" data-target="#create-NPC">
                    Create NPC
                </button>

                {/* <!-- NPC Modal --> */}
                <div className="modal fade" id="create-NPC" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                    <div className="modal-dialog modal-lg" role="document">
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
                                            <input className="form-control" type="number"  id="npc-armor-input" />
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label className="col-2 col-form-label text-light">Hitpoints</label>
                                        <div className="col-10">
                                            <input className="form-control" type="number"  id="npc-hitpoints-input" />
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label className="col-2 col-form-label text-light">Speed</label>
                                        <div className="col-10">
                                            <input className="form-control" type="number"  id="npc-speed-input" />
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label className="col-2 col-form-label text-light">Fly Speed</label>
                                        <div className="col-10">
                                            <input className="form-control" type="number"  id="npc-flySpeed-input" />
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label className="col-2 col-form-label text-light">Climb Speed</label>
                                        <div className="col-10">
                                            <input className="form-control" type="number"  id="npc-climbSpeed-input" />
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label className="col-2 col-form-label text-light">Strength</label>
                                        <div className="col-10">
                                            <input className="form-control" type="number"  id="npc-strength-input" />
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label className="col-2 col-form-label text-light">Dexterity</label>
                                        <div className="col-10">
                                            <input className="form-control" type="number"  id="npc-dexterity-input" />
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label className="col-2 col-form-label text-light">Constitution</label>
                                        <div className="col-10">
                                            <input className="form-control" type="number"  id="npc-constitution-input" />
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label className="col-2 col-form-label text-light">Intelligence</label>
                                        <div className="col-10">
                                            <input className="form-control" type="number"  id="npc-intelligence-input" />
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label className="col-2 col-form-label text-light">Wisdom</label>
                                        <div className="col-10">
                                            <input className="form-control" type="number"  id="npc-wisdom-input" />
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label className="col-2 col-form-label text-light">Charisma</label>
                                        <div className="col-10">
                                            <input className="form-control" type="number"  id="npc-charisma-input" />
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label className="col-2 col-form-label text-light">Strength</label>
                                        <div className="col-10">
                                            <input className="form-control" type="number"  id="npc-saving-strength-input" />
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label className="col-2 col-form-label text-light">Dexterity</label>
                                        <div className="col-10">
                                            <input className="form-control" type="number"  id="npc-saving-dexterity-input" />
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label className="col-2 col-form-label text-light">Constitution</label>
                                        <div className="col-10">
                                            <input className="form-control" type="number"  id="npc-saving-constitution-input" />
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label className="col-2 col-form-label text-light">Intelligence</label>
                                        <div className="col-10">
                                            <input className="form-control" type="number"  id="npc-saving-intelligence-input" />
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label className="col-2 col-form-label text-light">Wisdom</label>
                                        <div className="col-10">
                                            <input className="form-control" type="number"  id="npc-saving-wisdom-input" />
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label className="col-2 col-form-label text-light">Charisma</label>
                                        <div className="col-10">
                                            <input className="form-control" type="text" id="npc-saving-charisma-input" />
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
                                            <input className="form-control" type="number"  id="npc-passivePerception-input" />
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label className="col-2 col-form-label text-light">Challenge Rating</label>
                                        <div className="col-10">
                                            <input className="form-control" type="number"  id="npc-challengeRating-input" />
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label className="col-2 col-form-label text-light">Experience Reward</label>
                                        <div className="col-10">
                                            <input className="form-control" type="number"  id="npc-experienceReward-input" />
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
            </Fragment>
        )
    }
}