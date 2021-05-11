import '../../styles/globals.css';

import type {AppProps} from 'next/app';
import {memo} from 'react';

const MyApp = memo(({Component, pageProps}: AppProps): JSX.Element => {
  return <Component {...pageProps} />;
});

export default MyApp;
