import { useState, useEffect } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import inputStyles from "./inputStyles";
import {
    Avatar,
    Box,
    Button,
    Container,
    Divider,
    Drawer,
    List,
    Typography,
    ListItem,
} from "@material-ui/core";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import PersonIcon from "@material-ui/icons/Person";
import DashboardNavbar from "./DashboardNavbar";
import { logout } from "../../store/actions/auth";

const Layout = (props) => {
    const { classes, children, user, logout } = props;
    const [isMobileNavOpen, setMobileNavOpen] = useState(false);
    return (
        <>
            <DashboardNavbar
                onMobileNavOpen={() => setMobileNavOpen(true)}
                classes={classes}
            />
            {user && user.id && (
                <DashboardSidebar
                    onMobileClose={() => setMobileNavOpen(false)}
                    openMobile={isMobileNavOpen}
                    user={user}
                    logout={logout}
                />
            )}
            <Box position="relative" className={classes.mainContent}>
                <Container
                    maxWidth={false}
                    component={Box}
                    marginTop="-6rem"
                    classes={{ root: classes.containerRoot }}
                >
                    {children}
                </Container>
                <Container
                    maxWidth={false}
                    component={Box}
                    classes={{ root: classes.containerRoot }}
                ></Container>
            </Box>
        </>
    );
};

const DashboardSidebar = ({ onMobileClose, openMobile, user, logout }) => {
    const location = useLocation();
    useEffect(() => {
        if (openMobile && onMobileClose) {
            onMobileClose();
        }
    }, [location.pathname]);
    const handleLogout = () => {
        logout();
    };
    const items = [
        {
            href: "/dashboard",
            icon: DashboardIcon,
            title: "Dashboard",
        },
        {
            href: "/applications",
            icon: MonetizationOnIcon,
            title: "Applications",
        },
    ];
    const content = (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
            }}
        >
            {user && user.firstName && (
                <Box
                    sx={{
                        alignItems: "center",
                        display: "flex",
                        flexDirection: "column",
                        p: 2,
                    }}
                >
                    <Avatar>
                        <PersonIcon />
                    </Avatar>
                    <Typography color="textPrimary" variant="body1">
                        {user.firstName} {user.lastName}
                    </Typography>
                    <Typography color="textSecondary" variant="body2">
                        {user.outlet.name}
                    </Typography>
                    <Typography color="textSecondary" variant="body2">
                        {user.outlet.role == "S" ? "Staff" : "Loan Manager"}
                    </Typography>
                </Box>
            )}
            <Divider />
            <Box sx={{ p: 2 }}>
                <List>
                    {items.map((item) => (
                        <NavItem
                            href={item.href}
                            key={item.title}
                            title={item.title}
                            icon={item.icon}
                        />
                    ))}
                    <ListItem
                        disableGutters
                        sx={{
                            display: "flex",
                            py: 0,
                        }}
                    >
                        <Button
                            style={{
                                color: "text.secondary",
                                fontWeight: "medium",
                                justifyContent: "flex-start",
                                letterSpacing: 0,
                                py: 1.25,
                                textTransform: "none",
                                width: "100%",
                                "& svg": {
                                    mr: 1,
                                },
                            }}
                            onClick={handleLogout}
                        >
                            <ExitToAppIcon />
                            <span style={{ marginLeft: "12px" }}>Logout</span>
                        </Button>
                    </ListItem>
                </List>
            </Box>
            <Box sx={{ flexGrow: 1 }} />
        </Box>
    );
    return (
        <>
            <Box>
                <Drawer
                    anchor="left"
                    onClose={onMobileClose}
                    open={openMobile}
                    variant="temporary"
                    PaperProps={{
                        sx: {
                            width: 256,
                        },
                    }}
                >
                    {content}
                </Drawer>
            </Box>
            {/* <Box>
                <Drawer
                    anchor="left"
                    open
                    variant="persistent"
                    PaperProps={{
                        sx: {
                            width: 256,
                            top: 64,
                            height: "calc(100% - 64px)",
                        },
                    }}
                >
                    {content}
                </Drawer>
            </Box> */}
        </>
    );
};

const NavItem = ({ href, icon: Icon, title, ...rest }) => {
    const location = useLocation();
    const active = href ? location.pathname == href : false;
    return (
        <ListItem
            disableGutters
            sx={{
                display: "flex",
                py: 0,
            }}
            {...rest}
        >
            <Button
                component={RouterLink}
                style={{
                    color: "text.secondary",
                    fontWeight: "medium",
                    justifyContent: "flex-start",
                    letterSpacing: 0,
                    py: 1.25,
                    textTransform: "none",
                    width: "100%",
                    ...(active && {
                        color: "#FFF",
                        background: "#5F56A6",
                    }),
                    "& svg": {
                        mr: 1,
                    },
                }}
                to={href}
            >
                {Icon && <Icon size="20" />}
                <span style={{ marginLeft: "12px" }}>{title}</span>
            </Button>
        </ListItem>
    );
};

const mapStateToProps = (state) => ({
    user: state.auth.user,
});

const mapDispatchToProps = {
    logout,
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(inputStyles)(Layout));
