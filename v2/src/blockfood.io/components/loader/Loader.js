import React from 'react'
import {Link} from 'react-static'
import {cleanUrl} from '../../utils/Utils'

import './Loader.scss'

import icon_Bf from '../../style/images/icon_Bf.svg'

export default class Loader extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            visible: true,
            loading: true
        }

        this.onLoaderTransitionEnd = this.onTransitionEnd.bind(this)
    }

    onTransitionEnd() {
        this.setState({visible: false})
    }

    componentDidMount() {
        setTimeout(() => this.setState({loading: false}), 1000)
    }

    render() {
        const {visible, loading} = this.state

        return (
            <div id="bfio-loader" className={`${!loading ? 'fade-out' : ''}`} style={{display: !visible ? 'none' : ''}}
                 onTransitionEnd={this.onLoaderTransitionEnd}>
                <svg>
                    <use xlinkHref={cleanUrl(icon_Bf + '#logo_small')}/>
                </svg>
            </div>
        )
    }
}