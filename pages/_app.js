import { ThemeProvider } from 'next-themes'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Toggle from '../components/Toggle'
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  return (
    <>
    <ThemeProvider enableSystem={true} attribute="class">
    <Header />
    <Component {...pageProps} />
    <Footer />
    </ThemeProvider>
    </>
  )
}

export default MyApp
