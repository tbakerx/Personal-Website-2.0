import Head from 'next/head'
import Header from '@components/Homepage/Header'
import About from '@components/Homepage/About'
import Resume from '@components/Homepage/Resume'
import Portfolio from '@components//Homepage/Portfolio'
import Testimonials from '@components/Homepage/Testimonials'
import Contact from '@components/Homepage/Contact'
import Footer from '@components/Homepage/Footer'




const Home = () => {

  const data = require('../config/resumeData.json')

  return (
    <div className='App'>
      <Head>
      <title>Tim Baker Development</title>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta charSet='utf-8' />
      </Head>

      <Header data={data.main}/>
      <About data={data.main}/>
      <Resume data={data.resume}/>
      <Portfolio data={data.portfolio}/>
      <Testimonials data={data.testimonials}/>
      <Contact data={data.main}/>
      <Footer data={data.main}/>
    </div>
  )
}

export default Home
