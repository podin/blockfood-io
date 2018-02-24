import React from 'react'
import {Link} from 'react-static'

export default (props) => {
    const inner = props.icon ? <i className={props.icon}/> : props.label
    const className = props.className || ''

    if (props.href) {
        return <a href={props.href} target="_blank" className={className}>{inner}</a>
    }
    else {
        return <Link to={props.to} className={className}>{inner}</Link>
    }
}