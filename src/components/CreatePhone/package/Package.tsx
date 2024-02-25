'use client'

import { Context, initialPhoneState, initialPhonePrice } from '@/app/layout'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import { useContext } from 'react'

export default function Package() {
  const context = useContext<any>(Context)

  const { getItem: localYourPhones, setItem: setLocalYourPhones } =
    useLocalStorage('yourPhones')

  const createPhone = () => {
    context.setYourPhone((prev: any) => [context.phone, ...prev])
    context.setPhone(initialPhoneState)
    context.setSidebar(1)
    // context.setPrice(initialPhonePrice)
    const prev: any = localYourPhones()

    setLocalYourPhones(JSON.stringify([context.phone, ...JSON.parse(prev)]))
  }

  return (
    <div
      style={{ display: context.sidebar === 8 ? 'flex' : 'none' }}
      className='createPhone_package'
    >
      <button onClick={() => createPhone()}>Create phone</button>
    </div>
  )
}
