import createAuth0Client from "@auth0/auth0-spa-js";
import React, { useContext, useEffect, useState } from "react";

export interface Auth0RedirectState {
  targetUrl?: string;
}

export interface Auth0User extends Omit<IdToken, "__raw"> {}

interface Auth0Context {
  user?: Auth0User;
  isAuthenticated: boolean;
  isLoading: boolean;
  isPopupOpen: boolean;
  loginWithPopup(o?: PopupLoginOptions): Promise<void>;
  handleRedirectCallback(): Promise<void>;
  getIdTokenClaims(o?: getIdTokenClaimsOptions): Promise<IdToken>;
  loginWithRedirect(o?: RedirectLoginOptions): Promise<void>;
  getTokenSilently(o?: GetTokenSilentlyOptions): Promise<string | undefined>;
  getTokenWithPopup(o?: GetTokenWithPopupOptions): Promise<string | undefined>;
  logout(o?: LogoutOptions): void;
}
interface Auth0ProviderOptions {
  children: React.ReactElement;
  onRedirectCallback(result: RedirectLoginResult): void;
  initOptions: Auth0ClientOptions;
}

const DEFAULT_REDIRECT_CALLBACK = () =>
  window.history.replaceState({}, document.title, window.location.pathname);

export const Auth0Context = React.createContext<Auth0Context | null>(null);
export const useAuth0 = () => useContext(Auth0Context);
export function Auth0Provider({
  children,
  onRedirectCallback = DEFAULT_REDIRECT_CALLBACK,
  initOptions
}: Auth0ProviderOptions) {
  const [isAuthenticated, setIsAuthenticated] = useState();
  const [user, setUser] = useState();
  const [auth0Client, setAuth0] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    const initAuth0 = async () => {
      const auth0FromHook = await createAuth0Client(initOptions);
      setAuth0(auth0FromHook);

      if (
        window.location.search.includes("code=") &&
        window.location.search.includes("state=")
      ) {
        const { appState } = await auth0FromHook.handleRedirectCallback();
        onRedirectCallback(appState);
      }

      const isAuthenticated = await auth0FromHook.isAuthenticated();

      setIsAuthenticated(isAuthenticated);

      if (isAuthenticated) {
        const user = await auth0FromHook.getUser();
        setUser(user);
      }

      setIsLoading(false);
    };
    initAuth0();
    // eslint-disable-next-line
  }, []);

  const loginWithPopup = async (params = {}) => {
    setIsPopupOpen(true);
    try {
      await auth0Client.loginWithPopup(params);
    } catch (error) {
      console.error(error);
    } finally {
      setIsPopupOpen(false);
    }
    const user = await auth0Client.getUser();
    setUser(user);
    setIsAuthenticated(true);
  };

  const handleRedirectCallback = async () => {
    setIsLoading(true);
    await auth0Client.handleRedirectCallback();
    const user = await auth0Client.getUser();
    setIsLoading(false);
    setIsAuthenticated(true);
    setUser(user);
  };

  const getIdTokenClaims = (options?: getIdTokenClaimsOptions) =>
    auth0Client.getIdTokenClaims(options);

  const loginWithRedirect = (options?: RedirectLoginOptions) =>
    auth0Client.loginWithRedirect(options);

  const getTokenSilently = (options?: GetTokenSilentlyOptions) =>
    auth0Client.getTokenSilently(options);

  const getTokenWithPopup = (options?: GetTokenWithPopupOptions) =>
    auth0Client.getTokenWithPopup(options);

  const logout = (options?: LogoutOptions) => auth0Client.logout(options);

  return (
    <Auth0Context.Provider
      value={{
        user,
        isAuthenticated,
        isLoading,
        isPopupOpen,
        loginWithPopup,
        handleRedirectCallback,
        getIdTokenClaims,
        loginWithRedirect,
        getTokenSilently,
        getTokenWithPopup,
        logout
      }}
    >
      {children}
    </Auth0Context.Provider>
  );
}
