import * as _ from 'lodash'
import React from 'react'
import ReactDOM from 'react-dom'
import {cleanUrl, getScrollValue} from '../../utils/Utils'

import './Cloud.scss'

import icon_Bf from '../../style/images/icon_Bf.svg'

const STABILIZATION_THRESHOLD = 10

export default class Cloud extends React.Component {

    constructor(props) {
        super(props)

        this.stabilizedCount = 0

        this.setPosition = this.setPosition.bind(this)
        this.resetPosition = this.resetPosition.bind(this)
    }

    setPosition() {
        const scrollValue = getScrollValue()

        if (scrollValue >= this.threshold) {
            this.parallaxElement.style.transform = `translateY(${this.props.depth * (scrollValue - this.threshold)}px)`
        }
        else {
            this.parallaxElement.style.transform = `translateY(0px)`
        }
    }

    resetPosition() {
        this.intervalStabilization && clearInterval(this.intervalStabilization)
        this.stabilizedCount = 0

        const offsetTop = this.previousOffsetTop = this.containerElement.getBoundingClientRect().top + getScrollValue()
        this.threshold = this.previousThreshold = Math.max(0, offsetTop - window.innerHeight)

        this.setPosition()

        this.intervalStabilization = setInterval(this.stabilize.bind(this), 500)
    }

    stabilize() {
        const offsetTop = this.containerElement.getBoundingClientRect().top + getScrollValue()
        const threshold = Math.max(0, offsetTop - window.innerHeight)

        if (offsetTop === this.previousOffsetTop && threshold === this.previousThreshold) {
            this.stabilizedCount++;

            this.previousOffsetTop = offsetTop
            this.previousThreshold = threshold

            if (this.stabilizedCount === STABILIZATION_THRESHOLD) {
                clearInterval(this.intervalStabilization)
                this.intervalStabilization = null
            }
        }
        else {
            this.resetPosition()
        }
    }

    componentDidMount() {
        if (this.props.depth) {
            this.containerElement = ReactDOM.findDOMNode(this)
            this.parallaxElement = this.containerElement.querySelector('.cloud-parallax')

            window.addEventListener('scroll', this.setPosition, false)
            window.addEventListener('resize', this.resetPosition, false)

            this.resetPosition()
        }
    }

    componentWillUnmount() {
        if (this.props.depth) {
            window.addEventListener('scroll', this.setPosition, false)
            window.addEventListener('resize', this.resetPosition, false)

            this.intervalStabilization && clearInterval(this.intervalStabilization)
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