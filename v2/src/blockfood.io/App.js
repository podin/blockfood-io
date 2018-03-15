import React from 'react'
import {Router, Route} from 'react-static'
import Routes from 'react-static-routes'

import Loader from './components/loader/Loader'
import Header from './components/header/Header'
import SidebarHeader from './components/header/SidebarHeader'
import Footer from './components/footer/Footer'

import './App.scss'

// Fix a react-static issue causing to create a new component everytime the hash change
const componentsByTemplateID = {}
const RenderRoutes = ({getComponentForPath}) => (
    <Route path='*' render={props => {
        const path = props.location.pathname
        const Comp = componentsByTemplateID[path] = componentsByTemplateID[path] || getComponentForPath(path)
        return <Comp key={props.location.pathname} {...props} />
      }}/>
)

const App = () => (
    <Router scrollToHashDuration={0} scrollToHashOffset={-150}>
        <React.Fragment>
            <div id="bfio-background"></div>
            <Header/>
            <div id="bfio-content">
                <div id="bfio-content-width">
                    <Routes render={RenderRoutes}/>
                </div>
                <Footer/>
            </div>
            <SidebarHeader/>
            <Loader/>
        </React.Fragment>
    </Router>
)

export default App
