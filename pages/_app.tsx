import '../src/styles/globals.css';
import App, { AppContext, AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { createStore } from '@reduxjs/toolkit';
import AppContainer from '../src/app/AppContainer';
import reducer from '../src/state';
import { getColorFromContextCookie } from '../src/theme';

const store = createStore(reducer);

const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Provider store={store}>
    <AppContainer initialColor={(pageProps as any).initialColor}>
      <Component {...pageProps} />
    </AppContainer>
  </Provider>;
};

MyApp.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext);

  const initialColor = getColorFromContextCookie(appContext);

  return {
    ...appProps,
    pageProps: {
      ...appProps.pageProps,
      initialColor,
    },
  };
};

export default MyApp;
