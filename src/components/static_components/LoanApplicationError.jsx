import { Box, Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { ConfirmComponentContainer } from "../ConfirmComponent";
import Sad from "../../assets/img/sad.png";
import { useEffect } from "react";

const LoanApplicationError = (props) => {
    const { history, getApplicationById, applicationStringId } = props;
    const { applicationId } = props.match.params;

    useEffect(() => {
        getApplicationById(applicationId)
    }, [applicationId])

    const handleNext = () => {
        history.push('/dashboard'); // Todo: change route when implement this step
    };
    const content = <Box mb="16px" mt="52px" color="#212121" fontSize="24px">
        <Box mb="16px">
            Sorry, this loan application cannot proceed.
        </Box>
        <Box>
            The application ID is <b style={{ color: "#70b0ed" }}>#{applicationStringId}</b>.
        </Box>
    </Box >

    const buttons =
            <Button
                variant="contained"
                onClick={handleNext}
                type="submit"
                style={{ backgroundColor: "#5F56A6", font: "16px", textTransform: "none", color: "white", padding: "10px 50px" }}
            >
                Done
            </Button>
    return (
        <div style={{ marginTop: '56px'}}>
            <ConfirmComponentContainer
            icon={Sad}
            content={content}
            buttons={buttons}
        />
        </div>
    );
};

export default LoanApplicationError;
