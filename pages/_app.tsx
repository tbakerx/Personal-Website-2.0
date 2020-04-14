import React from 'react'
import App from 'next/app'
import './app.scss'
import { getStores, StoreProvider } from '../stores/stores'

interface Props {
  initialData: any
}

class CustomApp extends App<Props> {
  static async getInitialProps(appContext: any) {
    const mobxStores = getStores()
    appContext.ctx.mobxStores = mobxStores

    const appProps = await App.getInitialProps(appContext)

    const initialData = {
      mobxStoreInitialData: mobxStores.mobxStore.__data()
    }

    return {
      ...appProps,
      initialData
    }
  }

  render() {
    const { Component, pageProps, initialData } = this.props
    const stores = getStores(initialData)

    return (
      <StoreProvider value={stores}>
        <Component {...pageProps} />
      </StoreProvider>
    )
  }
}

export default CustomApp