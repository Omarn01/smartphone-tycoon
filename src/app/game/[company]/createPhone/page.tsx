'use client'

import './page.sass'

import Sidebar from '@/components/CreatePhone/sidebar/Sidebar'
import Size from '@/components/CreatePhone/size/Size'
import Color from '@/components/CreatePhone/color/Color'
import MainCamera from '@/components/CreatePhone/mainCamera/MainCamera'
import Display from '@/components/CreatePhone/display/Display'
import Processor from '@/components/CreatePhone/processor/Processor'
import Package from '@/components/CreatePhone/package/Package'
import { IoPhonePortraitOutline } from 'react-icons/io5'

import { Context } from '@/app/layout'
import { useContext } from 'react'

export default function Page() {
  const context = useContext<any>(Context)
  return (
    <div className='createPhone'>
      <div className='createPhone-sidebar'>
        <Sidebar />
      </div>
      <div className='createPhone-content'>
        <div className='createPhone-content_info'>
          <p className='createPhone-content-price'>$ {context.price}</p>
          <p>
            Phone Name <IoPhonePortraitOutline />
          </p>
        </div>
        <div className='createPhone-content_edit'>
          <Size />
          <Color />
          <MainCamera />
          <Display />
          <Processor />
          <Package />
        </div>
      </div>
    </div>
  )
}
