import { useEffect } from "react";
import { Box } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import ConfirmComponentContainer from "./ConfirmComponentContainer";
import FileStorage from "../../assets/img/file-storage.png";

const ConfirmLoanIsSaved = (props) => {
    const { history, getApplicationById, applicationStringId } = props;
    const { applicationId } = props.match.params;

    useEffect(() => {
        getApplicationById(applicationId)
    },[])

    const handleNext = () => {
        history.push('/dashboard');
    };
    const content = <Box mb="16px" mt="52px" color="#212121" fontSize="24px">
        <Box mb="16px">
            This loan applicatoin is saved.
        </Box>
        <Box mb="16px">
            The application ID is <b style={{ color: "#70b0ed" }}>#{applicationStringId}</b>.
        </Box>  
        <Box>
            Customer can provide the details later for submission.
        </Box>
    </Box >

    const buttons = <Button
        variant="contained"
        onClick={handleNext}
        type="submit"
        style={{ backgroundColor: "#5F56A6", font: "16px", padding: "10px 30px", textTransform: "none", color: "white" }}
    >
        Done
    </Button>

    return (
        <ConfirmComponentContainer
            icon={FileStorage}
            content={content}
            buttons={buttons}
        />
    );
};

export default ConfirmLoanIsSaved;
