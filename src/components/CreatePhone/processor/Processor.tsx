'use client'

import { useContext } from 'react'
import { Context } from '@/app/layout'
import PhoneModel from '@/components/PhoneModel/PhoneModel'

import './Processor.sass'

export default function Processor() {
  const context = useContext<any>(Context)

  const changeProcessor = (processor: string) => {
    context.setPhoneProcessor(processor)
  }

  return (
    <div
      style={{ display: context.sidebar === 5 ? 'flex' : 'none' }}
      className='createPhone_processor'
    >
      <div className='createPhone_processor_list-left'>
        <div className='createPhone_processor-slider'>
          <div className='createPhone_processor-slider-item'>
            <img
              src='https://seeklogo.com/images/S/snapdragon-logo-961837D591-seeklogo.com.png'
              alt=''
            />
          </div>
          <div className='createPhone_processor-slider-item'>
            <img
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl5RqzUVU8imyFBgYsCE8IDl3J45T6IGp1uA&usqp=CAU'
              alt=''
            />
          </div>
          <div className='createPhone_processor-slider-item'>
            <img
              src='https://images.versus.io/objects/unisoc-t610.front.master.1636470462530.jpg'
              alt=''
            />
          </div>
          <div className='createPhone_processor-slider-item'>
            <img
              src='https://consumer.huawei.com/minisite/support/kzru/mate8-pc/assets/mate8/images/M5_04_03.png?1514274366063'
              alt=''
            />
          </div>
          <div className='createPhone_processor-prev'>-</div>
          <div className='createPhone_processor-next'>+</div>
        </div>
      </div>
      <div className='createPhone_processor_list-right'></div>
    </div>
  )
}
