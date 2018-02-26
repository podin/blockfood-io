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
    setBodyIsScrolledClassName() {
        document.body.className = getScrollValue() > 0 ? 'page-scrolled' : ''
    }

    componentDidMount() {
        window.addEventListener('scroll', this.setBodyIsScrolledClassName.bind(this), false)
    }

    render() {
        return (
            <header id="bfio-header">
                <div id="bfio-header-content">
                    <div id="bfio-header-logo">
                        {LinkWrapper.fromData(DATA_LINK_HOME, (
                            <svg width="300" height="150">
                                <use xlinkHref={cleanUrl(icon_Bf + '#logo')}/>
                            </svg>
                        ))}
                    </div>
                    <nav id="bfio-header-nav">
                        {LinkWrapper.fromData(DATA_LINKS_HEADER_NAV)}
                    </nav>
                    <div id="bfio-header-links">
                        {LinkWrapper.fromData(DATA_LINKS_HEADER_SOCIALS_SUBSCRIBE)}
                    </div>
                </div>
            </header>
        )
    }
}