import { connect } from 'react-redux'
import { withTranslation } from 'react-i18next'
import { withRouter } from 'react-router-dom'
import ConfirmLoanIsSaved from './ConfirmLoanIsSaved'
import { getApplicationById } from '../../store/actions/customer'
import get from 'lodash/get'

const ConfirmLoanIsSavedContainer = (props: any) => <ConfirmLoanIsSaved {...props} />

const mapStateToProps = (state: any) => ({
    applicationDetail: state.customer.application,
    applicationStringId : get(state.customer.application, 'applicationStringId') || '',
})

const mapDispatchToProps = {
    getApplicationById
}

export default withTranslation()(
    connect(mapStateToProps, mapDispatchToProps)(withRouter(ConfirmLoanIsSavedContainer))
)
