import React from 'react'
import {cleanUrl} from '../../utils/Utils'

import './Cloud.scss'

import icon_Bf from '../../style/images/icon_Bf.svg'

export default ({index}) => (
    <div className="cloud">
        <svg width="150" height="150">
            <use xlinkHref={cleanUrl(icon_Bf + `#cloud_${index < 10 ? `0${index}` : index}`)}/>
        </svg>
    </div>
)