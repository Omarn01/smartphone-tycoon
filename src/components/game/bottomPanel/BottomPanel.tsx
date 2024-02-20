'use client'

import Link from 'next/link'
import './BottomPanel.sass'

import { usePathname } from 'next/navigation'

export default function BottomPanel() {
  const companyName = usePathname().split('/')[2]
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
          <li className='bottomPanel_item'>Your</li>
        </ul>
      </div>
    </div>
  )
}
