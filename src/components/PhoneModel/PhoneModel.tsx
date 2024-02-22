'use client'

import { useContext, useEffect, useMemo, useState } from 'react'
import { Context } from '@/app/layout'
import './PhoneModel.sass'
import camera from '../../../public/1camera1.png'
import Image from 'next/image'
import { IPhone } from '@/app/layout'

interface IProps {
  front?: boolean
  side?: boolean
  back?: boolean
  phone?: IPhone
}

export default function PhoneModel({ front, side, back, phone }: IProps) {
  const context = useContext<any>(Context)

  return (
    <div className='phoneModel'>
      {front && (
        <div
          style={{
            width: phone?.width || context.phone.width,
            height: phone?.height || context.phone.height,
            backgroundColor: phone?.color || context.phone.color,
            padding: `5px ${phone?.sideFrames || context.phone.sideFrames}px ${
              phone?.chin || context.phone.chin
            }px`,
          }}
          className='phoneModel_wrapper'
        >
          <div className='phoneModel_top'>
            <div className='phoneModel_frontCamera'></div>
            <div className='phoneModel_speaker'></div>
          </div>
          <div
            style={{
              width: phone?.widthDisplay || context.phone.widthDisplay,
              height: phone?.heightDisplay || context.phone.heightDisplay,
              filter: `contrast(${
                phone?.contrast || context.phone.contrast
              }%) grayscale(${
                phone?.grayscale || context.phone.grayscale
              }%) saturate(100%)`,
            }}
            className='phoneModel_display'
          ></div>
          <div
            style={{
              display:
                phone?.homeButton || context.phone.homeButton === 1
                  ? 'flex'
                  : 'none',
            }}
            className='phoneModel_homeButton'
          ></div>
        </div>
      )}

      {side && (
        <div
          style={{
            width: phone?.thickness || context.phone.phoneThickness,
            height: phone?.height || context.phone.phoneHeight,
            backgroundColor: phone?.color || context.phone.phoneColor,
          }}
          className='phoneModel-side'
        ></div>
      )}

      {back && (
        <div
          style={{
            width: phone?.width || context.phone.phoneWidth,
            height: phone?.height || context.phone.phoneHeight,
            backgroundColor: phone?.color || context.phone.phoneColor,
          }}
          className='phoneModel-back'
        >
          <Image style={{ width: 35, height: 50 }} src={camera} alt='' />
        </div>
      )}
    </div>
  )
}
