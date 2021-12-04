import { connect } from 'react-redux'
import { withTranslation } from 'react-i18next'
import { withRouter } from 'react-router-dom'
import get from 'lodash/get'
import ConfirmAdditionalInformation from './ConfirmAdditionalInformation'
import { getApplicationById } from '../../store/actions/customer'

const ConfirmAdditionalInformationContainer = props => <ConfirmAdditionalInformation {...props} />

const mapStateToProps = state => ({
    applicationDetail: state.customer.application,
    clientId : get(state.customer.application, 'customerId') || '',
    applicationStringId : get(state.customer.application, 'applicationStringId') || '',
})

const mapDispatchToProps = {
    getApplicationById
}

export default withTranslation()(
    connect(mapStateToProps, mapDispatchToProps)(withRouter(ConfirmAdditionalInformationContainer))
)
