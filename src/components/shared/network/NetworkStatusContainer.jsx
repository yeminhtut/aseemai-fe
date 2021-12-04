import React from 'react'
import { connect } from 'react-redux'
import { setNetworkSpeed, setNetworkStatus } from '../../../store/actions/network'
import NetworkStatus from './NetworkStatus'

const NetworkStatusContainer = props => <NetworkStatus {...props} />

const mapStateToProps = state => ({
    isNetworkFast: state.network.isNetworkFast,
    isNetworkOnline: state.network.isNetworkOnline
})

const mapDispatchToProps = {
    setNetworkSpeed,
    setNetworkStatus
}

export default connect(mapStateToProps, mapDispatchToProps)(NetworkStatusContainer)
