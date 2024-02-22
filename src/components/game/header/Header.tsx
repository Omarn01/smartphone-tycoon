'use client'

import { useState, useMemo, useEffect } from 'react'
import './Header.sass'

export default function Header() {
  const [year, setYear] = useState(2010)
  const [month, setMonth] = useState(1)
  const [day, setDay] = useState(1)

  // useEffect(() => {
  //   setInterval(() => {
  //     setDay(prev => (prev += 1))
  //   }, 1000)
  // }, [day])

  return (
    <div className='header'>
      <div className='header_left'>
        <div className='header_money'>50 000 000 $</div>
        <div className='header_funs'>0</div>
      </div>
      <div className='header_rigth'>
        <div className='header_company'>company</div>
        <div className='header_date'>
          {day}.{month}.{year}
        </div>
      </div>
    </div>
  )
}
// function useMemo(arg0: NodeJS.Timeout, arg1: number[]) {
//   throw new Error('Function not implemented.')
// }
