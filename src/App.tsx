import "./App.css";
import { I18nextProvider } from "react-i18next";
import { Provider } from "react-redux";
import { createTheme, MuiThemeProvider } from "@material-ui/core/styles";
import indigo from "@material-ui/core/colors/indigo";
import i18n from './i18n'
import store from "./store";
import AppRoutes from "./AppRoutes";

const theme = createTheme({
    palette: {
        primary: indigo,
        secondary: indigo,
    },
    typography: {
        fontFamily: [
            "-apple-system",
            "BlinkMacSystemFont",
            '"Segoe UI"',
            "Roboto",
            '"Helvetica Neue"',
            "Arial",
            "sans-serif",
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(","),
    },
});

const App = () => (
    <I18nextProvider i18n={i18n}>
      <Provider store={store}>
          <MuiThemeProvider theme={theme}>
              <AppRoutes />
          </MuiThemeProvider>
      </Provider>
  </I18nextProvider>
);

export default App;
