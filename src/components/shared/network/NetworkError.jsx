import React, { Component, Fragment } from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import { translate } from 'react-i18next'
import { withRouter } from 'react-router-dom'
import cx from 'classnames'
import get from 'lodash/get'
import NoInternetIcon from '../../../assets/img/icons/ic-no-internet--gray.svg'

class NetworkError extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isDisconnected: props.inline ? true : false
        }
    }

    componentDidUpdate(prevProps) {
        const { inline, isNetworkOnline } = this.props

        if (
            !inline &&
            get(this.props, 'location.pathname') !== get(prevProps, 'location.pathname') &&
            !isNetworkOnline
        ) {
            setTimeout(() => {
                // to make sure page goes back on top to show header
                window.scroll(-1, 0)
                document.body.style.overflowY = 'hidden'

                // workaround for ios safari bug
                document.addEventListener('touchmove', e => e.preventDefault(), { passive: false })

                this.setState({ isDisconnected: true })
            }, 0)
        }
    }

    handleCheck = () => {
        const { isNetworkOnline } = this.props
        if (isNetworkOnline) {
            window.location.reload()
            setTimeout(() => {
                document.body.style.overflowY = 'auto'
                this.setState({ isDisconnected: false })
            }, 500)
        }
    }

    render() {
        const { inline, t } = this.props
        const { isDisconnected } = this.state

        return (
            <Fragment>
                {isDisconnected && (
                    <div className='fixed top-0 w-100 bg-transparent' style={{ height: '55px', zIndex: '999999' }} />
                )}
                <div
                    className={cx({
                        'fixed top-0 w-100 flex flex-column items-center justify-center': true,
                        'bg-white': inline,
                        'bg-grey-ec': !inline,
                        hide: !isDisconnected
                    })}
                    style={
                        inline
                            ? {
                                  minHeight: 'calc(100vh - 180px)',
                                  zIndex: '11',
                                  top: '125px'
                              }
                            : {
                                  minHeight: '100vh',
                                  zIndex: '999999',
                                  top: '55px'
                              }
                    }
                >
                    <img src={NoInternetIcon} />
                    <div className='c-grey-4a f14 mt32'>{t('traffic_label_nointernet')}</div>
                    <div className='c-eatigo-red f14 mt16 pointer' onClick={this.handleCheck}>
                        {t('common_tryagain')}
                    </div>
                </div>
            </Fragment>
        )
    }
}

NetworkError.propTypes = {
    inline: PropTypes.bool,
    isNetworkOnline: PropTypes.bool,
    location: PropTypes.object,
    t: PropTypes.func
}

NetworkError.defaultProps = {
    inline: false
}

const mapStateToProps = store => ({
    isNetworkOnline: store.network.isNetworkOnline
})

const translated = translate('translations')(NetworkError)

export default withRouter(connect(mapStateToProps, null)(translated))
