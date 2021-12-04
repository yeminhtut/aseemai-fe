import React, { Component, Fragment } from 'react'
import { PropTypes } from 'prop-types'
import NetworkError from './NetworkError'

class NetworkListener extends Component {
    render() {
        const { children } = this.props
        return (
            <Fragment>
                {children}
                <NetworkError />
            </Fragment>
        )
    }
}

NetworkListener.propTypes = {
    children: PropTypes.any
}

export default NetworkListener
