import React from 'react'

import HeaderNavigationHandler from '../../components/header/handlers/HeaderNavigationHandler'

import Cloud from '../../components/cloud/Cloud'
import Animation from '../../components/animation/Animation'

import './Home.scss'

import Animation01 from '../../style/animations/animation_01'
import Animation02 from '../../style/animations/animation_02'
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
                    <Cloud index="2" animated="1" depth="0.28"/>
                    <Cloud index="7" animated="2" depth="0.01"/>
                    <h1>BlockFood</h1>
                    <h2>Food Delivery. Reinvented.</h2>
                    <Animation placeholderSrc={blockfoodIllustration}
                               placeholderAlt="BlockFood Illustration"
                               animation={Animation01}>
                        <Cloud index="4" animated="3"/>
                    </Animation>
                </section>
                <div id="about"></div>
                <section id="bfio-tutorial">
                    <h3>How does it work?</h3>
                    <p>The platform uses smart contracts to handle the payment and the progression of the orders placed by customers.</p>
                    <Animation placeholderSrc={blockfoodIllustration}
                               placeholderAlt="BlockFood Illustration"
                               animation={Animation02}>
                        <Cloud index="6" animated="2"/>
                    </Animation>
                </section>
                <div id="roadmap"></div>
                <div id="team"></div>
            </div>
        )
    }
}