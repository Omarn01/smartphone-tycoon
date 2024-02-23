'use client'

import { useContext, useState } from 'react'
import './Homepage.sass'
import { FaArrowLeft } from 'react-icons/fa'

import Link from 'next/link'
import { Context } from '@/app/layout'

export default function Homepage() {
  const [newGame, setNewGame] = useState(false)

  const context = useContext<any>(Context)

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
                value={context.company}
                onChange={e => context.setNameCompany(e.target.value)}
                className='createCompany_input'
                type='text'
              />
              <Link href={`/game/${context.company}`}>Continue</Link>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
