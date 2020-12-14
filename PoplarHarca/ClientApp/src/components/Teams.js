import React, { Component } from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Loader from 'react-loader-spinner'

import "../custom.css";

export class Teams extends Component {

    constructor(props) {
        super(props);
        this.state = { teamList: [], loading: true, idTeam: 0 };
    }

    componentDidMount() {
        this.populateTeamsData();
    }



    showList(list) {
        return (
            <Select
                id="teamlist"
                value={this.state.idTeam}
            >

                {list.map(list =>
                    <MenuItem value={list.idTeam}>{ list.strTeam }</MenuItem>
                )}
            </Select>
        );
    }

    render() {

        let contents = this.state.loading
            ?
            <Loader
                type="ThreeDots"
                color="#00BFFF"
                height={100}
                width={100}
                timeout={20000} //3 secs

            />
            :
            this.showList(this.state.teamList);


        return (
            <>
                {contents}

            </>
        );

    }


    async populateTeamsData() {
        const response = await fetch('teams/GetTeamList');
        const data = await response.json();
        this.setState({ teamList: data, loading: false, idTeam: data[0].idTeam });
    }

}