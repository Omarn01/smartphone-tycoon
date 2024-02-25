'use client'

import Link from 'next/link'
import './BottomPanel.sass'

import { IoIosPause } from 'react-icons/io'
import { BsInfoLg } from 'react-icons/bs'
import { TbArrowBigUpLines } from 'react-icons/tb'
import { BsNewspaper } from 'react-icons/bs'
import { MdOutlinePhonelinkSetup } from 'react-icons/md'
import { MdPeopleOutline } from 'react-icons/md'
import { BsGraphUpArrow } from 'react-icons/bs'
import { VscGraph } from 'react-icons/vsc'
import { IoPhonePortraitOutline } from 'react-icons/io5'
import { HiOutlineAcademicCap } from 'react-icons/hi2'

import { usePathname } from 'next/navigation'
import { useEffect, useState, useMemo } from 'react'

export default function BottomPanel() {
  const [companyName, setCompanyName] = useState('')

  const path = usePathname().split('/')[2]
  useEffect(() => {
    setCompanyName(path)
  }, [])
  return (
    <div className='bottomPanel'>
      <div className='container'>
        <ul className='bottomPanel_list'>
          <li className='bottomPanel_item'>
            <IoIosPause />
          </li>
          <li className='bottomPanel_item'>
            <HiOutlineAcademicCap />
          </li>
          <li className='bottomPanel_item'>
            <BsInfoLg />
          </li>
          <li className='bottomPanel_item'>
            <TbArrowBigUpLines />
          </li>
          <li className='bottomPanel_item'>
            <BsNewspaper />
          </li>
          <li className='bottomPanel_item'>OS</li>
          <li className='bottomPanel_item'>
            <Link href={`/game/${companyName}/createPhone`}>
              <MdOutlinePhonelinkSetup />
            </Link>
          </li>
          <li className='bottomPanel_item'>
            <MdPeopleOutline />
          </li>
          <li className='bottomPanel_item'>
            <BsGraphUpArrow />
          </li>
          <li className='bottomPanel_item'>
            <VscGraph />
          </li>
          <li className='bottomPanel_item'>
            <Link href={`/game/${companyName}/yourPhones`}>
              <IoPhonePortraitOutline />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
