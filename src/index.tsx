import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MyGifts from "./components/Pages/MyGifts";
import Home from "./components/Pages/Home";
import store from "./store";
import { Provider } from "react-redux";
import history from "./history";
import { Auth0Provider } from "./react-auth0-spa";
import config from "./auth_config.json";
import LoginRedirect from "./components/LoginRedirect/LoginRedirect";
import "bootstrap/dist/css/bootstrap.css";

// A function that routes the user to the right place
// after login
const onRedirectCallback = (appState: any) => {
  history.push(
    appState && appState.targetUrl
      ? `${appState.targetUrl}/login`
      : `${window.location.origin}/login`
  );
};

const Root = (
  <Auth0Provider
    initOptions={{
      domain: config.domain,
      client_id: config.clientId,
      redirect_uri: `${window.location.origin}/login`
    }}
    onRedirectCallback={onRedirectCallback}
  >
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/gifts" component={MyGifts} />
          <Route path="/login" component={LoginRedirect} />
          <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </Provider>
  </Auth0Provider>
);

ReactDOM.render(Root, document.getElementById("root"));
