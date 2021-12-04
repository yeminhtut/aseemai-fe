import { connect } from 'react-redux'
import { withTranslation } from 'react-i18next'
import { withRouter } from 'react-router-dom'
import LoanApplicationError from './LoanApplicationError'
import { getApplicationById } from '../../store/actions/customer'
import get from 'lodash/get'

const LoanApplicationErrorContainer = props => <LoanApplicationError {...props} />

const mapStateToProps = state => ({
    applicationDetail: state.customer.application,
    clientId : get(state.customer.application, 'customerId') || '',
    applicationStringId : get(state.customer.application, 'applicationStringId') || '',
})

const mapDispatchToProps = {
    getApplicationById
}

export default withTranslation()(
    connect(mapStateToProps, mapDispatchToProps)(withRouter(LoanApplicationErrorContainer))
)
