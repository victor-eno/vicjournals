import { ThemeProvider } from 'next-themes'
import Footer from '../components/Footer'
import Toggle from '../components/Toggle'
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  return (
    <>
    <ThemeProvider enableSystem={true} attribute="class">
    <Component {...pageProps} />
    <Footer />
    </ThemeProvider>
    </>
  )
}

export default MyApp
