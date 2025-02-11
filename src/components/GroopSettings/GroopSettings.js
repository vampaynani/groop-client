
import GroopContext from "../../contexts/GroopContext";
import GroopService from "../../services/groop-service";
import React, { Component } from "react";
import './GroopSetting.scss'

export default class GroopSettings extends Component {
    static contextType = GroopContext;
    state = {
      group_id: this.context.currentGroup,
      newMember: "",
      deletedMember: ""
    }
    handleDeleteGroup = (e) =>{
      e.preventDefault();
      GroopService.deleteGroup(this.state.group_id)
    }
    handleDeleteMember = (e) =>{
      e.preventDefault();
      let body ={
        group_id: parseInt(this.state.group_id), 
        member_id: parseInt(this.state.deletedMember)
      }
      GroopService.deleteGroupMember(body)
    }
    handleAddMember = (e) =>{
      e.preventDefault();
      let body ={
        group_id: parseInt(this.state.group_id), 
        member_id: parseInt(this.state.newMember)
      }
      console.log(body)
      GroopService.addNewGroupMember(body)
    }
    handleChangeAddMember = e => {
      this.setState({ newMember: e.target.value});
    };
    handleChangeDeleteMember = e => {
      this.setState({ deletedMember: e.target.value});
    };
  render(){
    console.log(this.context.currentGroup)
    console.log(this.state.newMember)
    return(
      <section className="GroupSettingsSection">
        <h2>Group Settings</h2>
        <form className="addGroupMember">
        <label htmlFor="addGroupMember" className="AddGroupMemberLabel">
          Add Member to Group
        </label>
        <input
            type="text"
            id="addGroupMember"
            name="addGroupMember"
            onChange={this.handleChangeAddMember}
          />
          <button
            type="submit"
            onClick={this.handleAddMember}
            className="AddGroopMemberButton"
          >
            Add New Member
          </button>

        </form>
        <form className="deleteGroupMember">
        <label htmlFor="deleteGroupMember" className="deleteGroupMemberLabel">
          Remove Member from Group
        </label>
        <input
            type="text"
            id="addGroupMember"
            name="addGroupMember"
            onChange={this.handleChangeDeleteMember}
          />
          <button
            type="submit"
            onClick={this.handleDeleteMember}
            className="AddGroupMemberButton"
          >
            Remove Member
          </button>

        </form>
        <button
            type="submit"
            onClick={this.handleDeleteGroup}
            className="DeleteGroupButton"
          >
            Delete Group
          </button>
      </section>     
    )
  }
}