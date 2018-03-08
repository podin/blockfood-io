import React from 'react'
import ReactDOM from 'react-dom'
import {cleanUrl} from '../../utils/Utils'

import './Animation.scss'

export default class Animation extends React.Component {

    componentDidMount() {
        const {animation} = this.props

        const canvas = ReactDOM.findDOMNode(this).querySelector('canvas')

        canvas.width = animation.properties.width
        canvas.height = animation.properties.height

        const exportRoot = new animation[animation.name]()
        this.stage = new createjs.Stage(canvas)
        this.stage.addChild(exportRoot)

        window.createjs.Ticker.setFPS(animation.properties.fps)
        window.createjs.Ticker.addEventListener('tick', this.stage)
    }

    componentWillUnmount() {
        window.createjs.Ticker.removeEventListener('tick', this.stage)
    }

    render() {
        const {placeholderSrc, placeholderAlt} = this.props

        return (
            <div className="animation">
                {this.props.children}
                <img src={cleanUrl(placeholderSrc)} alt={placeholderAlt}/>
                <canvas/>
            </div>
        )
    }
}