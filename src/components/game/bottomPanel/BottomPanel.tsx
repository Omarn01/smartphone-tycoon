'use client'

import Link from 'next/link'
import './BottomPanel.sass'

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
          <li className='bottomPanel_item'>pause</li>
          <li className='bottomPanel_item'>lab</li>
          <li className='bottomPanel_item'>info</li>
          <li className='bottomPanel_item'>office</li>
          <li className='bottomPanel_item'>news</li>
          <li className='bottomPanel_item'>OS</li>
          <li className='bottomPanel_item'>
            <Link href={`/game/${companyName}/createPhone`}>Create phone</Link>
          </li>
          <li className='bottomPanel_item'>employees</li>
          <li className='bottomPanel_item'>marketing</li>
          <li className='bottomPanel_item'>rating</li>
          <li className='bottomPanel_item'>
            <Link href={`/game/${companyName}/yourPhones`}>Your</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
