import React from 'react'
import ReactDOM from 'react-dom'
import Http from 'axios'

import DEPLOY_CONFIG from '../../../../../static.deploy-config'

import './Subscription.scss'

const SUBSCRIPTION_STATUS = {NONE: 'NONE', PENDING: 'PENDING', SUCCESS: 'SUCCESS', FAILURE: 'FAILURE'}

export default class Subscription extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            subscribeInputValue: '',
            subscriptionStatus: SUBSCRIPTION_STATUS.NONE
        }

        this.onSubscribeValueChange = this.onSubscribeValueChange.bind(this)
        this.onSubscribeSubmit = this.onSubscribeSubmit.bind(this)
    }

    sendSubscriptionRequest(email) {
        return Http.get(DEPLOY_CONFIG.subscriptionEndPoint + encodeURIComponent(email)).then(response => {
            return /^KO/.test(response) ? Promise.reject(response) : response
        })
    }

    onSubscribeValueChange(event) {
        this.setState({subscribeInputValue: event.target.value, subscriptionStatus: SUBSCRIPTION_STATUS.NONE})
    }

    onSubscribeSubmit(event) {
        event.preventDefault()

        const {subscribeInputValue, subscriptionStatus} = this.state

        if (subscribeInputValue.length > 0 && subscriptionStatus === SUBSCRIPTION_STATUS.NONE) {
            this.resetSubscriptionStatusTimeout && clearTimeout(this.resetSubscriptionStatusTimeout)

            const clearSubscriptionStatus = () => {
                this.resetSubscriptionStatusTimeout = setTimeout(() => {
                    this.setState({subscriptionStatus: SUBSCRIPTION_STATUS.NONE})
                    this.resetSubscriptionStatusTimeout = null
                }, 3000)
            }

            const onSuccess = () => {
                this.setState({subscribeInputValue: '', subscriptionStatus: SUBSCRIPTION_STATUS.SUCCESS})
                clearSubscriptionStatus()
            }

            const onFailure = () => {
                this.setState({subscriptionStatus: SUBSCRIPTION_STATUS.FAILURE})
                clearSubscriptionStatus()
            }

            this.inputElement.blur()
            this.setState({subscriptionStatus: SUBSCRIPTION_STATUS.PENDING})
            this.sendSubscriptionRequest(subscribeInputValue).then(onSuccess).catch(onFailure)
        }
    }

    componentDidMount() {
        this.inputElement = ReactDOM.findDOMNode(this).querySelector('input')
    }

    render() {
        const {subscribeInputValue, subscriptionStatus} = this.state

        return (
            <div id="bfio-subscription-form">
                <form className={subscriptionStatus === SUBSCRIPTION_STATUS.PENDING ? 'pending' : ''} onSubmit={this.onSubscribeSubmit}>
                    <div className="input">
                        <label htmlFor="bfio-input-subscribe"><i className="fas fa-at"/></label>
                        <input id="bfio-input-subscribe"
                               placeholder='Enter your email' autoComplete="off"
                               value={subscribeInputValue} onChange={this.onSubscribeValueChange}/>
                    </div>
                    <button type="submit" className={subscribeInputValue.length > 0 ? 'active' : ''}>Subscribe</button>
                </form>
                <div className="subscribe-feedback">
                    <h6 className={subscriptionStatus === SUBSCRIPTION_STATUS.SUCCESS ? 'visible' : ''}>
                        Subscription succeeded. Thank you!
                    </h6>
                    <h6 className={`error${subscriptionStatus === SUBSCRIPTION_STATUS.FAILURE ? ' visible' : ''}`}>
                        Subscription failed. Check your email and try again.
                    </h6>
                    {subscriptionStatus === SUBSCRIPTION_STATUS.PENDING && <div className="loader"><i className="fas fa-circle-notch"/></div>}
                </div>
            </div>
        )
    }
}