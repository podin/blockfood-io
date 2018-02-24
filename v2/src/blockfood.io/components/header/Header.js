import React from 'react'
import {Link} from 'react-static'
import {cleanUrl} from '../../utils/Utils'

import './Header.scss'

import icon_Bf from '../../style/images/icon_Bf.svg'

export default () => (
    <header id="bfio-header">
        <div className="header-content">
            <nav id="bfio-header-nav">
                <Link to="/#about">Project</Link>
                <Link to="/#roadmap">Road map</Link>
                <Link to="/#team">Team</Link>
                <Link to="/whitepaper">White paper</Link>
            </nav>
            <Link id="bfio-logo" to="/">
                <svg>
                    <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref={cleanUrl(icon_Bf + '#logo')}/>
                </svg>
            </Link>
            <div className="links">
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <div className="subscibe">Subscribe</div>
            </div>
        </div>
    </header>
)