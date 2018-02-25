import * as _ from 'lodash'
import React from 'react'
import {Link} from 'react-static'

class LinkWrapper extends React.Component {
    render() {
        const {icon, label, className, href, to} = this.props

        const inner = icon ? <i className={icon}/> : label
        const linkClassName = className || null

        if (href) {
            return <a href={href} target="_blank" className={linkClassName}>{inner}</a>
        }
        else {
            return <Link to={to} className={linkClassName}>{inner}</Link>
        }
    }
}

LinkWrapper.fromData = data => _.map(data, dataItem => <LinkWrapper key={dataItem.id} {...dataItem}/>)

export default LinkWrapper