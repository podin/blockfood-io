import * as _ from 'lodash'
import React from 'react'
import {Link} from 'react-static'

class LinkWrapper extends React.Component {
    render() {
        const {icon, label, children, className, href, target, to, before, after} = this.props

        const inner = children ? children : icon ? <i className={icon}/> : label
        const linkClassName = className || null

        if (href) {
            return (
                <a href={href} target={target || '_blank'} className={linkClassName}>
                    {before}
                    {inner}
                    {after}
                </a>
            )
        }
        else {
            return <Link to={to} className={linkClassName}>{inner}</Link>
        }
    }
}

LinkWrapper.fromData = (_data, children = null, dataOverride = {}) => {
    const data = _.map(_.isArray(_data) ? _data : [_data], dataItem => {
        const newData = {}
        _.assign(newData, dataItem, dataOverride)
        return newData
    })

    if (children) {
        return _.map(data, (dataItem, index) => (
            <LinkWrapper key={index} {...dataItem}>
                {children}
            </LinkWrapper>
        ))
    }
    else {
        return _.map(data, (dataItem, index) => <LinkWrapper key={index} {...dataItem}/>)
    }
}

export default LinkWrapper