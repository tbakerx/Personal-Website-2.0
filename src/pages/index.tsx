import Head from 'next/head';
import {memo} from 'react';

const Home = memo((): JSX.Element => {
  return (
    <>
      <div>
        <Head>
          {/* <title>{TITLE HERE}</title>
          <meta content={DESCRIPTION HERE} name="description" />
          <link href="/favicon.svg" rel="icon" type="image/svg+xml" />
          <link href="/favicon.ico" rel="alternate icon" type="image/x-icon" />
          <link href="/apple-touch-icon.png" rel="apple-touch-icon" />
          <link href="/site.webmanifest" rel="manifest" />
          <link color={LINK COLOR} href="/safari-pinned-tab.svg" rel="mask-icon" />
          <meta content={THEME COLOR} name="theme-color" />
          <meta content="summary_large_image" name="twitter:card" />
          <meta content="@{TWITTER HANDLE}" name="twitter:site" />
          <meta content={OPENGRAPH TITLE} property="og:title" />
          <meta content={OPENGRAPH DESCRIPTION} property="og:description" />
          <meta content={OPENGRAPH IMAGE LOCATION} property="og:image" />
          <meta content={OPENGRAPH LINK URL} property="og:url" /> */}
        </Head>
      </div>
      <h1>NextJS + Typescript + TailwindCSS Boilerplate</h1>
    </>
  );
});

export default Home;
