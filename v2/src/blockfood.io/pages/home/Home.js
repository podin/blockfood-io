import React from 'react'

import HeaderNavigationHandler from '../../components/header/handlers/HeaderNavigationHandler'

import Cloud from '../../components/cloud/Cloud'
import Animation from '../../components/animation/Animation'
import LinkWrapper from '../../components/linkWrapper/LinkWrapper'

import {DATA_LINK_TELEGRAM, DATA_LINK_TWITTER} from '../../data/DataLinks'

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
                    <Cloud index="2" animated="1" depth="0.9"/>
                    <div id="bfio-title">
                        <Cloud index="9" animated="2"/>
                        <h1>BlockFood</h1>
                        <h2>Food Delivery. Reinvented.</h2>
                    </div>
                    <Animation animation={Animation01} placeholders={Animation01_Placeholders}>
                        <Cloud index="4" animated="3"/>
                    </Animation>
                </section>

                <section id="bfio-subscribe">
                    <div id="subscribe"></div>
                    <Cloud index="1" depth="0.8"/>
                    <h3>Join our whitelist</h3>
                    <Subscription/>
                    <div className="social">
                        {LinkWrapper.fromData(DATA_LINK_TELEGRAM, null, {before: 'Join our Telegram group'})}
                        {LinkWrapper.fromData(DATA_LINK_TWITTER, null, {before: 'Follow us on Twitter'})}
                    </div>
                </section>

                <section id="bfio-project">
                    <div id="about"></div>
                    <h3>What is BlockFood?</h3>
                    <h4>BlockFood is the world's first <b>decentralized food ordering & delivery platform</b>.</h4>
                    <p>
                        BlockFood is an open platform created to connect customers to restaurants with a fair
                        distribution model of revenue, based on smart contracts.
                        BlockFood is the first project from the <b>Open Sharing Economy foundation</b>.
                    </p>
                    <div className="video">
                        <Cloud index="5"/>
                        <iframe src="https://www.youtube.com/embed/irqmb2AnBfY" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen=""></iframe>
                    </div>
                </section>

                <section id="bfio-tutorial">
                    <Cloud index="10" depth="0.2"/>
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