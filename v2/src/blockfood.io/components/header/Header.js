import React from 'react'
import {Link} from 'react-static'
import {cleanUrl, getScrollValue} from '../../utils/Utils'

import {
    DATA_LINKS_HEADER_NAV,
    DATA_LINK_HOME,
    DATA_LINKS_HEADER_SOCIALS_SUBSCRIBE
} from '../../data/DataLinks'
import LinkWrapper from '../linkWrapper/LinkWrapper'

import './Header.scss'

import icon_Bf from '../../style/images/icon_Bf.svg'

export default class Header extends React.Component {
    componentDidMount() {
        window.addEventListener('scroll', () => {
            const isScrolled = getScrollValue() > 0
            document.body.className = isScrolled ? 'scrolled' : ''
        }, false)
    }

    render() {
        return (
            <header id="bfio-header">
                <div className="header-content">
                    <div id="bfio-logo">
                        {LinkWrapper.fromData(DATA_LINK_HOME, (
                            <svg width="300" height="150">
                                <use xlinkHref={cleanUrl(icon_Bf + '#logo')}/>
                            </svg>
                        ))}
                    </div>
                    <nav id="bfio-header-nav">
                        {LinkWrapper.fromData(DATA_LINKS_HEADER_NAV)}
                    </nav>
                    <div className="links">
                        {LinkWrapper.fromData(DATA_LINKS_HEADER_SOCIALS_SUBSCRIBE)}
                    </div>
                </div>
            </header>
        )
    }
}