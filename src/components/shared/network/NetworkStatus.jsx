import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { translate } from 'react-i18next'
import MobileDetect from 'mobile-detect'
import cx from 'classnames'
import Snackbar from '../snackbar'
import NoInternetIcon from '../../../assets/img/icons/ic-no-internet.svg'

const NETWORK_SPEED_THRESHOLD = 6000

const detector = new MobileDetect(window.navigator.userAgent)
const isPhone = !!detector.phone()

class NetworkStatus extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpen: false,
            message: ''
        }
    }

    componentDidMount() {
        if (window) {
            const { domContentLoadedEventEnd, navigationStart } = window.performance.timing
            if (domContentLoadedEventEnd && navigationStart) {
                const loadTime = domContentLoadedEventEnd - navigationStart
                if (loadTime > NETWORK_SPEED_THRESHOLD) {
                    this.handleSlow()
                }
            }

            if (!window.navigator.onLine) {
                this.handleOffline()
            }

            window.addEventListener('online', this.handleOnline)
            window.addEventListener('offline', this.handleOffline)
        }
    }

    componentDidUpdate(prevProps) {
        const { isNetworkFast, isNetworkOnline, t } = this.props

        if (isNetworkFast !== prevProps.isNetworkFast) {
            // disable for now because not used in eMerchant
            // this.setState({
            //     message: !isNetworkFast ? t('common_badinternet') : '',
            //     isOpen: !isNetworkFast
            // })
        }

        if (isNetworkOnline !== prevProps.isNetworkOnline) {
            this.setState({
                message: !isNetworkOnline ? t('traffic_label_nointernet') : '',
                isOpen: !isNetworkOnline
            })
        }
    }

    componentWillUnmount() {
        if (window) {
            window.removeEventListener('online', this.handleOnline)
            window.removeEventListener('offline', this.handleOffline)
        }
    }

    handleOnline = () => {
        const { setNetworkStatus } = this.props
        setNetworkStatus(true)
    }

    handleOffline = () => {
        const { setNetworkStatus } = this.props
        setNetworkStatus(false)
    }

    handleSlow = () => {
        const { setNetworkSpeed } = this.props
        setNetworkSpeed(false)
    }

    handleRequestClose = () => {
        this.setState({ message: '', isOpen: false })
    }

    renderContent = () => {
        const { isNetworkOnline, isNetworkFast } = this.props
        const { message } = this.state

        return (
            <div
                className='flex items-center'
                style={{
                    backgroundColor: '#313131',
                    borderRadius: '2px',
                    padding: '12px 16px'
                }}
            >
                <span
                    className={cx({
                        'connection-status lh-solid c-white f12': true,
                        offline: !isNetworkOnline,
                        slow: !isNetworkFast
                    })}
                >
                    <div className='flex items-center'>
                        <img alt='no-internet' className='mr8' src={NoInternetIcon} />
                        {message}
                    </div>
                </span>
            </div>
        )
    }

    render() {
        const { isOpen } = this.state
        const fullWidth = isPhone

        return (
            <Snackbar
                fullWidth={fullWidth}
                hideAfterClick
                isOpen={isOpen}
                message={this.renderContent()}
                onClose={this.handleRequestClose}
                style={{
                    minWidth: fullWidth ? '0px' : '344px',
                    zIndex: '11'
                }}
            />
        )
    }
}

NetworkStatus.propTypes = {
    isNetworkFast: PropTypes.bool,
    isNetworkOnline: PropTypes.bool,
    setNetworkSpeed: PropTypes.func,
    setNetworkStatus: PropTypes.func,
    t: PropTypes.func
}

export default translate('translations')(NetworkStatus)
