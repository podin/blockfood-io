import * as _ from 'lodash'
import React from 'react'
import ReactDOM from 'react-dom'
import {cleanUrl, getScrollValue} from '../../utils/Utils'

import './Cloud.scss'

import icon_Bf from '../../style/images/icon_Bf.svg'

export default class Cloud extends React.Component {

    constructor(props) {
        super(props)

        this.onScroll = this.onScroll.bind(this)
        this.onResize = this.onResize.bind(this)
    }

    onScroll() {
        const scrollValue = getScrollValue()

        if (scrollValue >= this.threshold) {
            this.parallaxElement.style.transform = `translateY(${this.props.depth * (scrollValue - this.threshold)}px)`
        }
    }

    onResize() {
        const offsetTop = this.containerElement.getBoundingClientRect().top + getScrollValue()
        this.threshold = Math.max(0, offsetTop - window.innerHeight)

        this.onScroll()
    }

    componentDidMount() {
        if (this.props.depth) {
            this.containerElement = ReactDOM.findDOMNode(this)
            this.parallaxElement = this.containerElement.querySelector('.cloud-parallax')

            window.addEventListener('scroll', this.onScroll, false)
            window.addEventListener('resize', this.onResize, false)

            this.onResize()
        }
    }

    componentWillUnmount() {
        if (this.props.depth) {
            window.addEventListener('scroll', this.onScroll, false)
            window.addEventListener('resize', this.onResize, false)
        }
    }

    render() {
        const {className, index, animated} = this.props

        const cloudClassName = _.compact(['cloud', className, animated && `animated-${animated}`]).join(' ')

        return (
            <div className={cloudClassName}>
                <div className='cloud-parallax'>
                    <svg>
                        <use xlinkHref={cleanUrl(icon_Bf + `#cloud_${index < 10 ? `0${index}` : index}`)}/>
                    </svg>
                </div>
            </div>
        )
    }
}