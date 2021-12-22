import '../src/styles/globals.css';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { createStore } from '@reduxjs/toolkit';
import App from '../src/app/App';
import reducer from '../src/state';

const store = createStore(reducer);

function MyApp({ Component, pageProps }: AppProps) {
  return <Provider store={store}>
    <App>
      <Component {...pageProps} />
    </App>
  </Provider>;
}

export default MyApp;
