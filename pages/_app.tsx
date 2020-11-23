import { NextComponentType } from 'next'
import { AppContext, AppInitialProps, AppProps } from 'next/app'

import '../styles/globals.css'
import '../styles/tailwind.css'

import { Header } from '../components/Layout/Header'
import { Footer } from '../components/Layout/Footer'

const App: NextComponentType<AppContext, AppInitialProps, AppProps> = ({ Component, pageProps }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}

export default App
