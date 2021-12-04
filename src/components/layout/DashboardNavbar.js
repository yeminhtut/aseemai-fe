import { Link as RouterLink } from "react-router-dom";
import PropTypes from "prop-types";
import {
    AppBar,
    Box,
    IconButton,
    Toolbar,
    Typography
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const DashboardNavbar = (props) => {
    const { onMobileNavOpen, classes } = props
    return (
        <AppBar className={classes.appBar}>
            <Toolbar>
                <RouterLink className={classes.appTitle} to="/">
                    <Typography variant="h6">
                        TVS Auto Bangladesh
                    </Typography>
                </RouterLink>
                <Box sx={{ flexGrow: 1 }} />
                <Box>
                    <IconButton color="inherit" onClick={onMobileNavOpen}>
                        <MenuIcon />
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

DashboardNavbar.propTypes = {
    onMobileNavOpen: PropTypes.func,
};

export default DashboardNavbar;
