'use client'

import { useState, useMemo, useEffect, useContext } from 'react'
import './Header.sass'
import { Context } from '@/app/layout'

export default function Header() {
  const [year, setYear] = useState(2010)
  const [month, setMonth] = useState(1)
  const [day, setDay] = useState(1)

  const context = useContext<any>(Context)

  useEffect(() => {
    setTimeout(() => {
      if (day < 30) {
        setDay(prev => (prev += 1))
      }
      if (day === 30) {
        setDay(1)
        setMonth(prev => (prev += 1))
      }
      if (month > 12) {
        setDay(1)
        setMonth(1)
        setYear(prev => (prev += 1))
      }
    }, 60000)
  }, [day, year])

  return (
    <div className='header'>
      <div className='header_left'>
        <div className='header_money'>{context.cashCompany} $</div>
        <div className='header_funs'>0</div>
      </div>
      <div className='header_rigth'>
        <div className='header_company'>{context.nameCompany}</div>
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
