import React from 'react'

import {
    DATA_LINKS_HEADER_NAV,
    DATA_LINK_OSE_WEBSITE,
    DATA_LINK_CONTACT,
    DATA_LINKS_LEGAL,
    DATA_LINKS_SOCIALS
} from '../../data/DataLinks'
import LinkWrapper from '../linkWrapper/LinkWrapper'
import Cloud from '../cloud/Cloud'

import './Footer.scss'

export default () => (
    <div id="bfio-footer">
        <div id="bfio-footer-width">
            <div id="bfio-footer-top">
                <div>
                    <h6>BlockFood</h6>
                    {LinkWrapper.fromData(DATA_LINKS_HEADER_NAV)}
                </div>
                <div>
                    <h6>Open Sharing Economy foundation</h6>
                    {LinkWrapper.fromData(DATA_LINK_OSE_WEBSITE)}
                </div>
                <div>
                    <h6>Contact Us</h6>
                    {LinkWrapper.fromData(DATA_LINK_CONTACT)}
                </div>
                <div>
                    <h6>Legal</h6>
                    {LinkWrapper.fromData(DATA_LINKS_LEGAL)}
                </div>
            </div>
            <div id="bfio-footer-bottom">
                <div id="bfio-footer-links">
                    <div>
                        {LinkWrapper.fromData(DATA_LINKS_SOCIALS)}
                    </div>
                </div>
                <div id="bfio-footer-copyright">
                    <div id="bfio-footer-copyright-right">
                        « Give the sharing economy back to the people »
                        <Cloud index="7"/>
                    </div>
                    <div id="bfio-footer-copyright-left">
                        © 2018 BlockFood - Open Sharing Economy foundation
                    </div>
                </div>
            </div>
        </div>
    </div>
)