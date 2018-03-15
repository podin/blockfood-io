import * as _ from 'lodash'
import React from 'react'
import {cleanUrl} from '../../utils/Utils'

import './Cloud.scss'

import icon_Bf from '../../style/images/icon_Bf.svg'

export default ({className, index, animated}) => {
    const cloudClassName = _.compact(['cloud', className, animated && `animated-${animated}`]).join(' ')

    return (
        <div className={cloudClassName}>
            <svg>
                <use xlinkHref={cleanUrl(icon_Bf + `#cloud_${index < 10 ? `0${index}` : index}`)}/>
            </svg>
        </div>
    )
}