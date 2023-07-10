import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '../../components/layout/Navbar'
import Footer from '../../components/layout/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Joshua Biyinzika Portfolio',
  description: 'My portfolio showcasing my skills and projects',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='scroll-smooth'>
      <body className={`${inter.className} overflow-x-hidden`}>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
