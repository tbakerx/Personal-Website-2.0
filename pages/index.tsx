import Head from 'next/head'
import { observer } from 'mobx-react'
import { useMobxStores } from '@stores/stores'
import { Button } from 'reactstrap'

import Layout from '@components/Layout/Layout'



const Home = () => {

  const { mobxStore } = useMobxStores()

  return (
    <Layout>
      <Head>
      <title>NextJs Starter</title>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta charSet='utf-8' />
      </Head>

      <div>
        <p>{mobxStore.testStore}</p>
        <Button
          onClick={() => { mobxStore.setTestStore('Did this work?') }}>Test</Button>
      </div>
    </Layout >
  )
}

export default observer(Home)
