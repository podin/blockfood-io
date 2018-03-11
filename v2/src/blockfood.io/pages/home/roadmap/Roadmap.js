import * as _ from 'lodash'
import React from 'react'
import ReactDOM from 'react-dom'

import DATA_ROAD_MAP from '../../../data/DataRoadMap'

import './Roadmap.scss'

export default class Roadmap extends React.Component {
    constructor(props) {
        super(props)

        this.onScroll = this.onScroll.bind(this)
    }

    onScroll() {
        if (this.remainningInvisibleStepElements.length > 0) {
            let lastVisibleStepElementFound = null

            _.forEach(this.remainningInvisibleStepElements, step => {
                if ((step.getBoundingClientRect().top - window.innerHeight) + 250 < 0) {
                    step.classList.add('visible')
                    lastVisibleStepElementFound = step
                    this.remainningInvisibleStepElements = _.without(this.remainningInvisibleStepElements, step)
                }
            })

            if (lastVisibleStepElementFound) {
                let offsetTop = 0
                while (lastVisibleStepElementFound !== this.containerElement) {
                    offsetTop += lastVisibleStepElementFound.offsetTop
                    lastVisibleStepElementFound = lastVisibleStepElementFound.parentElement
                }

                this.markerElement.style.transform = `translateY(-${this.containerElement.offsetHeight - offsetTop}px)`
            }
        }
    }

    componentDidMount() {
        this.containerElement = ReactDOM.findDOMNode(this)
        this.remainningInvisibleStepElements = this.containerElement.querySelectorAll('.step')
        this.markerElement = this.containerElement.querySelector('.marker')

        window.addEventListener('scroll', this.onScroll, false)
        this.onScroll()
    }

    componentWillUnmount() {
        window.addEventListener('scroll', this.onScroll, false)
    }

    render() {
        return (
            <div className="roadmap-timeline">
                <div className="marker"></div>
                {_.map(DATA_ROAD_MAP, year => (
                    <div key={year.date} className="item">
                        <div className="node">
                            <div>{year.date}</div>
                        </div>
                        {_.map(year.content, (step, stepIndex) => (
                            <React.Fragment key={stepIndex}>
                                <div className="step-wrapper">
                                    <div className={'step-overflow ' + (stepIndex % 2 === 0 ? 'left' : 'right')}>
                                        <div className="step">
                                            <div className="step-date">{step.date}</div>
                                            <ul>
                                                {_.map(step.content, (task, taskIndex) => (
                                                    <li key={taskIndex}>
                                                        {task}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </React.Fragment>
                        ))}
                    </div>
                ))}
            </div>
        )
    }
}