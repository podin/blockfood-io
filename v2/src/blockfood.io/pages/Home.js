import React from 'react'

import HeaderNavigationHandler from '../components/header/handlers/HeaderNavigationHandler'

export default class Home extends React.Component {
    componentDidMount() {
        this.headerNavigationHandler = new HeaderNavigationHandler()
    }

    componentWillUnmount() {
        this.headerNavigationHandler.destroy()
    }

    render() {
        return (
            <div id="bfio-home">
                <div>Intro</div>
                <div id="about">About</div>
                <div id="roadmap">Roadmap</div>
                <div id="team">Team</div>
                <div>More</div>
            </div>
        )
    }
}