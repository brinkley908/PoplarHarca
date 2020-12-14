import React, { Component } from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Loader from 'react-loader-spinner'

import "../custom.css";

export class Teams extends Component {

    constructor(props) {
        super(props);
        this.state = { teamList: [], loading: true, idTeam: 0, currentTeam: null };
    }

    componentDidMount() {
        this.populateTeamsData();
    }

    async onChangeTeam(value) {
        const team = await this.getTeam(value);

        this.setState({ ...this.state, idTeam: value, currentTeam: team })
    }

    showList(list) {
        return (
            <>
                <InputLabel shrink id="demo-simple-select-placeholder-label-label">
                    Select a team
                </InputLabel>
                <Select
                    id="teamlist"
                    value={this.state.idTeam}
                    onChange={(e) => this.onChangeTeam(e.target.value)}
                >

                    {list.map(list =>
                        <MenuItem key={list.strTeam} value={list.idTeam}>{list.strTeam}</MenuItem>
                    )}
                </Select>

                <div className="team-logo">
                    <img src={this.state.currentTeam.strTeamLogo} />
                </div>

                <div className="paragraph">
                    {this.state.currentTeam.strDescriptionEN}
                </div>


            </>
        );
    }


    loading() {
        return (
            <div className="loading">

                <Loader
                    type="ThreeDots"
                    color="#00BFFF"
                    height={100}
                    width={100}
                    timeout={20000} //3 secs

                />
            </div>

        );
    }

    render() {

        let contents = this.state.loading
            ? this.loading()
            : this.showList(this.state.teamList);


        return (
            <>
                {contents}

            </>
        );

    }


    async populateTeamsData() {
        const response = await fetch('teams/GetTeamList');
        const data = await response.json();
        const id = data[0].idTeam;
        const team = await this.getTeam(id);
        this.setState({ teamList: data, loading: false, idTeam: id, currentTeam: team });
    }

    async getTeam(idTeam) {
        const response = await fetch('teams/GetTeam/' + idTeam);
        const team = await response.json();
        return team;
    }

}