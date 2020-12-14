import React, { Component } from 'react';


export class ContentContainer extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="content-container">
                <div className="content-container--wrapper">
                    {this.props.children}
                </div>
            </div>
        )
    }
}
