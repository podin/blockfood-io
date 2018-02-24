import React from 'react'

import HeaderNavigationHandler from '../components/header/HeaderNavigationHandler'

export default class Home extends React.Component {
    componentDidMount() {
        this.headerNavigationHandler = new HeaderNavigationHandler()
    }

    componentWillUnmount() {
        this.headerNavigationHandler.destroy()
    }

    render() {
        return (
            <div>
                <div>Intro</div>
                <div id="about" style={{backgroundColor: '#5c5190'}}>About</div>
                <div id="roadmap" style={{backgroundColor: '#4b3f80'}}>Roadmap</div>
                <div id="team" style={{backgroundColor: '#3d336d'}}>Team</div>
                <div>More</div>
            </div>
        )
    }
}