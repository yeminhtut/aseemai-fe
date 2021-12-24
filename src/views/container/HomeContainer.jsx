import React, { Component }  from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import DashboardComponent from '../Index'

const DashboardContainer = (props) => <DashboardComponent {...props} />

const mapStateToProps = (state) => {}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(DashboardContainer))
