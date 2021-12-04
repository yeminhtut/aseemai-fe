import { Box } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import ConfirmComponentContainer from "./ConfirmComponentContainer";
import CreditCard from "../../assets/img/credit-card.png";

const ThankyouAfterSelectingPayment = (props: any) => {
    const { history } = props;
    const handleNext = () => {
        history.push('/dashboard');
    };
    const content = <Box mb="16px" mt="52px" color="#212121" fontSize="24px">
        <Box mb="16px">
            Thanks for choosing our vehicle!
        </Box>
        <Box mb="16px">
            Customer information is saved.
        </Box>
        <Box>
            Please proceed to cashier for the payment.
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
            icon={CreditCard}
            content={content}
            buttons={buttons}
        />
    );
};

export default ThankyouAfterSelectingPayment;
