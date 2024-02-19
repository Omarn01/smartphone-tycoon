'use client'

import { useState } from 'react'
import './Homepage.sass'

import Link from 'next/link'

export default function Homepage() {
  const [newGame, setNewGame] = useState(false)
  const [company, setCompany] = useState('')
  console.log(company)

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
          <>
            <h1 className='createCompany_title'>Enter name your company</h1>
            <input
              value={company}
              onChange={e => setCompany(e.target.value)}
              className='createCompany_input'
              type='text'
            />
            <Link href={`/game/${company}`}>Continue</Link>
            <button
              className='createCompany_back'
              onClick={() => setNewGame(prev => !prev)}
            ></button>
          </>
        )}
      </div>
    </div>
  )
}
