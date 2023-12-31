import { Inter } from 'next/font/google'
import './globals.css'
import Footer from '@/components/Footer/TopFooter'
import TopNavbar from '@/components/Navbar/TopNavbar'
import BottomNavbar from '@/components/Navbar/BottomNavbar'
import TopFooter from '@/components/Footer/TopFooter'
import BottomFooter from '@/components/Footer/BottomFooter'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Amazon Clone',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <TopNavbar/>
      <BottomNavbar/>
      {children}
      <TopFooter/>
      <BottomFooter/>
      </body>
    </html>
  )
}
