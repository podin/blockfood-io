import * as _ from 'lodash'
import React from 'react'

import DATA_ROAD_MAP from '../../../data/DataRoadMap'

import './Roadmap.scss'

export default class Roadmap extends React.Component {
    render() {
        return (
            <div className="roadmap">
                {_.map(DATA_ROAD_MAP, year => (
                    <div key={year.date} className="item">
                        <span className="node">
                            <div>{year.date}</div>
                        </span>

                        {_.map(year.content, (step, stepIndex) => (
                            <React.Fragment key={stepIndex}>
                                <div className="step-wrapper">

                                    <div className={'step ' + (stepIndex % 2 === 0 ? 'left' : 'right')}>
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
                            </React.Fragment>
                        ))}
                    </div>
                ))}
            </div>
        )
    }
}