import React, { Component } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import noop from 'lodash/noop'
import omit from 'lodash/omit'

/*
    NOTE: this HOC enhance any presentational component
    with 3 functions. These functions should help the
    child components with date transformation before calling
    parent onChange.

    If you need to update week selection logic, eg. start from Sunday
    instead of Monday, please update here instead of doing
    transformation in child component
*/
const withWeekSelector = WrappedComponent => {
    class Wrapper extends Component {
        handlePreviousWeek = () => {
            const { isLoading, onChange, overwriteOnChange, startDate, endDate } = this.props
            if (isLoading) {
                return
            }

            const start = moment(startDate)
                .subtract(1, 'week')
                .startOf('isoWeek')
            const end = moment(endDate)
                .subtract(1, 'week')
                .endOf('isoWeek')

            if (overwriteOnChange.previous) {
                overwriteOnChange.previous(start, end)
            } else {
                onChange(start, end)
            }
        }

        handleCurrentWeek = () => {
            const { isLoading, onChange, overwriteOnChange } = this.props
            if (isLoading) {
                return
            }

            const start = moment().startOf('isoWeek')
            const end = moment().endOf('isoWeek')

            if (overwriteOnChange.current) {
                overwriteOnChange.current(start, end)
            } else {
                onChange(start, end)
            }
        }

        handleNextWeek = () => {
            const { isLoading, onChange, overwriteOnChange, startDate, endDate } = this.props
            if (isLoading) {
                return
            }

            const start = moment(startDate)
                .add(1, 'week')
                .startOf('isoWeek')
            const end = moment(endDate)
                .add(1, 'week')
                .endOf('isoWeek')

            if (overwriteOnChange.next) {
                overwriteOnChange.next(start, end)
            } else {
                onChange(start, end)
            }
        }

        render() {
            const { endDate, isLoading, startDate, ...otherProps } = this.props

            return (
                <WrappedComponent
                    {...omit(otherProps, ['onChange'])}
                    endDate={endDate}
                    isLoading={isLoading}
                    onCurrentWeek={this.handleCurrentWeek}
                    onNextWeek={this.handleNextWeek}
                    onPreviousWeek={this.handlePreviousWeek}
                    startDate={startDate}
                />
            )
        }
    }

    Wrapper.propTypes = {
        endDate: PropTypes.string.isRequired,
        isLoading: PropTypes.bool,
        onChange: PropTypes.func,
        overwriteOnChange: PropTypes.object,
        startDate: PropTypes.string.isRequired
    }

    Wrapper.defaultProps = {
        isLoading: false,
        onChange: noop,
        overwriteOnChange: {}
    }

    Wrapper.displayName = `withWeekSelector(${WrappedComponent.displayName || WrappedComponent.name})`
    return Wrapper
}

export default withWeekSelector
