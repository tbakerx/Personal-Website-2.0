import Head from 'next/head'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

import './Layout.scss'

const Layout = (props: any) => {
  return (
    <div className='Layout'>
      <Header />
      <div className='Content'>
        {props.children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
