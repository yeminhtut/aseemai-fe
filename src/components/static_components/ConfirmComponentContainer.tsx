import { connect } from 'react-redux'
import { withTranslation } from 'react-i18next'
import { withRouter } from 'react-router-dom'

import ConfirmComponent from './ConfirmComponent'

const ConfirmComponentContainer = (props: any) => <ConfirmComponent {...props} />

const mapStateToProps = (state: any) => ({})

const mapDispatchToProps = {}

export default withTranslation()(
    connect(mapStateToProps, mapDispatchToProps)(withRouter(ConfirmComponentContainer))
)
