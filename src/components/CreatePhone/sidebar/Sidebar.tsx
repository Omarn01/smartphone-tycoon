'use client'

import { FC, useCallback, useContext, useEffect, useMemo } from 'react'
import { Context } from '@/app/layout'

import { LiaPencilRulerSolid } from 'react-icons/lia'
import { IoColorPaletteOutline } from 'react-icons/io5'
import { MdOutlineCameraAlt } from 'react-icons/md'
import { IoPhonePortraitOutline } from 'react-icons/io5'
import { GoCpu } from 'react-icons/go'
import { HiOutlineSpeakerWave } from 'react-icons/hi2'
import { BsBoxSeam } from 'react-icons/bs'
import { BsPhoneFlip } from 'react-icons/bs'

import './Sidebar.sass'

export default function Sidebar() {
  const sidebar = useContext<any>(Context)

  console.log(sidebar)

  const toggleSidebar = useCallback(
    (i: number) => sidebar.setSidebar(i),
    [sidebar.sidebar]
  )

  return (
    <div className='sidebar'>
      <ul className='sidebar_list'>
        <li
          onClick={() => toggleSidebar(1)}
          className={`sidebar_item ${
            sidebar.sidebar === 1 && 'sidebar-active'
          } `}
        >
          <LiaPencilRulerSolid />
        </li>
        <li
          onClick={() => toggleSidebar(2)}
          className={`sidebar_item ${
            sidebar.sidebar === 2 && 'sidebar-active'
          } `}
        >
          <IoColorPaletteOutline />
        </li>
        <li
          onClick={() => toggleSidebar(3)}
          className={`sidebar_item ${
            sidebar.sidebar === 3 && 'sidebar-active'
          } `}
        >
          <MdOutlineCameraAlt />
        </li>
        <li
          onClick={() => toggleSidebar(4)}
          className={`sidebar_item ${
            sidebar.sidebar === 4 && 'sidebar-active'
          } `}
        >
          <IoPhonePortraitOutline />
        </li>
        <li
          onClick={() => toggleSidebar(5)}
          className={`sidebar_item ${
            sidebar.sidebar === 5 && 'sidebar-active'
          } `}
        >
          <GoCpu />
        </li>
        <li
          onClick={() => toggleSidebar(6)}
          className={`sidebar_item ${
            sidebar.sidebar === 6 && 'sidebar-active'
          } `}
        >
          <BsPhoneFlip />
        </li>
        <li
          onClick={() => toggleSidebar(7)}
          className={`sidebar_item ${
            sidebar.sidebar === 7 && 'sidebar-active'
          } `}
        >
          <HiOutlineSpeakerWave />
        </li>
        <li
          onClick={() => toggleSidebar(8)}
          className={`sidebar_item ${
            sidebar.sidebar === 8 && 'sidebar-active'
          } `}
        >
          <BsBoxSeam />
        </li>
      </ul>
    </div>
  )
}
