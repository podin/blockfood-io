import * as _ from 'lodash'
import {scrollTo} from '../../../utils/Utils'

export default class HeaderNavigationHandler {
    constructor() {
        this.currentActiveLinkElement = null

        this._updateActiveLink = _.debounce(this._updateActiveLink.bind(this), 100)
        this._scrollToTop = this._scrollToTop.bind(this)
        this._scrollOnClickIfAlreadyActive = this._scrollOnClickIfAlreadyActive.bind(this)

        this._registerElements()
        this._updateActiveLink()
        this._bindEvents()
    }

    _registerElements() {
        this.linkHrefs = []
        this.linkElements = {}
        this.anchorElements = {}
        this.linkTopElement = document.querySelector('#bfio-header-logo a')

        _.map(document.querySelectorAll('#bfio-header-nav a'), linkElement => {
            if (linkElement.href.indexOf('#') !== -1) {
                const anchor = linkElement.href.split('#')[1]
                const anchorElement = document.querySelector(`#bfio-content #${anchor}`)

                if (anchorElement) {
                    const linkHref = linkElement.href.split(window.location.origin)[1]
                    this.linkHrefs.push(linkHref)
                    this.linkElements[linkHref] = linkElement
                    this.anchorElements[linkHref] = anchorElement
                }
            }
        })
    }

    _setActiveLinkElement(linkElement) {
        if (linkElement !== this.currentActiveLinkElement) {
            if (this.currentActiveLinkElement) {
                this.currentActiveLinkElement.classList.remove('active')
                this.currentActiveLinkElement = null
            }

            if (linkElement) {
                this.currentActiveLinkElement = linkElement
                this.currentActiveLinkElement.classList.add('active')
            }
        }
    }

    _updateActiveLink() {
        const minTop = 3 * (window.innerHeight / 4)
        const minBottom = 150

        const visibleLinkHref = _.last(_.filter(this.linkHrefs, linkHref => {
                const {top, bottom} = this.anchorElements[linkHref].getBoundingClientRect()
                return !(top > minTop || bottom < minBottom || bottom < minTop)
            })) || null

        const visibleLinkElement = visibleLinkHref ? this.linkElements[visibleLinkHref] : null
        this._setActiveLinkElement(visibleLinkElement)
    }

    _scrollToTop() {
        scrollTo(0)
    }

    _scrollOnClickIfAlreadyActive(event) {
        this._setActiveLinkElement(event.target)

        if (event.target.href === window.location.href) {
            scrollTo(document.querySelector(`#${event.target.href.split('#')[1]}`), {offset: -150})
        }
    }

    _bindEvents() {
        _.forEach(this.linkElements, linkElement => {
            linkElement.addEventListener('click', this._scrollOnClickIfAlreadyActive, false)
        })
        this.linkTopElement.addEventListener('click', this._scrollToTop, false)
        window.addEventListener('scroll', this._updateActiveLink, false)
    }

    destroy() {
        this._setActiveLinkElement(null)

        _.forEach(this.linkElements, linkElement => {
            linkElement.removeEventListener('click', this._scrollOnClickIfAlreadyActive, false)
        })
        this.linkTopElement.removeEventListener('click', this._scrollToTop, false)
        window.removeEventListener('scroll', this._updateActiveLink, false)
    }
}
