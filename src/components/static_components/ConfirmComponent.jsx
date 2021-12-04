import { Fragment } from "react";
import { withStyles } from "@material-ui/core/styles";
import inputStyles from "./inputStyles";

import { Box, Typography, AppBar, Toolbar, IconButton, CssBaseline } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const ConfirmComponent = (props) => {
    const { classes, icon, content, buttons } = props;
    return (
        <main className={classes.layout} style={{ marginTop: '96px'}}>
            <div className={classes.mainContent}>
                <Fragment>
                    <CssBaseline />
                    <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
                        <Box mt="50px">
                            <img
                                src={icon}
                                alt="icon"
                                style={{ width: "152px" }}
                            />
                        </Box>
                        <Box textAlign="center" width="80%">
                            {content}
                        </Box>

                        <Box mt="64px" textAlign="center" width="70%">
                            {buttons}
                        </Box>
                    </Box>
                </Fragment>
            </div>
        </main>
    );
};

export default withStyles(inputStyles)(ConfirmComponent);
