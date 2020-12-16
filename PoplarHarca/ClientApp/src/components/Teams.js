import React, { Component } from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Loader from 'react-loader-spinner';
import { SocialMedia } from './SocialMedia';
import FormControl from '@material-ui/core/FormControl';

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

    showContents(list) {
        const { classes } = this.props;

        return (
            <>
                <div className="social-buttons">

                    <label>
                        Select a team
                    </label>

                    <SocialMedia
                        Twitter={this.state.currentTeam.strTwitter}
                        Facebook={this.state.currentTeam.strFacebook}
                        Instagram={this.state.currentTeam.strInstagram}
                        Website={this.state.currentTeam.strWebsite}
                    />

                </div>

                <FormControl variant="outlined">
                    <Select id="teamlist" value={this.state.idTeam} onChange={(e) => this.onChangeTeam(e.target.value)} >

                        {
                            list.map(list =>
                                <MenuItem key={list.strTeam} value={list.idTeam}>{list.strTeam}</MenuItem>
                            )
                        }

                    </Select>
                </FormControl>

                <div className="team-logo">
                    <img src={this.state.currentTeam.strTeamLogo} alt={this.state.currentTeam.strAlternate} />
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
            : this.showContents(this.state.teamList);

        return (
            <>
                {contents}
            </>
        );

    }




}