import React from 'react'
import {cleanUrl} from '../../../utils/Utils'

import DATA_TEAM from '../../../data/DataTeam'

import './Team.scss'

export default class Team extends React.Component {
    getFirstName(member) {
        return member.name.split(' ')[0]
    }

    render() {
        return (
            <div className="team-grid">
                {_.map(DATA_TEAM, (member, index) => (
                    <div key={index} className="member">
                        <img className="avatar" src={cleanUrl(member.image)}
                             title={this.getFirstName(member)} alt={this.getFirstName(member)}/>
                        <div className="name">
                            <img src={cleanUrl(member.country.image)} alt={member.country.label}/>
                            <span>{member.name}</span>
                        </div>
                        <div className="role">{member.role}</div>
                        <div className="links">
                            {_.map(member.links, (link, index) => (
                                <a key={index} href={link.url} target="_blank">
                                    {link.type === 'linkedin' && <i className="fab fa-linkedin-in"/>}
                                </a>
                            ))}
                        </div>
                        <div className="desc">{member.description}</div>
                    </div>
                ))}
            </div>
        )
    }
}