import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import AuthenticationContainer from "./components/authentication/AuthenticationContainer";
import AccessControl from "./components/authentication/AccessControl";
import AuthRequired from "./components/authentication/AuthRequired";
import AuthListener from "./components/authentication/AuthListener";
import DashboardContainer from "./components/dashboard/DashboardContainer";
import Layout from "./components/layout/Layout";
import CompleteApplication from "./components/static_components/CompleteApplication";
//import {ApplicationUpdateContainer} from "./components/application_update";
import HomeComponent from "./components/home/Home";
const AuthRequiredContainer = () => (
    <AuthRequired>
        <AuthListener>
        <Switch>
            <Layout>
                <AccessControl>
                    <Switch>
                        <Route
                            component={DashboardContainer}
                            path="/dashboard"
                        />
                    </Switch>
                </AccessControl>
            </Layout>
        </Switch>
        </AuthListener>
        
    </AuthRequired>
);

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route component={HomeComponent} path="/" />
            </Switch>
        </BrowserRouter>
    );
};

export default AppRoutes;
