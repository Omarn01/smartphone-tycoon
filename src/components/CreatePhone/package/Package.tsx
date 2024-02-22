'use client'

import { Context, initialPhoneState } from '@/app/layout'
import { useContext } from 'react'

export default function Package() {
  const context = useContext<any>(Context)

  const createPhone = () => {
    context.setYourPhone((prev: any) => [context.phone, ...prev])
    context.setPhone(initialPhoneState)
    context.setSidebar(1)
  }

  return (
    <div
      style={{ display: context.sidebar === 9 ? 'flex' : 'none' }}
      className='createPhone_package'
    >
      <button onClick={() => createPhone()}>Create phone</button>
    </div>
  )
}
