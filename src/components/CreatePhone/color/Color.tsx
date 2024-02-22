'use client'

import { useContext } from 'react'
import { Context } from '@/app/layout'
import PhoneModel from '@/components/PhoneModel/PhoneModel'

export default function Color() {
  const context = useContext<any>(Context)

  return (
    <div
      style={{ display: context.sidebar === 2 ? 'flex' : 'none' }}
      className='createPhone_color'
    >
      <div className='createPhone_color_list-left'>
        <div className='createPhone_color_item-left'>
          <input
            type='color'
            value={context.phoneColor}
            onChange={e => context.changeColor(e.target.value)}
          />
        </div>
      </div>
      <PhoneModel front={true} side={true} back={true} />
      <div className='createPhone_color_list-right'></div>
    </div>
  )
}
