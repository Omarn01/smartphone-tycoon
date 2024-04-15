'use client'

import Header from '@/components/game/header/Header'
import BottomPanel from '@/components/game/bottomPanel/BottomPanel'
import { useContext } from 'react'
import { Context } from '@/app/layout'
import Content from '@/components/game/content/Content'

export default function Page() {
  const context = useContext(Context)

  return (
    <div style={{ height: '100%' }}>
      <Header />
      <Content />
      <BottomPanel />
    </div>
  )
}
