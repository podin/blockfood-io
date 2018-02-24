import React from 'react'
import {Router} from 'react-static'
import Routes from 'react-static-routes'

import Loader from './components/loader/Loader'
import Header from './components/header/Header'
import SidebarHeader from './components/header/SidebarHeader'

import './App.scss'

const App = () => (
    <Router scrollToHashDuration={0} scrollToHashOffset={-150}>
        <React.Fragment>
            <div id="bfio-wrapper">
                <div id="bfio-wrapper-background"></div>
                <Header/>
                <div id="bfio-content">
                    <Routes/>
                </div>
            </div>
            <SidebarHeader/>
            <Loader/>
        </React.Fragment>
    </Router>
)

export default App
