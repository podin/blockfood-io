import React from 'react'
import {Router} from 'react-static'
import Routes from 'react-static-routes'

import Loader from './components/loader/Loader'
import Header from './components/header/Header'

import './App.scss'

const App = () => (
    <Router scrollToHashDuration={0} scrollToHashOffset={-150}>
        <div>
            <Header/>
            <div id="bfio-content">
                <Routes/>
            </div>
            <Loader/>
        </div>
    </Router>
)

export default App
