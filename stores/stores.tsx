import { createContext, useContext } from 'react'
import MobxStore from './MobxStore'

let clientSideStores: any

const isServer = typeof window === 'undefined'

export function getStores(initialData = { mobxStoreInitialData: {} }) {
  if (isServer) {
    return {
      mobxStore: new MobxStore(initialData.mobxStoreInitialData)
    }
  }
  if (!clientSideStores) {
    clientSideStores = {
      mobxStore: new MobxStore(initialData.mobxStoreInitialData)
    }
  }
  return clientSideStores
}

const StoreContext = createContext<any | null>(null)

export function StoreProvider(props: any) {
  return <StoreContext.Provider value={props.value}>{props.children}</StoreContext.Provider>
}

export function useMobxStores(): any {
  return useContext(StoreContext)
}
