import { Inter, Poppins } from 'next/font/google'
import './globals.css'

import { Children, ReactNode, useState } from 'react'
const inter = Inter({ subsets: ['latin'] })

interface IProps {
  children: ReactNode
}

const Layout = ({ children }: IProps) => {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
export default Layout
