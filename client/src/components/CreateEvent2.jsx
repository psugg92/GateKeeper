import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
// import * as eventsService from "../services/events";
import * as npcsService from "../services/npcs";
import * as trapsService from "../services/traps";
import * as treasuresService from "../services/treasures";
import * as nodeRefService from '../services/noderef';

import Header from "./Header";
import NpcMaker from "./NpcMaker";
import TrapMaker from "./TrapMaker";
import TreasureMaker from "./TreasureMaker";


export default class CreateEvent2 extends Component {
  constructor(props) {
    super(props);

    this.state = {

      npcArray: [],
      npcIdArray: [],
      npcId: 0,

      trapArray: [],
      trapIdArray: [],
      trapId: 0,

      treasureArray: [],
      treasureIdArray: [],
      treasureId: 0,

      npcName: null,
      npcSize: null,
      npcAlignment: null,
      npcArmor: null,
      npcHitPoints: null,
      npcSpeed: null,
      npcFlySpeed: null,
      npcClimbSpeed: null,
      npcStrength: null,
      npcDexterity: null,
      npcConstitution: null,
      npcIntelligence: null,
      npcWisdom: null,
      npcCharisma: null,
      npcStStrength: null,
      npcStDexterity: null,
      npcStConstitution: null,
      npcStIntelligence: null,
      npcStWisdom: null,
      npcStCharisma: null,
      npcSkills: null,
      npcDamageImmunity: null,
      npcConditionImmunity: null,
      npcSenses: null,
      npcPassivePerception: null,
      npcChallengeRating: null,
      npcExperienceReward: null,
      npcDescription: null,
      npcActions: null,
      npcLegendaryActions: null,
      npcLairActions: null,

      trapName: "",
      trapDescription: "",
      trapType: "",
      trapDamage: 0,
      trapSpotDC: 0,
      trapDisarmDC: 0,

      treasureName: "",
      treasureDescription: "",
      treasureValue: 0
    };
  }

