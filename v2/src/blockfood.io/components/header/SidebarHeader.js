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
        this.rootElement.className = visible ? 'header-sidebar-opened' : ''
        this.setState({visible})
    }

    toggleNavBar() {
        this.setNavBarVisible(!this.state.visible)
    }

    closeIfVisible(event) {
        if (this.state.visible && event.target !== this.btnElement && !this.btnElement.contains(event.target)) {
            this.setNavBarVisible(false)
        }
    }

    closeImmediatelyIfVisible() {
        if (this.state.visible) {
            document.body.classList.add('no-transition')
            this.setNavBarVisible(false)
            setTimeout(() => document.body.classList.remove('no-transition'), 0)
        }
    }

    componentDidMount() {
        this.btnElement = document.querySelector('#bfio-header-sidebar-btn')
        this.rootElement = document.querySelector('#root')

        window.addEventListener('resize', this.closeImmediatelyIfVisible.bind(this), false)
        window.addEventListener('scroll', this.closeIfVisible.bind(this), false)
        window.addEventListener('click', this.closeIfVisible.bind(this), false)
    }

    render() {
        const {visible} = this.state

        return (
            <React.Fragment>
                <div id="bfio-header-sidebar-btn" className={visible ? 'active' : ''} onClick={this.toggleNavBar}>
                    <i/>
                </div>
                <div id="bfio-header-sidebar-nav">
                    <nav>
                        {LinkWrapper.fromData(DATA_LINKS_SIDEBAR_HEADER)}
                    </nav>
                </div>
            </React.Fragment>
        )
    }
}