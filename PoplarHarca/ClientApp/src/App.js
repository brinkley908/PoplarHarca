import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Teams } from './components/Teams';
import { ContentContainer } from "./components/ContentContainer";

import './custom.css'

export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <Layout>
                <ContentContainer>
                    <Route exact path='/' component={Teams} />
                </ContentContainer>
            </Layout>
        );
    }
}
