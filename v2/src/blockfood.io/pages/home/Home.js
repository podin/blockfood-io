import * as _ from 'lodash'
import React from 'react'
import {cleanUrl} from '../../utils/Utils'

import HeaderNavigationHandler from '../../components/header/HeaderNavigationHandler'

import Cloud from '../../components/cloud/Cloud'
import Animation from '../../components/animation/Animation'
import LinkWrapper from '../../components/linkWrapper/LinkWrapper'

import {
    DATA_LINK_TELEGRAM, DATA_LINK_TWITTER, DATA_LINK_WHITEPAPER,
    DATA_LINK_CONTACT,
    DATA_LINKS_BROWSE
} from '../../data/DataLinks'
import DATA_EVENTS from '../../data/DataEvents'
import DATA_PARTNERS from '../../data/DataPartners'
import DATA_PRESS from '../../data/DataPress'

import Subscription from './subscription/Subscription'
import Roadmap from './roadmap/Roadmap'
import Team from './team/Team'

import './Home.scss'

import Animation01 from '../../style/animations/animation_01'
import blockfoodIllustration from '../../style/images/illustrations/blockfood-illustration.png'

import Animation02 from '../../style/animations/animation_02'
import blockfoodWhoDoesItWork1 from '../../style/images/illustrations/blockfood-who-does-it-work-1.png'
import blockfoodWhoDoesItWork2 from '../../style/images/illustrations/blockfood-who-does-it-work-2.png'
import blockfoodWhoDoesItWork3 from '../../style/images/illustrations/blockfood-who-does-it-work-3.png'
import blockfoodWhoDoesItWork4 from '../../style/images/illustrations/blockfood-who-does-it-work-4.png'

import icon_Bf from '../../style/images/icon_Bf.svg'

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
                    <nav id="about"/>
                    <h3>What is BlockFood?</h3>
                    <h4>BlockFood is the world's first <b>decentralized food ordering & delivery platform</b>.</h4>
                    <p>
                        BlockFood is an open platform created to connect customers to restaurants with a fair
                        distribution model of revenue, based on smart contracts.
                        BlockFood is the first project from the <b>Open Sharing Economy foundation</b>.
                    </p>
                    <div className="video">
                        <Cloud index="5"/>
                        <iframe src="https://www.youtube.com/embed/irqmb2AnBfY" frameBorder="0" allow="encrypted-media" allowFullScreen=""></iframe>
                    </div>
                </section>

                <section id="bfio-characteristics">
                    <Cloud index="9" depth="0.2"/>
                    <Cloud index="9"/>
                    <Cloud index="8"/>
                    <Cloud index="2"/>
                    <h3>Key characteristics</h3>
                    <div className="items">
                        <div className="item">
                            <div>
                                <Cloud index="4"/>
                                <svg width="150" height="150">
                                    <use xlinkHref={cleanUrl(icon_Bf + '#decentralized')}/>
                                </svg>
                                <h5>Decentralized</h5>
                                <p>Users are empowered. They make the platform grow and they reap the benefits.</p>
                            </div>
                        </div>
                        <div className="item">
                            <div>
                                <Cloud index="6"/>
                                <svg width="150" height="150">
                                    <use xlinkHref={cleanUrl(icon_Bf + '#fair')}/>
                                </svg>
                                <h5>Fair</h5>
                                <p>Revenue is distributed fairly between all actors.</p>
                            </div>
                        </div>
                        <div className="item">
                            <div>
                                <Cloud index="4"/>
                                <svg width="150" height="150">
                                    <use xlinkHref={cleanUrl(icon_Bf + '#open')}/>
                                </svg>
                                <h5>Open</h5>
                                <p>The source code is available on open source platforms. The platform is open to third-party developers.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="bfio-tutorial">
                    <Cloud index="10" depth="0.4"/>
                    <h3>How does it work?</h3>
                    <h6>The platform uses smart contracts to handle the payment and the progression of the orders placed by customers.</h6>
                    <Animation animation={Animation02} placeholders={Animation02_Placeholders}>
                        <Cloud index="6" animated="2"/>
                    </Animation>
                    <p>
                        To get more details on BlockFood, browse our {LinkWrapper.fromData(DATA_LINK_WHITEPAPER)}
                    </p>
                </section>

                <section id="bfio-roadmap">
                    <nav id="roadmap"/>
                    <Cloud index="2" depth="0.5"/>
                    <Cloud index="8" depth="0"/>
                    <Cloud index="9" depth="0.2"/>
                    <Cloud index="4" depth="0.6"/>
                    <h3>Development road map</h3>
                    <h6>Our development schedule for the next two years.</h6>
                    <Roadmap/>
                </section>

                <section id="bfio-team">
                    <nav id="team"/>
                    <Cloud index="3" depth="0"/>
                    <Cloud index="7" depth="0.6"/>
                    <Cloud index="1" depth="0.45"/>
                    <h3>Team</h3>
                    <Team/>
                </section>

                <section id="bfio-events">
                    <Cloud index="2" depth="0.2"/>
                    <Cloud index="5" depth="0.3"/>
                    <h3>Events</h3>
                    {_.map(DATA_EVENTS, (event, index) => (
                        <div key={event.id} className="event">
                            {event.image && (
                                <div className="image">
                                    <img src={cleanUrl(event.image)} alt={event.title}/>
                                    {index === 0 && <Cloud index="5" depth="0"/>}
                                </div>
                            )}
                            <div className="title">{event.title}</div>
                            <div className="location">{event.location}</div>
                            <div className="date">{event.date}</div>
                        </div>
                    ))}
                    <div className="event">
                        <div className="title">Want to invite us?</div>
                        <div className="date">Reach us at {LinkWrapper.fromData(DATA_LINK_CONTACT)}</div>
                    </div>
                </section>

                <section id="bfio-links">
                    <Cloud index="4" depth="0.8"/>
                    <Cloud index="10" depth="0.7"/>
                    <h3>Browse our links</h3>
                    <div className="links">
                        {_.map(DATA_LINKS_BROWSE, link => (
                            <div key={link.id} className="link">
                                <div>
                                    <span>{link.tag}</span>
                                    {LinkWrapper.fromData(link)}
                                </div>
                                <i className="fas fa-external-link-square-alt"/>
                            </div>
                        ))}
                    </div>
                </section>

                <section id="bfio-partners">
                    <h3>Our Partners</h3>
                    {_.map(DATA_PARTNERS, partner => (
                       <a key={partner.id} href={partner.url} target="_blank">
                           <img src={cleanUrl(partner.image)} alt={partner.name}/>
                       </a>
                    ))}
                </section>

                <section id="bfio-press">
                    <h3>BlockFood in the press</h3>
                </section>

            </div>
        )
    }
}