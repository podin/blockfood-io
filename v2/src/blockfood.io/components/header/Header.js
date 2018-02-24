import React from 'react'
import {Link} from 'react-static'
import {cleanUrl} from '../../utils/Utils'

import HeaderData from './data/HeaderData.json'
import HeaderLink from './HeaderLink'

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
                        {_.map(HeaderData.left, data => (
                            <HeaderLink key={data.id} {...data}/>
                        ))}
                    </nav>
                    <div className="links">
                        {_.map(HeaderData.right, data => (
                            <HeaderLink key={data.id} {...data}/>
                        ))}
                    </div>
                </div>
            </header>
        )
    }
}