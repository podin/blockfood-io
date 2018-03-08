import React from 'react'

import HeaderNavigationHandler from '../../components/header/handlers/HeaderNavigationHandler'

import Cloud from '../../components/cloud/Cloud'
import Animation from '../../components/animation/Animation'

import './Home.scss'

import Animation01 from '../../style/animations/animation_01'
import blockfoodIllustration from '../../style/images/blockfood-illustration.png'

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
                <section id="bfio-intro">
                    <Cloud index="2" animated="1" depth="0.35"/>
                    <Cloud index="7" animated="2" depth="0.01"/>
                    <h1>BlockFood</h1>
                    <h2>Food Delivery. Reinvented.</h2>
                    <Animation placeholderSrc={blockfoodIllustration}
                               placeholderAlt="BlockFood Illustration"
                               animation={Animation01}>
                        <Cloud index="4" animated="3"/>
                    </Animation>
                </section>
            </div>
        )
    }
}