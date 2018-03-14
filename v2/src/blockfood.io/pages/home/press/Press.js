import React from 'react'
import {cleanUrl} from '../../../utils/Utils'

import DATA_PRESS from '../../../data/DataPress'

import './Press.scss'

export default class Press extends React.Component {
    constructor(props) {
        super(props)

        this.onClick = this.onClick.bind(this)
    }

    onClick(event) {
        let target = event.target, isLink = false
        while (!target.classList.contains('link') && !isLink) {
            target = target.parentElement
            isLink = target.nodeName === 'A'
        }

        if (!isLink) {
            window.open(target.querySelector('a').href, '_blank')
        }
    }

    render() {
        return (
            <React.Fragment>
                {_.map(DATA_PRESS, (press, index) => (
                    <div key={index} className="link" onClick={this.onClick}>
                        <div className="image">
                            <img src={cleanUrl(press.image)} alt={press.title}/>
                        </div>
                        <div className="desc">
                            <div className="title">{press.title}</div>
                            <div className="links">
                                {_.map(press.langs, (lang, index) => (
                                    <a key={index} href={lang.url} target="_blank">
                                        <span>{lang.code}</span>
                                        <i className="fas fa-external-link-square-alt"/>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </React.Fragment>
        )
    }
}