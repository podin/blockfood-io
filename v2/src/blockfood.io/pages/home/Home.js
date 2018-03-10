import React from 'react'

import HeaderNavigationHandler from '../../components/header/handlers/HeaderNavigationHandler'

import Cloud from '../../components/cloud/Cloud'
import Animation from '../../components/animation/Animation'

import Subscription from './subscription/Subscription'

import './Home.scss'

import Animation01 from '../../style/animations/animation_01'
import blockfoodIllustration from '../../style/images/blockfood-illustration.png'

import Animation02 from '../../style/animations/animation_02'
import blockfoodWhoDoesItWork1 from '../../style/images/blockfood-who-does-it-work-1.png'
import blockfoodWhoDoesItWork2 from '../../style/images/blockfood-who-does-it-work-2.png'
import blockfoodWhoDoesItWork3 from '../../style/images/blockfood-who-does-it-work-3.png'
import blockfoodWhoDoesItWork4 from '../../style/images/blockfood-who-does-it-work-4.png'

const Animation01_Placeholders = [
    {src: blockfoodIllustration, alt: 'BlockFood Illustration'}
]

const Animation02_Placeholders = [
    {src: blockfoodWhoDoesItWork1, alt: 'BlockFood Who does it work? (Step 1)'},
    {src: blockfoodWhoDoesItWork2, alt: 'BlockFood Who does it work? (Step 2)'},
    {src: blockfoodWhoDoesItWork3, alt: 'BlockFood Who does it work? (Step 3)'},
    {src: blockfoodWhoDoesItWork4, alt: 'BlockFood Who does it work? (Step 4)'}
]

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
                    <Animation animation={Animation01} placeholders={Animation01_Placeholders}>
                        <Cloud index="4" animated="3"/>
                    </Animation>
                </section>

                <section id="bfio-subscribe">
                    <div id="subscribe"></div>
                    <h3>Join our whitelist</h3>
                    <Subscription/>
                </section>

                <section id="bfio-tutorial">
                    <div id="about"></div>
                    <h3>How does it work?</h3>
                    <p>The platform uses smart contracts to handle the payment and the progression of the orders placed by customers.</p>
                    <Animation animation={Animation02} placeholders={Animation02_Placeholders}>
                        <Cloud index="6" animated="2"/>
                    </Animation>
                </section>

                <div id="roadmap"></div>
                <div id="team"></div>

            </div>
        )
    }
}