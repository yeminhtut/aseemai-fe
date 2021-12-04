import { Route, Redirect } from 'react-router-dom'
import storage from "../utils/storage"

const token = storage.getToken();

/* eslint-disable */
const PrivateRoute = ({ component: Component, isAuthenticated, checkLoginStatus, ...rest }) => (
    <Route
        {...rest}
        render={props => {
            return token ? (
                <Component {...props} />
            ) : (
                <Redirect to={`/login?redirect=${encodeURIComponent(props.location.pathname)}`} />
            )
        }}
    />
)

export default PrivateRoute