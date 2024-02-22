'use client'

import { useContext } from 'react'
import PhoneModel from '@/components/PhoneModel/PhoneModel'
import { Context, IPhone } from '@/app/layout'

export default function YourPhones() {
  const context = useContext<any>(Context)
  return (
    <div>
      {context.yourPhone.map((phone: IPhone, i: number) => (
        <PhoneModel key={i} front={true} phone={phone} />
      ))}
    </div>
  )
}
