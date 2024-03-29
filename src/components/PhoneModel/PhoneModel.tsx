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
  noColor?: boolean
  phone?: IPhone
}

export default function PhoneModel({
  front,
  side,
  back,
  phone,
  noColor,
}: IProps) {
  const context = useContext<any>(Context)

  return (
    <div className='phoneModel'>
      {front && (
        <div
          style={{
            width: phone?.width || context.phone.width,
            height: phone?.height || context.phone.height,
            backgroundColor: phone?.color || (!noColor && context.phone.color),
            padding: `5px ${phone?.sideFrames || context.phone.sideFrames}px ${
              phone?.chin || context.phone.chin
            }px`,
            borderRadius: `${
              phone?.borderRadius || context.phone.borderRadius
            }px`,
          }}
          className='phoneModel_wrapper'
        >
          <div className='phoneModel_top'>
            <div className='phoneModel_frontCamera'></div>
            <div className='phoneModel_speaker'></div>
          </div>
          <div className='phoneModel_blob'></div>
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
        <>
          <div
            style={{
              width: phone?.thickness || context.phone.thickness,
              height: phone?.height || context.phone.height,
              backgroundColor:
                phone?.color || (!noColor && context.phone.color),

              borderRadius: `${
                phone?.borderRadius ||
                Math.floor(context.phone.borderRadius / 1.3)
              }px`,
            }}
            className='phoneModel-side'
          >
            {/* <div
              style={{
                width: phone?.thickness || context.phone.thickness / 2.5,
                height: phone?.height || context.phone.height - 1.5,
              }}
              className='phoneModel-side_rounding'
            ></div> */}
          </div>
        </>
      )}

      {back && (
        <div
          style={{
            width: phone?.width || context.phone.width,
            height: phone?.height || context.phone.height,
            backgroundColor: phone?.color || context.phone.color,
            borderRadius: `${
              phone?.borderRadius || context.phone.borderRadius
            }px`,
          }}
          className='phoneModel-back'
        >
          {/* 1, 2 */}
          {/* <Image style={{ width: 35, height: 50 }} src={camera} alt='' /> */}
          {/* <div className='camera'>
            <div className='camera-module'></div>
          </div> */}

          {/* 3 */}
          <div className='camera-block'>
            <div className='camera'>
              <div className='camera-module'></div>
            </div>
            <div className='camera'>
              <div className='camera-module'></div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
