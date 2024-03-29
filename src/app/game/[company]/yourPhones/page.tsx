'use client'

import { useContext } from 'react'
import PhoneModel from '@/components/PhoneModel/PhoneModel'
import { Context, IPhone } from '@/app/layout'
import { useLocalStorage } from '@/hooks/useLocalStorage'

export default function YourPhones() {
  const { getItem: localYourPhones, setItem: setLocalYourPhones } =
    useLocalStorage('yourPhones')
  console.log(Array(localYourPhones))
  return (
    <div>
      {Array(localYourPhones).map((_, i: number) => (
        <PhoneModel key={i} front={true} />
      ))}
    </div>
  )
}
