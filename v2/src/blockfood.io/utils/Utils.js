import * as _ from 'lodash'
import {scrollTo as _scrollTo} from 'react-static'

export const cleanUrl = (url) => url.replace(/\\/g, '/')

export const getScrollValue = () => Math.max(0, document.documentElement.scrollTop || document.body.scrollTop)

export const scrollTo = (element, options) => {
    const getTop = () => {
        return Math.min(
            element.getBoundingClientRect().top + window.pageYOffset + (options.offset || 0),
            document.body.scrollHeight - window.innerHeight
        )
    }

    const scrollTarget = typeof element === 'number' ? parseInt(element) : getTop()

    if (scrollTarget !== getScrollValue()) {
        _scrollTo(element, _.merge(options, {duration: 0}))
    }
}