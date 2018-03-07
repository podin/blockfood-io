import React from 'react'
import {cleanUrl} from '../../utils/Utils'

import HeaderNavigationHandler from '../../components/header/handlers/HeaderNavigationHandler'
import Cloud from '../../components/cloud/Cloud'

import './Home.scss'

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
                    <Cloud index="2" animated="1" depth="0.3"/>
                    <Cloud index="7" animated="2" depth="0.05"/>
                    <h1>BlockFood</h1>
                    <h2>Food Delivery. Reinvented.</h2>
                    <img src={cleanUrl(blockfoodIllustration)} alt="BlockFood Illustration"/>
                </section>
            </div>
        )
    }
}