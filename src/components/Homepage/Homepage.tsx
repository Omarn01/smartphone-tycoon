'use client'

import { useContext, useState } from 'react'
import './Homepage.sass'
import { FaArrowLeft } from 'react-icons/fa'

import Link from 'next/link'
import { Context } from '@/app/layout'
import { useLocalStorage } from '@/hooks/useLocalStorage'

export default function Homepage() {
  const [newGame, setNewGame] = useState(false)
  const [companyName, setCompanyName] = useState('')

  const context = useContext<any>(Context)

  const { getItem: localYourPhones, setItem: setLocalYourPhones } =
    useLocalStorage('yourPhones')

  const { getItem: localDay, setItem: setLocalDay } = useLocalStorage('day')
  const { getItem: localMonth, setItem: setLocalMonth } =
    useLocalStorage('month')
  const { getItem: localYear, setItem: setLocalYear } = useLocalStorage('year')

  const { getItem: localCompanyName, setItem: setLocalCompanyName } =
    useLocalStorage('companyName')

  const { setItem: setLocalFans } = useLocalStorage('fans')

  const initialGame = () => {
    setLocalYourPhones(JSON.stringify([]))

    setLocalDay(1)
    setLocalMonth(1)
    setLocalYear(2010)

    setLocalFans(0)

    setLocalCompanyName(companyName)
  }

  return (
    <div className='container homepage'>
      <div className='homepage_phone'>
        {!newGame ? (
          <>
            <div className='homepage_buttons-main homepage_buttons'>
              <button disabled>Continue</button>
              <button onClick={() => setNewGame(prev => !prev)}>
                New game
              </button>
            </div>
            <div className='homepage_buttons-secondary homepage_buttons'>
              <button>Settings</button>
              <button>Edit</button>
            </div>
          </>
        ) : (
          <div className='createCompany_wrapper'>
            <div onClick={() => setNewGame(false)}>
              <FaArrowLeft />
            </div>
            <div className='createCompany_content'>
              <h1 className='createCompany_title'>Enter name your company</h1>
              <input
                value={companyName}
                onChange={e => setCompanyName(e.target.value)}
                className='createCompany_input'
                type='text'
              />
              {companyName && (
                <Link
                  onClick={initialGame}
                  className='createCompany_continue'
                  href={`/game/${localCompanyName()}`}
                >
                  Continue
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
