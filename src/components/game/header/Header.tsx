// 'use client'

// import { useState, useMemo, useEffect, useContext } from 'react'
// import './Header.sass'
// import { Context } from '@/app/layout'
// import { useLocalStorage } from '@/hooks/useLocalStorage'

// export default function Header() {
//   const [year, setYear] = useState(2010)
//   const [month, setMonth] = useState(1)
//   const [day, setDay] = useState(1)

//   const context = useContext<any>(Context)

//   const { getItem: localDay, setItem: setLocalDay } = useLocalStorage('day')
//   const { getItem: localMonth, setItem: setLocalMonth } =
//     useLocalStorage('month')
//   const { getItem: localYear, setItem: setLocalYear } = useLocalStorage('year')

//   const { getItem: localFans, setItem: setLocalFans } = useLocalStorage('fans')

//   const { getItem: localCompanyName } = useLocalStorage('companyName')

//   useEffect(() => {
//     setTimeout(() => {
//       if (day < 30) {
//         const day = Number(localDay())

//         setLocalDay(day + 1)
//         setDay(day)
//       }
//       if (day >= 30) {
//         const month = Number(localMonth())

//         setLocalDay(1)
//         setDay(1)
//         setMonth(month + 1)
//         setLocalMonth(month + 1)
//       }
//       if (month > 12) {
//         const year = Number(localYear())

//         setDay(1)
//         setMonth(1)
//         setYear(prev => (prev += 1))
//         setLocalDay(1)
//         setLocalMonth(1)
//         setLocalYear(year + 1)
//       }
//     }, 1000)
//   }, [day, month, year])

//   const { getItem: cashCompany } = useLocalStorage('cashCompany')

//   return (
//     <div className='header'>
//       <div className='header_left'>
//         <div className='header_money'>{cashCompany()} $</div>
//         <div className='header_fans'>{localFans()}</div>
//       </div>
//       <div className='header_right'>
//         <div className='header_company'>
//           {localDay()}.{localMonth()}.{localYear()}
//         </div>
//         <div className='header_date'>{localCompanyName()}</div>
//       </div>
//     </div>
//   )
// }
import React from 'react'

export default function Header() {
  return <div>Header</div>
}
