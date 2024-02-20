'use client'

import { useContext, useEffect, useMemo, useState } from 'react'
import { Context } from '@/app/layout'
import './PhoneModel.sass'
import camera from '../../../public/1camera1.png'
import Image from 'next/image'

interface IPhone {
  front?: boolean
  side?: boolean
  back?: boolean
}

export default function PhoneModel({ front, side, back }: IPhone) {
  const context = useContext<any>(Context)
  const [contrast, setContrast] = useState(50)
  const [grayscale, setGrayscale] = useState(60)

  console.log(context.matrix)

  const checkMatrix = useMemo(() => {
    if (context.matrix === 'TN') setContrast(50)
    if (context.matrix === 'IPS') setContrast(60)
    if (context.matrix === 'AMOLED') setContrast(70)
    if (context.matrix === 'SUPERAMOLED') setContrast(80)
    if (context.matrix === 'OLED') setContrast(100)
    if (context.matrix === 'QLED') setContrast(120)
    if (context.matrix === 'LCD') setContrast(150)
  }, [context.matrix])

  const checkResolution = useMemo(() => {
    if (context.resolution === 'LDPI') setGrayscale(60)
    if (context.resolution === 'MDPI') setGrayscale(50)
    if (context.resolution === 'HDPI') setGrayscale(35)
    if (context.resolution === 'XHDPI') setGrayscale(20)
    if (context.resolution === 'XXHDPI') setGrayscale(10)
    if (context.resolution === 'XXXHDPI') setGrayscale(0)
  }, [context.resolution])

  return (
    <div className='phoneModel'>
      {front && (
        <div
          style={{
            width: context.phoneWidth,
            height: context.phoneHeight,
            backgroundColor: context.phoneColor,
          }}
          className='phoneModel_wrapper'
        >
          <div className='phoneModel_top'>
            <div className='phoneModel_frontCamera'></div>
            <div className='phoneModel_speaker'></div>
          </div>
          <div
            style={{
              width: context.phoneWidthDisplay,
              height: context.phoneHeightDisplay,
              filter: `contrast(${contrast}%) grayscale(${grayscale}%)`,
            }}
            className='phoneModel_display'
          >
            {/* <div className='phoneModel_display-filter'></div> */}
          </div>
          <div
            style={{
              display: context.homeButton === 1 ? 'flex' : 'none',
            }}
            className='phoneModel_homeButton'
          ></div>
        </div>
      )}

      {side && (
        <div
          style={{
            width: context.phoneThickness,
            height: context.phoneHeight,
            backgroundColor: context.phoneColor,
          }}
          className='phoneModel-side'
        ></div>
      )}

      {back && (
        <div
          style={{
            width: context.phoneWidth,
            height: context.phoneHeight,
            backgroundColor: context.phoneColor,
          }}
          className='phoneModel-back'
        >
          <Image style={{ width: 35, height: 50 }} src={camera} alt='' />
        </div>
      )}
    </div>
  )
}
