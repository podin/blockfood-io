import * as _ from 'lodash'

export const DATA_LINK_HOME = {to: '/', label: 'Home'}
export const DATA_LINK_ABOUT = {to: '/#about', label: 'Project'}
export const DATA_LINK_ROADMAP = {to: '/#roadmap', label: 'Road map'}
export const DATA_LINK_TEAM = {to: '/#team', label: 'Team'}
export const DATA_LINK_WHITEPAPER = {to: '/whitepaper', label: 'White paper'}
export const DATA_LINK_SUBSCRIBE = {to: '/#subscribe', label: 'Join whitelist', 'className': 'subscribe'}
export const DATA_LINK_TERMS = {to: '/terms', label: 'Terms of service'}
export const DATA_LINK_PRIVACY = {to: '/privacy', label: 'Privacy policy'}
export const DATA_LINK_DISCLAIMER = {to: '/disclaimer', label: 'Disclaimer'}

export const DATA_LINK_OSE_WEBSITE = {href: 'https://opensharingeconomy.foundation', label: 'Website'}

export const DATA_LINK_CONTACT = {href: 'mailto:contact@blockfood.io', label: 'contact@blockfood.io', target: '_self'}

export const DATA_LINK_TWITTER = {href: 'https://twitter.com/BlockFood', icon: 'fab fa-twitter'}
export const DATA_LINK_GITHUB = {href: 'https://github.com/BlockFood', icon: 'fab fa-github'}
export const DATA_LINK_MEDIUM = {href: 'https://medium.com/blockfood', icon: 'fab fa-medium-m'}
export const DATA_LINK_TELEGRAM = {href: 'https://t.me/blockfood', icon: 'fab fa-telegram'}

export const DATA_LINK_BLOG_INTRO = {href: 'https://medium.com/blockfood/announcing-blockfood-d7c3b3c67666', label: 'Introducing BlockFood', tag: 'Blog'}
export const DATA_LINK_BITCOINTALK_ANNOUNCE = {href: 'https://bitcointalk.org/index.php?topic=2633056.0', label: 'BitcoinTalk Announce', tag: 'Thread'}
export const DATA_LINK_BITCOINTALK_BOUNTY = {href: 'https://bitcointalk.org/index.php?topic=2645612', label: 'BitcoinTalk Bounty Campaign', tag: 'Thread'}
export const DATA_LINK_GITHUB_PRE_SALE_SMART_CONTRACT = {href: 'https://github.com/BlockFood/smart-contract-pre-sale', label: 'Pre-Sale Smart Contract', tag: 'GitHub'}
export const DATA_LINK_GITHUB_SITE = {href: 'https://github.com/BlockFood/blockfood-io', label: 'BlockFood.io source code', tag: 'GitHub'}
export const DATA_LINK_GITHUB_API_TOKEN_SALE = {href: 'https://github.com/BlockFood/api-token-sale', label: 'API for our Token-Sale', tag: 'GitHub'}

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

export const DATA_LINKS_BROWSE = [
    DATA_LINK_BLOG_INTRO,
    DATA_LINK_BITCOINTALK_ANNOUNCE,
    DATA_LINK_BITCOINTALK_BOUNTY,
    DATA_LINK_GITHUB_PRE_SALE_SMART_CONTRACT,
    DATA_LINK_GITHUB_SITE,
    DATA_LINK_GITHUB_API_TOKEN_SALE
]