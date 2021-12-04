import { useEffect } from "react";
import { Box, Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import  ConfirmComponentContainer from "./ConfirmComponentContainer";
import Documents from "../../assets/img/documents.png";

const ConfirmAdditionalInformation = (props) => {
    const { history, getApplicationById, applicationStringId, clientId } = props;
    const { applicationId } = props.match.params;

    useEffect(() => {
        getApplicationById(applicationId)
    }, [applicationStringId])

    const handleExit = () => {
        history.push('/dashboard');
    }

    const handleNext = () => {
        history.push(`/client/${clientId}/application/${applicationId}/supporting-document`); // Todo: change route when implement this step
    };
    const content = <Box mb="16px" mt="52px" color="#212121" fontSize="24px">
        <Box mb="16px">
            Additional information and documents are required
            before approving this loan application.
        </Box>
        <Box>
            The application ID is <b style={{ color: "#70b0ed" }}>#{applicationStringId}</b>.
        </Box>
    </Box >

    const buttons = <Box display="flex" flexDirection="row" justifyContent="space-between">
        <Box width="45%">
            <Button
                fullWidth
                variant="outlined"
                onClick={handleExit}
                type="submit"
                style={{ font: "16px", textTransform: "none", border: "1px solid #5F56A6", color: "#5F56A6", padding: "10px 0" }}
            >
                Exit
            </Button>
        </Box>

        <Box width="45%">
            <Button
                fullWidth
                variant="contained"
                onClick={handleNext}
                type="submit"
                style={{ backgroundColor: "#5F56A6", font: "16px", textTransform: "none", color: "white", padding: "10px 0" }}
            >
                Continue
            </Button>
        </Box>
    </Box>
    return (
        <ConfirmComponentContainer
            icon={Documents}
            content={content}
            buttons={buttons}
        />
    );
};

const PaperTitle = (props) => {
    const { classes, text } = props;
    return <Typography className={classes.paperLabel}>{text}</Typography>;
};

export default ConfirmAdditionalInformation;
