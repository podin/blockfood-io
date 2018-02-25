import * as _ from 'lodash'

export const DATA_LINK_HOME = {id: 'home', 'to': '/', label: 'Home'}
export const DATA_LINK_ABOUT = {id: 'about', 'to': '/#about', label: 'Project'}
export const DATA_LINK_ROADMAP = {id: 'roadmap', 'to': '/#roadmap', label: 'Road map'}
export const DATA_LINK_TEAM = {id: 'team', 'to': '/#team', label: 'Team'}
export const DATA_LINK_WHITEPAPER = {id: 'whitepaper', 'to': '/whitepaper', label: 'White paper'}
export const DATA_LINK_SUBSCRIBE = {id: 'subscribe', 'to': '/#subscribe', label: 'Subscribe', 'className': 'subscribe'}
export const DATA_LINK_TERMS = {id: 'terms', 'to': '/terms', label: 'Terms of service'}
export const DATA_LINK_PRIVACY = {id: 'privacy', 'to': '/privacy', label: 'Privacy policy'}
export const DATA_LINK_DISCLAIMER = {id: 'disclaimer', 'to': '/disclaimer', label: 'Disclaimer'}

export const DATA_LINK_OSE_WEBSITE = {id: 'ose_website', href: 'https://opensharingeconomy.foundation', label: 'Website'}

export const DATA_LINK_CONTACT = {id: 'contact', href: 'mailto:contact@blockfood.io', label: 'contact@blockfood.io', target: '_self'}

export const DATA_LINK_TWITTER = {id: 'twitter', href: 'https://twitter.com/BlockFood', icon: 'fab fa-twitter'}
export const DATA_LINK_GITHUB = {id: 'github', href: 'https://github.com/BlockFood', icon: 'fab fa-github'}
export const DATA_LINK_MEDIUM = {id: 'medium', href: 'https://medium.com/blockfood', icon: 'fab fa-medium-m'}
export const DATA_LINK_TELEGRAM = {id: 'telegram', href: 'https://t.me/blockfood', icon: 'fab fa-telegram'}

export const DATA_LINKS_HEADER_NAV = [
    DATA_LINK_ABOUT,
    DATA_LINK_ROADMAP,
    DATA_LINK_TEAM,
    DATA_LINK_WHITEPAPER
]

export const DATA_LINKS_SOCIALS = [
    DATA_LINK_TWITTER,
    DATA_LINK_GITHUB,
    DATA_LINK_MEDIUM,
    DATA_LINK_TELEGRAM
]

export const DATA_LINKS_HEADER_SOCIALS_SUBSCRIBE = _.flatten([
    DATA_LINKS_SOCIALS,
    DATA_LINK_SUBSCRIBE
])

export const DATA_LINKS_SIDEBAR_HEADER = _.flatten([
    DATA_LINKS_HEADER_NAV,
    DATA_LINKS_HEADER_SOCIALS_SUBSCRIBE
])

export const DATA_LINKS_LEGAL = [
    DATA_LINK_TERMS,
    DATA_LINK_PRIVACY,
    DATA_LINK_DISCLAIMER
]