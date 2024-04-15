'use client'

import './page.sass'

import Sidebar from '@/components/CreatePhone/sidebar/Sidebar'
import Size from '@/components/CreatePhone/size/Size'
import Color from '@/components/CreatePhone/color/Color'
import Camera from '@/components/CreatePhone/camera/Camera'
import Display from '@/components/CreatePhone/display/Display'
import Processor from '@/components/CreatePhone/processor/Processor'
import Package from '@/components/CreatePhone/package/Package'
import { IoPhonePortraitOutline } from 'react-icons/io5'

import { Context } from '@/app/layout'
import { useContext, useEffect, useState } from 'react'
// import { useLocalStorage } from '@/hooks/useLocalStorage'
import Link from 'next/link'
import CreatePhone from '@/components/CreatePhone/CreatePhone'

export default function Page() {
  const [animationPlayState, setAnimationPlayState] = useState('')
  const [namePhone, setNamePhone] = useState('')
  const [nameTrue, setNameTrue] = useState(false)

  const context = useContext<any>(Context)

  // useEffect(() => {
  //   setAnimationPlayState('running')
  //   setTimeout(() => {
  //     setAnimationPlayState('')
  //   }, 5500)
  // }, [context.sidebar])
  // const { getItem } = useLocalStorage('cashCompany')
  // const { getItem: localNameCompany } = useLocalStorage('nameCompany')

  const startCreatingPhone = () => {
    if (namePhone) setNameTrue(true)
  }

  return (
    <>
      {nameTrue ? (
        <CreatePhone />
      ) : (
        <div className='createPhone-namePhone'>
          <div className='createPhone-close-block'>
            {/* <Link
              href={`/game/${localNameCompany}/`}
              className='createPhone-close'
            >
              x
            </Link> */}
          </div>
          <div className='createPhone-namePhone-block'>
            <div className='createPhone-namePhone-block-content'>
              <h2 className='createPhone-namePhone-title'>
                Enter name your phone
              </h2>
              <input
                value={namePhone}
                onChange={e => setNamePhone(e.target.value)}
                className='createPhone-namePhone-input'
                type='text'
              />
              <button
                onClick={startCreatingPhone}
                className='createPhone-namePhone-button'
              >
                Start creating
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
