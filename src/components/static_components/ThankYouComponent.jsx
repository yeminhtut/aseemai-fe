import { Box, Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { ConfirmComponentContainer } from "../ConfirmComponent";

const ThankYouComponent = (props) => {
    const { history } = props;
    const { applicationId } = props.match.params;
    const handleNext = () => {
        history.push('/dashboard');
    };
    const content = <Box>
        <p
            style={{
                fontSize: "24px",
                color: "#212121",
                margin: "0px",
                marginBottom: "16px",
                marginTop: "52px",
            }}
        >
            Congratulations!<br />
            This loan application is
            in-principle approved.
        </p>
        <p
            style={{
                fontSize: "24px",
                color: "#212121",
                margin: "0px",
                marginBottom: "16px",
            }}
        >
            The application ID is <b style={{ color: "#70b0ed" }}>#{applicationId}</b>.
        </p>
        <p
            style={{
                fontSize: "24px",
                color: "#212121",
                margin: "0px",
                marginBottom: "16px",
            }}
        >
            Please submit supporting documents for verification.
        </p>
    </Box >

    const buttons = <Button
        variant="contained"
        onClick={handleNext}
        type="submit"
        style={{ backgroundColor: "#5F56A6", font: "16px", padding:"10px 30px", textTransform: "none", color: "white"}}
    >
        Continue
    </Button>


    return (
        <ConfirmComponentContainer
            icon="https://res.cloudinary.com/dfgdk6eg0/image/upload/c_scale,w_152/v1627977933/Screen_Shot_2021-08-03_at_14.34.55_ovk13w.png"
            content={content}
            buttons={buttons}
        />
    );
};

export default ThankYouComponent;
