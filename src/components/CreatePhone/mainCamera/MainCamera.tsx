'use client'

import { useContext } from 'react'
import { Context } from '@/app/layout'

export default function MainCamera() {
  const context = useContext<any>(Context)
  return (
    <div
      style={{ display: context.sidebar === 3 ? 'flex' : 'none' }}
      className='createPhone_mainCamera'
    >
      Main Camera
    </div>
  )
}
