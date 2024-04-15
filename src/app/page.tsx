'use client'

import { useEffect } from 'react'
import styles from './page.module.css'

function Home() {
  const click = () => {
    new Notification('aaa')
  }

  return <button onClick={() => click()}>Notification</button>
}

export default Home
