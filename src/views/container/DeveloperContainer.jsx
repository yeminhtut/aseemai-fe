import React, { Component }  from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import DashboardComponent from '../Developer'
import { createDeveloper} from '../../store/actions/customer'

const DeveloperContainer = (props) => <DashboardComponent {...props} />

const mapStateToProps = (state) => {
    return {
        createdDeveloper: state.customer.createdDeveloper || {},
        isLoadingCreateDeveloper: state.customer.isLoadingCreateDeveloper
    }
}

const mapDispatchToProps = {
    createDeveloper
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(DeveloperContainer))
