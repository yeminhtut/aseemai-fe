import { connect } from 'react-redux'
import { withTranslation } from 'react-i18next'
import { withRouter } from 'react-router-dom'
import { Box, Typography, Button } from "@material-ui/core";
import get from 'lodash/get'
import ConfirmAdditionalInformation from './ConfirmAdditionalInformation'
import { getApplicationById } from '../../store/actions/customer'
import ConfirmComponentContainer from "./ConfirmComponentContainer";
import FileSearch from "../../assets/img/file-search.png";

const CompleteApplication = (props: any) => {
    const { history } = props;
    const handleNext = () => {
        history.push('/dashboard');
    };
    const content = <Box mb="16px" mt="52px" color="#212121" fontSize="24px">
        <Box mb="16px">
            All information and documents are received.
        </Box>
        <Box mb="16px">
            It will take 2-3 business days to review this loan applicaiton.
        </Box>
        <Box>
            Customer will get notification once the result is given.
        </Box>
    </Box >

    const buttons = <Button
        variant="contained"
        onClick={handleNext}
        type="submit"
        style={{ backgroundColor: "#5F56A6", font: "16px", padding: "10px 30px", textTransform: "none", color: "white" }}
    >
        Ok
    </Button>

    return (
        <ConfirmComponentContainer
            icon={FileSearch}
            content={content}
            buttons={buttons}
        />
    );
}

const mapStateToProps = (state: any) => ({
    applicationDetail: state.customer.application,
    clientId : get(state.customer.application, 'customerId') || '',
    applicationStringId : get(state.customer.application, 'applicationStringId') || '',
})

const mapDispatchToProps = {
    getApplicationById
}

export default withTranslation()(
    connect(mapStateToProps, mapDispatchToProps)(withRouter(CompleteApplication))
)
