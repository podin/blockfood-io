import * as _ from 'lodash'
import React from 'react'
import {Link} from 'react-static'

class LinkWrapper extends React.Component {
    render() {
        const {icon, label, children, className, href, target, to} = this.props

        const inner = children ? children : icon ? <i className={icon}/> : label
        const linkClassName = className || null

        if (href) {
            return <a href={href} target={target || '_blank'} className={linkClassName}>{inner}</a>
        }
        else {
            return <Link to={to} className={linkClassName}>{inner}</Link>
        }
    }
}

LinkWrapper.fromData = (_data, children = null) => {
    const data = _.isArray(_data) ? _data : [_data]

    if (children) {
        return _.map(data, dataItem => (
            <LinkWrapper key={dataItem.id} {...dataItem}>
                {children}
            </LinkWrapper>
        ))
    }
    else {
        return _.map(data, dataItem => <LinkWrapper key={dataItem.id} {...dataItem}/>)
    }
}

export default LinkWrapper