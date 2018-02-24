import React from 'react'
import {Link} from 'react-static'
import {cleanUrl} from '../../utils/Utils'

import './Header.scss'

import icon_Bf from '../../style/images/icon_Bf.svg'

export default class Header extends React.Component {
    componentDidMount() {
        window.addEventListener('scroll', () => {
            const isScrolled = Math.max(0, document.documentElement.scrollTop || document.body.scrollTop)
            document.body.className = isScrolled ? 'scrolled' : ''
        }, false)
    }

    render() {
        return (
            <header id="bfio-header">
                <div className="header-content">
                    <div id="bfio-logo">
                        <Link to="/">
                            <svg>
                                <use xlinkHref={cleanUrl(icon_Bf + '#logo')}/>
                            </svg>
                        </Link>
                    </div>
                    <nav id="bfio-header-nav">
                        <Link to="/#about">Project</Link>
                        <Link to="/#roadmap">Road map</Link>
                        <Link to="/#team">Team</Link>
                        <Link to="/whitepaper">White paper</Link>
                    </nav>
                    <div className="links">
                        <ul>
                            <li>
                                <a href="https://twitter.com/BlockFood" target="_blank">
                                    <i className="fab fa-twitter"/>
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/BlockFood" target="_blank">
                                    <i className="fab fa-github"/>
                                </a>
                            </li>
                            <li>
                                <a href="https://medium.com/blockfood" target="_blank">
                                    <i className="fab fa-medium-m"/>
                                </a>
                            </li>
                            <li>
                                <a href="https://t.me/blockfood" target="_blank">
                                    <i className="fab fa-telegram"/>
                                </a>
                            </li>
                        </ul>
                        <Link to="/#subscribe" className="subscribe">Subscribe</Link>
                    </div>
                </div>
            </header>
        )
    }
}