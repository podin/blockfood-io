import * as _ from 'lodash'
import React from 'react'

import HeaderLink from './HeaderLink'
import HeaderData from './data/HeaderData.json'

import './SidebarHeader.scss'

export default class SidebarHeader extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            visible: false
        }

        this.toggleNavBar = this.toggleNavBar.bind(this)
    }

    toggleNavBar() {
        const visible = !this.state.visible

        _.forEach(this.rootElements, element => element.className = visible ? 'offsetX' : '')
        this.setState({visible})
    }

    componentDidMount() {
        this.rootElements = document.querySelectorAll('#bfio-wrapper > *')

        window.addEventListener('scroll', () => {
            if (this.state.visible) {
                this.toggleNavBar()
            }
        }, false)
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
                        {_.map([...HeaderData.left, ...HeaderData.right], data => (
                            <HeaderLink key={data.id} {...data}/>
                        ))}
                    </nav>
                </div>
            </React.Fragment>
        )
    }
}