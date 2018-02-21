import React from 'react'
import {Router} from 'react-static'
import Routes from 'react-static-routes'

import Header from './components/header/Header'

import './App.scss'

const App = () => (
    <Router>
        <div>
            <Header/>
            <div className="content">
                <Routes/>
            </div>
        </div>
    </Router>
)

export default App
