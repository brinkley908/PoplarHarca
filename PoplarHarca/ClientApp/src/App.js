import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { Teams } from './components/Teams';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { ContentContainer } from "./components/ContentContainer";

import './custom.css'

export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <Layout>
                <ContentContainer>
                    <Route exact path='/' component={Teams} />
                    <Route path='/counter' component={Counter} />
                    <Route path='/fetch-data' component={FetchData} />
                </ContentContainer>
            </Layout>
        );
    }
}
