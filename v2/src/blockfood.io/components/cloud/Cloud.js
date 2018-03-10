import React from 'react'
import ReactDOM from 'react-dom'
import {cleanUrl, getScrollValue} from '../../utils/Utils'

import './Cloud.scss'

import icon_Bf from '../../style/images/icon_Bf.svg'

export default class Cloud extends React.Component {

    constructor(props) {
        super(props)

        this.onScroll = this.onScroll.bind(this)
    }

    onScroll() {
        this.parallaxElement.style.transform = `translateY(${this.props.depth * getScrollValue()}px)`
    }

    componentDidMount() {
        this.parallaxElement = ReactDOM.findDOMNode(this).querySelector('.cloud-parallax')

        this.props.depth && window.addEventListener('scroll', this.onScroll, false)
    }

    componentWillUnmount() {
        this.props.depth && window.addEventListener('scroll', this.onScroll, false)
    }

    render() {
        const {index, animated} = this.props

        return (
            <div className={`cloud${animated ? ` animated-${animated}` : ''}`}>
                <div className='cloud-parallax'>
                    <svg>
                        <use xlinkHref={cleanUrl(icon_Bf + `#cloud_${index < 10 ? `0${index}` : index}`)}/>
                    </svg>
                </div>
            </div>
        )
    }
}