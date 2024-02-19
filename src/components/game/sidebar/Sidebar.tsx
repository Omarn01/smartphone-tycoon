'use client'

import Link from 'next/link'
import './Bottombar.sass'

import { usePathname } from 'next/navigation'

export default function Bottombar() {
  const companyName = usePathname().split('/')[2]
  return (
    <div className='bottombar'>
      <div className='container'>
        <ul className='bottombar_list'>
          <li className='bottombar_item'>pause</li>
          <li className='bottombar_item'>lab</li>
          <li className='bottombar_item'>info</li>
          <li className='bottombar_item'>office</li>
          <li className='bottombar_item'>news</li>
          <li className='bottombar_item'>OS</li>
          <li className='bottombar_item'>
            <Link href={`/game/${companyName}/createPhone`}>Create phone</Link>
          </li>
          <li className='bottombar_item'>employees</li>
          <li className='bottombar_item'>marketing</li>
          <li className='bottombar_item'>rating</li>
          <li className='bottombar_item'>Your</li>
        </ul>
      </div>
    </div>
  )
}
