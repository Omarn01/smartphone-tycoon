'use client'

import PhoneModel from '@/components/PhoneModel/PhoneModel'
import './Size.sass'
import '../../UI/Buttons/ButtonCount.sass'

import { useContext } from 'react'
import { Context } from '@/app/layout'

export default function Size() {
  const sidebar = useContext<any>(Context)

  const changeHomeButton = (sign: string) => {
    if (sign === '+' && sidebar.homeButton < 3)
      sidebar.setHomeButton((prev: number) => (prev -= 1))
    if (sign === '-' && sidebar.homeButton > 0)
      sidebar.setHomeButton((prev: number) => (prev += 1))
  }

  const updateWidthDisplay = (sign: string) => {
    if (sign === '+' && sidebar.phoneWidthDisplay < 150)
      sidebar.setPhoneWidthDisplay((prev: number) => (prev += 5))
    if (sign === '-' && sidebar.phoneWidthDisplay > 70)
      sidebar.setPhoneWidthDisplay((prev: number) => (prev -= 5))
  }
  const updateHeightDisplay = (sign: string) => {
    if (sign === '+' && sidebar.phoneHeightDisplay < 250)
      sidebar.setPhoneHeightDisplay((prev: number) => (prev += 5))
    if (sign === '-' && sidebar.phoneHeightDisplay > 100)
      sidebar.setPhoneHeightDisplay((prev: number) => (prev -= 5))
  }

  const updateWidth = (sign: string) => {
    if (sign === '+' && sidebar.phoneWidth < 150)
      sidebar.setPhoneWidth((prev: number) => (prev += 5))
    if (sign === '-' && sidebar.phoneWidth > 80)
      sidebar.setPhoneWidth((prev: number) => (prev -= 5))
  }

  return (
    <div
      style={{ display: sidebar.sidebar === 1 ? 'flex' : 'none' }}
      className='createPhone_size'
    >
      <div className='createPhone_size_list-left'>
        <div className='createPhone_size_item-left'>
          <p>Smartphone width</p>
          <div className='createPhone_size-button-group'>
            <div className='button-count' onClick={() => updateWidth('-')}>
              -
            </div>
            <div className='button-count' onClick={() => updateWidth('+')}>
              +
            </div>
          </div>
        </div>

        <div className='createPhone_size_item-left'>
          <p>Smartphone height</p>
          <div className='createPhone_size-button-group'>
            <div
              className='button-count'
              onClick={() => sidebar.updateHeight('-')}
            >
              -
            </div>
            <div
              className='button-count'
              onClick={() => sidebar.updateHeight('+')}
            >
              +
            </div>
          </div>
        </div>
        <div className='createPhone_size_item-left'>
          <p>Smartphone width display</p>
          <div className='createPhone_size-button-group'>
            <div
              className='button-count'
              onClick={() => updateWidthDisplay('-')}
            >
              -
            </div>
            <div
              className='button-count'
              onClick={() => updateWidthDisplay('+')}
            >
              +
            </div>
          </div>
        </div>
        <div className='createPhone_size_item-left'>
          <p>Smartphone height display</p>
          <div className='createPhone_size-button-group'>
            <div
              className='button-count'
              onClick={() => updateHeightDisplay('-')}
            >
              -
            </div>
            <div
              className='button-count'
              onClick={() => updateHeightDisplay('+')}
            >
              +
            </div>
          </div>
        </div>
        <div className='createPhone_size_item-left'>
          <p>Smartphone home button</p>
          <div className='createPhone_size-button-group'>
            <div className='button-count' onClick={() => changeHomeButton('-')}>
              -
            </div>
            <div className='button-count' onClick={() => changeHomeButton('+')}>
              +
            </div>
          </div>
        </div>
      </div>

      <div className='createPhone_size-phone'>
        <PhoneModel front={true} side={true} />
      </div>

      <div className='createPhone_size_list-right'></div>
    </div>
  )
}
