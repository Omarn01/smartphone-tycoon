'use client'

import { useState } from 'react'
import './PhoneModel.sass'
import camera from '../../../public/1camera1.png'
import Image from 'next/image'

interface IPhone {
  updateWidth: number
  updateHeight: number
  updateThickness: number
  updateSideFrames: number
  updateColor?: string
}

export default function PhoneModel({
  updateWidth,
  updateHeight,
  updateThickness,
  updateSideFrames,
  updateColor,
}: IPhone) {
  return (
    <div className='phoneModel'>
      <div
        style={{
          width: updateWidth,
          height: updateHeight,
          paddingLeft: updateSideFrames + '%',
          paddingRight: updateSideFrames + '%',
          backgroundColor: updateColor,
        }}
        className='phoneModel_wrapper'
      >
        <div className='phoneModel_top'>
          <div className='phoneModel_frontCamera'></div>
          <div className='phoneModel_speaker'></div>
        </div>
        <div
          style={{ opacity: 1, backdropFilter: 'blur(100px)' }}
          className='phoneModel_display'
        ></div>
        <div className='phoneModel_homeButton'></div>
      </div>

      <div
        style={{ width: updateThickness, height: updateHeight }}
        className='phoneModel-side'
      ></div>
      <div
        style={{
          width: updateWidth,
          height: updateHeight,
          backgroundColor: updateColor,
        }}
        className='phoneModel-back'
      >
        {/* <img src={camera} alt='' /> */}
        <Image style={{ width: 35, height: 50 }} src={camera} alt='' />
      </div>
    </div>
  )
}
