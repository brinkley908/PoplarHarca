import React, { Component } from 'react';

export class Teams extends Component {

    constructor(props) {
        super(props);
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
        const response = await fetch('teams');
        const data = await response.json();
      //  this.setState({ forecasts: data, loading: false });
    }

}