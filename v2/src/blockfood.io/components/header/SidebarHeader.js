import * as _ from 'lodash'
import React from 'react'

import {DATA_LINKS_SIDEBAR_HEADER} from '../../data/DataLinks'
import LinkWrapper from '../linkWrapper/LinkWrapper'

import './SidebarHeader.scss'

export default class SidebarHeader extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            visible: false
        }

        this.toggleNavBar = this.toggleNavBar.bind(this)
    }

    setNavBarVisible(visible) {
        _.forEach(this.rootElements, element => element.className = visible ? 'offsetX' : '')
        this.setState({visible})
    }

    toggleNavBar() {
        this.setNavBarVisible(!this.state.visible)
    }

    closeIfVisible(event) {
        if (event.target !== this.btnElement && !this.btnElement.contains(event.target) && this.state.visible) {
            this.setNavBarVisible(false)
        }
    }

    componentDidMount() {
        this.btnElement = document.querySelector('#bfio-sidebar-header-toggle')
        this.rootElements = document.querySelectorAll('#bfio-wrapper > *')

        window.addEventListener('scroll', this.closeIfVisible.bind(this), false)
        window.addEventListener('click', this.closeIfVisible.bind(this), false)
    }

    render() {
        const {visible} = this.state

        return (
            <React.Fragment>
                <div id="bfio-sidebar-header-toggle" className={visible ? 'active' : ''}
                     onClick={this.toggleNavBar}><i/>
                </div>
                <div id="bfio-sidebar-header">
                    <nav>
                        {LinkWrapper.fromData(DATA_LINKS_SIDEBAR_HEADER)}
                    </nav>
                </div>
            </React.Fragment>
        )
    }
}