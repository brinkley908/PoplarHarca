import React, { Component } from 'react';
import Select from '@material-ui/core/Select';

export class Teams extends Component {

    constructor(props) {
        super(props);
        this.state = { teamList: [], loading: true };
    }

    componentDidMount() {
        this.populateTeamsData();
    }


    render() {

        return (
            
            
            <p>hello</p>
            
            );

    }


    async populateTeamsData() {
        const response = await fetch('teams/GetTeamList');
        const data = await response.json();
        this.setState({ teamList: data, loading: false });
    }

}