  updateNpcArray(value) {
    let npcArrayCopy = this.state.npcArray;
    npcArrayCopy.push(value)
    this.setState({ npcArray: npcArrayCopy })
    console.log(this.state.npcArray)
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
  postNpc() {
    npcsService.postNpc({
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
      npcLairActions: this.state.npcLairActions
    });
  }

  componentWillMount() {
    this.getNpcList();
    this.getTrapList();
    this.getTreasureList();
  }

  postTrap() {
    trapsService.postTrap({
      trapName: this.state.trapName,
      trapDescription: this.state.trapDescription,
      trapType: this.state.trapType,
      trapDamage: this.state.trapDamage,
      trapSpotDC: this.state.trapSpotDC,
      trapDisarmDC: this.state.trapDisarmDC
    });
  }

  postTreasure() {
    treasuresService.postTreasure({
      treasureName: this.state.treasureName,
      treasureValue: this.state.treasureValue,
      treasureDescription: this.state.treasureDescription
    });
  }

  getNpcList() {
    npcsService.getNpcs()
      .then(data => {
        this.setState({ npcArray: data })
        console.log(data);
        console.log(this.state.npcArray)
      })
  }

  getTrapList() {
    trapsService.getTraps()
      .then(data => {
        this.setState({ trapArray: data })
        console.log(data);
        console.log(this.state.trapArray);
      })
  }

  getTreasureList() {
    treasuresService.getTreasures()
      .then(data => {
        this.setState({ treasureArray: data })
        console.log(data);
        console.log(this.state.treasureArray);
      })
  }

  addNpcId(id) {
    let arr = [...this.state.npcIdArray];
    arr.push(id)
    this.setState({ npcIdArray: arr })
    console.log("This is the array of NPC ID's ", this.state.npcIdArray);
  }

  removeNpcId(id) {
    let arr = [...this.state.npcIdArray];
    let index = arr.indexOf(id);
    arr.splice(index, 1);
    this.setState({ npcIdArray: arr });
  }

  addTrapId(id) {
    let arr = [...this.state.trapIdArray]
    arr.push(id)
    this.setState({ trapIdArray: arr })
    console.log("This is the array of Trap ID's ", this.state.trapIdArray);
  }

  removeTrapId(id) {
    let arr = [...this.state.trapIdArray]
    let index = arr.indexOf(id);
    arr.splice(index, 1);
    this.setState({ trapIdArray: arr });
  }

  addTreasureId(id) {
    let arr = [...this.state.treasureIdArray]
    arr.push(id)
    this.setState({ treasureIdArray: arr });
    console.log("This is the array of Treasure ID's ", this.state.treasureIdArray);
  }

  removeTreasureId(id) {
    let arr = [...this.state.treasureIdArray]
    let index = arr.indexOf(id);
    arr.splice(index, 1);
    this.setState({ treasureIdArray: arr })
  }

  handleSubmit() {
    console.log("The ID's that would be submitted are: ", this.state.npcIdArray);
    console.log("The ID's that would be submitted are: ", this.state.trapIdArray);
    console.log("The ID's that would be submitted are: ", this.state.treasureIdArray);

    let arrNpc = [...this.state.npcIdArray];
    let arrTrap = [...this.state.trapIdArray];
    let arrTreasure = [...this.state.treasureIdArray];

    let greatestLength = arrNpc.length;
    if (arrTrap.length > greatestLength) {
      greateestLength = arrTrap.length;
    }
    if (arrTreasure.length > greatestLength) {
      greatestLength = arrTreasure.length;
    }

    for (let i = 0; i < greatestLength; i++) {
      let npcValue;
      let trapValue;
      let treasureValue;
      if (arrNpc[i] != undefined) {
        npcValue = arrNpc[i]
      } else {
        npcValue = 0
      }
      if (arrTrap[i] != undefined) {
        trapValue = arrTrap[i]
      } else {
        trapValue = 0
      }
      if (arrTreasure[i] != undefined) {
        treasureValue = arrTreasure[i]
      } else {
        treasureValue = 0
      }

      //console.log(this.props.match.params.id, trapValue, treasureValue, npcValue)

      nodeRefService.postToNodeRef({node_id:`${this.props.match.params.id}`, trap_id: `${trapValue}`, treasure_id: `${treasureValue}`, npc_id: `${npcValue}`});
    }
  }

  render() {
    return (
      <Fragment>
        <Header />
        <div className="jumbotron jumbotron-fluid">
          <div className="container d-flex justify-content-center p-3">
            <h1 className="display-6">
              Create a New Event
            </h1>
          </div>
          <div className="container p-0">
            <div className="alert alert-light text-left"  role="alert">
              Use this page to add NPCs, Traps, Treasures to your event. All of this is optional, so feel free to click the "FINISH" button when ready.
            </div>
          </div>

          <div className="container-fluid d-flex">
            <div className="container col-md-9 text-left">
              <h2>NPCs</h2>

{/* <button className="btn text-light" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      NPCs
                    </button> */}

              {/* Create NPC */}
              <button
                className="btn mb-2"
                type="button"
                data-toggle="collapse"
                data-target="#create-npc"
                aria-expanded="true"
                aria-controls="create-npc"
              >
                CREATE NPC
          </button>
              <div className="collapse" id="create-npc">
                <div className="card card-body dropdownCard">
                  <h3 className="text-light py-1 font-italic">Basic Information</h3>
                  <div className="form-group row py-1">
                    <label className="col-2 col-form-label text-light text-right">
                      Name:
                </label>
                    <div className="col-10">
                      <input
                        className="form-control"
                        type="text"
                        id="npc-name-input"
                        onChange={event => {
                          this.updateNpcName(event.target.value);
                        }}
                      />
                    </div>
                  </div>

                  <div className="form-group row py-1">
                    <label className="col-2 col-form-label text-light text-right">
                      Description:
                </label>
                    <div className="col-10">
                      <input
                        className="form-control"
                        type="text"
                        id="npc-description-input"
                        onChange={event => {
                          this.updateNpcDescription(event.target.value);
                        }}
                      />
                    </div>
                  </div>

                  <h3 className="text-light py-1 font-italic">Ability Scores</h3>
                  <div className="form-group row py-1">
                    <label className="col-1 col-form-label text-light text-right">
                      STR:
                </label>
                    <div className="col-1">
                      <input
                        className="form-control"
                        type="number"
                        id="npc-strength-input"
                        onChange={event => {
                          this.updateNpcStrength(event.target.value);
                        }}
                      />
                    </div>

                    <label className="col-1 col-form-label text-light text-right">
                      DEX:
                </label>
                    <div className="col-1">
                      <input
                        className="form-control"
                        type="number"
                        id="npc-dexterity-input"
                        onChange={event => {
                          this.updateNpcDexterity(event.target.value);
                        }}
                      />
                    </div>

                    <label className="col-1 col-form-label text-light text-right">
                      CON:
                </label>
                    <div className="col-1">
                      <input
                        className="form-control"
                        type="number"
                        id="npc-constitution-input"
                        onChange={event => {
                          this.updateNpcConstitution(event.target.value);
                        }}
                      />
                    </div>

                    <label className="col-1 col-form-label text-light text-right">
                      INT:
                </label>
                    <div className="col-1">
                      <input
                        className="form-control"
                        type="number"
                        id="npc-intelligence-input"
                        onChange={event => {
                          this.updateNpcIntelligence(event.target.value);
                        }}
                      />
                    </div>

                    <label className="col-1 col-form-label text-light text-right">
                      WIS:
                </label>
                    <div className="col-1">
                      <input
                        className="form-control"
                        type="number"
                        id="npc-wisdom-input"
                        onChange={event => {
                          this.updateNpcWisdom(event.target.value);
                        }}
                      />
                    </div>

                    <label className="col-1 col-form-label text-light text-right">
                      CHA:
                </label>
                    <div className="col-1">
                      <input
                        className="form-control"
                        type="number"
                        id="npc-charisma-input"
                        onChange={event => {
                          this.updateNpcCharisma(event.target.value);
                        }}
                      />
                    </div>
                  </div>

                  <h3 className="text-light py-1 font-italic">Saving Throws</h3>
                  <div className="form-group row py-1">
                    <label className="col-1 col-form-label text-light text-right">
                      STR ST:
                </label>
                    <div className="col-1">
                      <input
                        className="form-control"
                        type="number"
                        id="npc-saving-strength-input"
                        onChange={event => {
                          this.updateNpcStStrength(event.target.value);
                        }}
                      />
                    </div>

                    <label className="col-1 col-form-label text-light text-right">
                      DEX ST:
                </label>
                    <div className="col-1">
                      <input
                        className="form-control"
                        type="number"
                        id="npc-saving-dexterity-input"
                        onChange={event => {
                          this.updateNpcStDexterity(event.target.value);
                        }}
                      />
                    </div>

                    <label className="col-1 col-form-label text-light text-right">
                      CON ST:
                </label>
                    <div className="col-1">
                      <input
                        className="form-control"
                        type="number"
                        id="npc-saving-constitution-input"
                        onChange={event => {
                          this.updateNpcStConstitution(event.target.value);
                        }}
                      />
                    </div>

                    <label className="col-1 col-form-label text-light text-right">
                      INT ST:
                </label>
                    <div className="col-1">
                      <input
                        className="form-control"
                        type="number"
                        id="npc-saving-intelligence-input"
                        onChange={event => {
                          this.updateNpcStIntelligence(event.target.value);
                        }}
                      />
                    </div>

                    <label className="col-1 col-form-label text-light text-right">
                      WIS ST:
                </label>
                    <div className="col-1">
                      <input
                        className="form-control"
                        type="number"
                        id="npc-saving-wisdom-input"
                        onChange={event => {
                          this.updateNpcStWisdom(event.target.value);
                        }}
                      />
                    </div>

                    <label className="col-1 col-form-label text-light text-right">
                      CHA ST:
                </label>
                    <div className="col-1">
                      <input
                        className="form-control"
                        type="number"
                        id="npc-saving-charisma-input"
                        onChange={event => {
                          this.updateNpcStCharisma(event.target.value);
                        }}
                      />
                    </div>
                  </div>

                  <h3 className="text-light py-1 font-italic">Stats</h3>

                  <div className="form-group row py-1">
                    <label className="col-2 col-form-label text-light text-right">
                      Size:
                </label>
                    <div className="col-4">
                      <select
                        className="form-control"
                        id="npc-select-size-input"
                        onChange={event => {
                          this.updateNpcSize(event.target.value);
                        }}
                      >
                        <option>Tiny (less than 2 ft.)</option>
                        <option>Small (3 - 5 ft.)</option>
                        <option>Medium (5 - 9 ft.)</option>
                        <option>Large (10 - 14 ft.)</option>
                        <option>Huge (15 - 19 ft.</option>
                        <option>Gargantuan (20 ft. or larger)</option>
                      </select>
                    </div>

                    <label className="col-2 col-form-label text-light text-right">
                      Alignment:
                </label>
                    <div className="col-4">
                      <select
                        className="form-control"
                        id="npc-select-alignment-input"
                        onChange={event => {
                          this.updateNpcAlignment(event.target.value);
                        }}
                      >
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

                  <div className="form-group row py-1">
                    <label className="col-2 col-form-label text-light text-right">
                      Armor:
                </label>
                    <div className="col-4">
                      <input
                        className="form-control"
                        type="number"
                        id="npc-armor-input"
                        onChange={event => {
                          this.updateNpcArmor(event.target.value);
                        }}
                      />
                    </div>

                    <label className="col-2 col-form-label text-light text-right">
                      Hitpoints:
                </label>
                    <div className="col-4">
                      <input
                        className="form-control"
                        type="number"
                        id="npc-hitpoints-input"
                        onChange={event => {
                          this.updateNpcHitPoints(event.target.value);
                        }}
                      />
                    </div>
                  </div>

                  <div className="form-group row py-1">
                    <label className="col-2 col-form-label text-light text-right">
                      Passive Perception:
                </label>
                    <div className="col-2">
                      <input
                        className="form-control"
                        type="number"
                        id="npc-passivePerception-input"
                        onChange={event => {
                          this.updateNpcPassivePerception(event.target.value);
                        }}
                      />
                    </div>

                    <label className="col-2 col-form-label text-light text-right">
                      Challenge Rating:
                </label>
                    <div className="col-2">
                      <input
                        className="form-control"
                        type="number"
                        id="npc-challengeRating-input"
                        onChange={event => {
                          this.updateNpcChallengeRating(event.target.value);
                        }}
                      />
                    </div>

                    <label className="col-2 col-form-label text-light text-right">
                      Experience Reward:
                </label>
                    <div className="col-2">
                      <input
                        className="form-control"
                        type="number"
                        id="npc-experienceReward-input"
                        onChange={event => {
                          this.updateNpcExperienceReward(event.target.value);
                        }}
                      />
                    </div>
                  </div>

                  <div className="form-group row py-1">
                    <label className="col-2 col-form-label text-light text-right">
                      Speed:
                </label>
                    <div className="col-2">
                      <input
                        className="form-control"
                        type="number"
                        id="npc-speed-input"
                        onChange={event => {
                          this.updateNpcSpeed(event.target.value);
                        }}
                      />
                    </div>

                    <label className="col-2 col-form-label text-light text-right">
                      Fly Speed:
                </label>
                    <div className="col-2">
                      <input
                        className="form-control"
                        type="number"
                        id="npc-flySpeed-input"
                        onChange={event => {
                          this.updateNpcFlySpeed(event.target.value);
                        }}
                      />
                    </div>

                    <label className="col-2 col-form-label text-light text-right">
                      Climb Speed:
                </label>
                    <div className="col-2">
                      <input
                        className="form-control"
                        type="number"
                        id="npc-climbSpeed-input"
                        onChange={event => {
                          this.updateNpcClimbSpeed(event.target.value);
                        }}
                      />
                    </div>
                  </div>

                  <div className="form-group row py-1">
                    <label className="col-2 col-form-label text-light text-right">
                      Skills:
                </label>
                    <div className="col-10">
                      <input
                        className="form-control"
                        type="text"
                        id="npc-skills-input"
                        onChange={event => {
                          this.updateNpcSkills(event.target.value);
                        }}
                      />
                    </div>
                  </div>

                  <div className="form-group row py-1">
                    <label className="col-2 col-form-label text-light text-right">
                      Senses:
                </label>
                    <div className="col-10">
                      <input
                        className="form-control"
                        type="text"
                        id="npc-senses-input"
                        onChange={event => {
                          this.updateNpcSenses(event.target.value);
                        }}
                      />
                    </div>
                  </div>

                  <div className="form-group row py-1">
                    <label className="col-2 col-form-label text-light text-right">
                      Damage Immunity:
                </label>
                    <div className="col-10">
                      <input
                        className="form-control"
                        type="text"
                        id="npc-damageImmunity-input"
                        onChange={event => {
                          this.updateNpcDamageImmunity(event.target.value);
                        }}
                      />
                    </div>
                  </div>

                  <div className="form-group row py-1">
                    <label className="col-2 col-form-label text-light text-right">
                      Condition Immunity:
                </label>
                    <div className="col-10">
                      <input
                        className="form-control"
                        type="text"
                        id="npc-conditionImmunity-input"
                        onChange={event => {
                          this.updateNpcConditionImmunity(event.target.value);
                        }}
                      />
                    </div>
                  </div>

                  <h3 className="text-light py-1 font-italic">Actions</h3>
                  <div className="form-group row py-1">
                    <label className="col-2 col-form-label text-light text-right">
                      Basic Actions:
                </label>
                    <div className="col-10">
                      <input
                        className="form-control"
                        type="text"
                        id="npc-actions-input"
                        onChange={event => {
                          this.updateNpcActions(event.target.value);
                        }}
                      />
                    </div>
                  </div>

                  <div className="form-group row py-1">
                    <label className="col-2 col-form-label text-light text-right">
                      Legendary Actions:
                </label>
                    <div className="col-10">
                      <input
                        className="form-control"
                        type="text"
                        id="npc-legendaryActions-input"
                        onChange={event => {
                          this.updateNpcLegendaryActions(event.target.value);
                        }}
                      />
                    </div>
                  </div>

                  <div className="form-group row py-1">
                    <label className="col-2 col-form-label text-light text-right">
                      Lair Actions:
                </label>
                    <div className="col-10">
                      <input
                        className="form-control"
                        type="text"
                        id="npc-lairActions-input"
                        onChange={event => {
                          this.updateNpcLairActions(event.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <div className="form-group row py-1">
                    <button
                      className="btn aqua ml-3 mr-1"
                      type="button"
                      data-toggle="collapse"
                      data-target="#create-npc"
                      aria-expanded="false"
                      aria-controls="collapseExample"
                    >
                      Cancel
                </button>
                    <button
                      type="button"
                      className="btn text-right aqua"
                      onClick={() => {
                        this.postNpc();
                        location.reload();
                      }}
                    >
                      Create
                </button>
                  </div>
                </div>
              </div>

              <h2>Traps</h2>

              {/* Create Trap */}
              <button
                className="btn mb-2"
                type="button"
                data-toggle="collapse"
                data-target="#create-trap"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                CREATE TRAP
          </button>
              <div className="collapse" id="create-trap">
                <div className="card card-body dropdownCard">
                  <h3 className="text-light py-1 font-italic">Basic Information</h3>
                  <div className="form-group row py-1">
                    <label className="col-2 col-form-label text-light text-right">
                      Name:
                </label>
                    <div className="col-10">
                      <input
                        className="form-control"
                        type="text"
                        id="trap-name-input"
                        onChange={event => {
                          this.updateTrapName(event.target.value);
                        }}
                      />
                    </div>
                  </div>

                  <div className="form-group row py-1">
                    <label className="col-2 col-form-label text-light text-right">
                      Description:
                </label>
                    <div className="col-10">
                      <input
                        className="form-control"
                        type="text"
                        id="trap-description-input"
                        onChange={event => {
                          this.updateTrapDescription(event.target.value);
                        }}
                      />
                    </div>
                  </div>

                  <h3 className="text-light py-1 font-italic">Stats</h3>
                  <div className="form-group row py-1">
                    <label className="col-2 col-form-label text-light text-right">
                      Trap Type:
                </label>
                    <div className="col-10">
                      <select
                        className="form-control"
                        id="trap-select-trap-input"
                        onChange={event => {
                          this.updateTrapType(event.target.value);
                        }}
                      >
                        <option>Mechanical</option>
                        <option>Magical</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group row py-1">
                    <label className="col-2 col-form-label text-light text-right">
                      Damage:
                </label>
                    <div className="col-2">
                      <input
                        className="form-control"
                        type="number"
                        id="trap-damage-input"
                        onChange={event => {
                          this.updateTrapDamage(event.target.value);
                        }}
                      />
                    </div>

                    <label className="col-2 col-form-label text-light text-right">
                      Spot DC:
                </label>
                    <div className="col-2">
                      <input
                        className="form-control"
                        type="number"
                        id="trap-spotDC-input"
                        onChange={event => {
                          this.updateTrapSpotDC(event.target.value);
                        }}
                      />
                    </div>

                    <label className="col-2 col-form-label text-light text-right">
                      Disarm DC:
                </label>
                    <div className="col-2">
                      <input
                        className="form-control"
                        type="number"
                        id="trap-disarmDC-input"
                        onChange={event => {
                          this.updateTrapDisarmDC(event.target.value);
                        }}
                      />
                    </div>
                  </div>

                  <div className="form-group row py-1">
                    <button
                      className="btn aqua ml-3 mr-1"
                      type="button"
                      data-toggle="collapse"
                      data-target="#create-trap"
                      aria-expanded="false"
                      aria-controls="collapseExample"
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      className="btn text-right aqua"
                      onClick={() => {
                        this.postTrap();
                        location.reload();
                      }}
                    >
                      Create
                    </button>
                  </div>
                </div>
              </div>

              <h2>Treasures</h2>

              {/* Create Treasure */}
              <button
                className="btn mb-2"
                type="button"
                data-toggle="collapse"
                data-target="#create-treasure"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                CREATE TREASURE
          </button>
              <div className="collapse" id="create-treasure">
                <div className="card card-body dropdownCard">
                  <h3 className="text-light py-1 font-italic">Basic Information</h3>
                  <div className="form-group row py-1">
                    <label className="col-2 col-form-label text-light text-right">
                      Name:
                </label>
                    <div className="col-10">
                      <input
                        className="form-control"
                        type="text"
                        id="treasure-name-input"
                        onChange={event => {
                          this.updateTreasureName(event.target.value);
                        }}
                      />
                    </div>
                  </div>

                  <div className="form-group row py-1">
                    <label className="col-2 col-form-label text-light text-right">
                      Description:
                </label>
                    <div className="col-10">
                      <input
                        className="form-control"
                        type="text"
                        id="treasure-description-input"
                        onChange={event => {
                          this.updateTreasureDescription(event.target.value);
                        }}
                      />
                    </div>
                  </div>

                  <div className="form-group row py-1">
                    <label className="col-2 col-form-label text-light text-right">
                      Value:
                </label>
                    <div className="col-10">
                      <input
                        className="form-control"
                        type="number"
                        id="treasure-value-input"
                        onChange={event => {
                          this.updateTreasureValue(event.target.value);
                        }}
                      />
                    </div>
                  </div>

                  <div className="form-group row py-1">
                    <button
                      className="btn aqua ml-3 mr-1"
                      type="button"
                      data-toggle="collapse"
                      data-target="#create-treasure"
                      aria-expanded="false"
                      aria-controls="collapseExample"
                    >
                      Cancel
                </button>
                    <button
                      type="button"
                      to="/CreateEvent2"
                      className="btn text-right aqua"
                      onClick={() => {
                        this.postTreasure();
                        location.reload();
                      }}
                    >
                      Create
                </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="container col-md-3">
              <h2 className="text-left">Bank</h2>
              <div className="card">
                <div className="card-header" id="headingOne">
                  <h5 className="mb-0">
                    <button className="btn text-light" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      NPCs
                    </button>
                  </h5>
                </div>

                <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                  <div className="card-body text-left bank">
                    {/* NPC Checkboxes */}
                    <div className="form-check">
                      {this.state.npcArray.map((name, index) => {
                        return <NpcMaker AddId={(id) => { this.addNpcId(id) }} Remove={(id) => { this.removeNpcId(id) }} npc={name} key={index} />
                      })}
                    </div>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-header" id="headingTwo">
                  <h5 className="mb-0">
                    <button className="btn text-light" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      Traps
                    </button>
                  </h5>
                </div>
                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                  <div className="card-body text-left bank">
                    {/* Trap Checkboxes */}
                    <div className="form-check">
                      {this.state.trapArray.map((name, index) => {
                        return <TrapMaker AddId={(id) => { this.addTrapId(id) }} Remove={(id) => { this.removeTrapId(id) }} trap={name} key={index} />
                      })}
                    </div>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-header" id="headingThree">
                  <h5 className="mb-0">
                    <button className="btn text-light" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      Treasures
                    </button>
                  </h5>
                </div>
                <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                  <div className="card-body text-left bank">
                    {/* Treasure Checkboxes */}
                    <div className="form-check">
                      {this.state.treasureArray.map((name, index) => {
                        return <TreasureMaker AddId={(id) => { this.addTreasureId(id) }} Remove={(id) => { this.removeTreasureId(id) }} treasure={name} key={index} />
                      })}
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>


          <Link to="/Storyboard/1" className="btn btn-lg text-white" onClick={() => {
            this.handleSubmit()
          }}>
            FINISH
       </Link>
        </div>
      </Fragment>
    );
  }
}
