'use client'

import { IoPhonePortraitOutline } from 'react-icons/io5'
import Sidebar from './sidebar/Sidebar'
import Size from './size/Size'
import Camera from './camera/Camera'
import Color from './color/Color'
import Display from './display/Display'
import Package from './package/Package'
import Processor from './processor/Processor'
import { useContext } from 'react'
import { Context } from '@/app/layout'

import './CreatePhone.sass'

export default function CreatePhone() {
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
          <Camera />
          <Display />
          <Processor />
          <Package />
        </div>
      </div>
    </div>
  )
}
