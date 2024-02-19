'use client'

import PhoneModel from '@/components/PhoneModel/PhoneModel'
import './CreatePhone.sass'

import { useState } from 'react'

export default function Page() {
  const [phoneWidth, setPhoneWidth] = useState(150)
  const [phoneHeight, setPhoneHeight] = useState(250)
  const [phoneThickness, setPhoneThickness] = useState(20)
  const [phoneSideFrames, setPhoneSideFrames] = useState(10)
  const [phoneColor, setPhoneColor] = useState('111')

  const [sidebar, setSidebar] = useState(1)

  const updateWidth = (sign: string) => {
    if (sign === '+') setPhoneWidth(prev => (prev += 10))
    else setPhoneWidth(prev => (prev -= 10))
  }

  const updateHeight = (sign: string) => {
    if (sign === '+') setPhoneHeight(prev => (prev += 10))
    else setPhoneHeight(prev => (prev -= 10))
  }

  const updateThickness = (sign: string) => {
    if (sign === '+') setPhoneThickness(prev => (prev += 1))
    else setPhoneThickness(prev => (prev -= 1))
  }

  const updatePhoneSideFrames = (sign: string) => {
    if (sign === '+') setPhoneSideFrames(prev => (prev += 1))
    else setPhoneSideFrames(prev => (prev -= 1))
  }

  const toggleSidebar = (i: number) => {
    setSidebar(i)
  }

  const changeColor = (color: string) => {
    setPhoneColor(color)
  }

  console.log('color', phoneColor)

  return (
    <div className='createPhone'>
      <div className='sidebar'>
        <ul className='sidebar_list'>
          <li
            onClick={() => toggleSidebar(1)}
            className={`sidebar_item ${sidebar === 1 && 'sidebar-active'} `}
          >
            size
          </li>
          <li
            onClick={() => toggleSidebar(2)}
            className={`sidebar_item ${sidebar === 2 && 'sidebar-active'} `}
          >
            color
          </li>
          <li
            onClick={() => toggleSidebar(3)}
            className={`sidebar_item ${sidebar === 3 && 'sidebar-active'} `}
          >
            main camera
          </li>
          <li
            onClick={() => toggleSidebar(4)}
            className={`sidebar_item ${sidebar === 4 && 'sidebar-active'} `}
          >
            display
          </li>
          <li
            onClick={() => toggleSidebar(5)}
            className={`sidebar_item ${sidebar === 5 && 'sidebar-active'} `}
          >
            front camera
          </li>
          <li
            onClick={() => toggleSidebar(6)}
            className={`sidebar_item ${sidebar === 6 && 'sidebar-active'} `}
          >
            processor
          </li>
          <li
            onClick={() => toggleSidebar(7)}
            className={`sidebar_item ${sidebar === 7 && 'sidebar-active'} `}
          >
            os
          </li>
          <li
            onClick={() => toggleSidebar(8)}
            className={`sidebar_item ${sidebar === 8 && 'sidebar-active'} `}
          >
            audio
          </li>
          <li
            onClick={() => toggleSidebar(9)}
            className={`sidebar_item ${sidebar === 9 && 'sidebar-active'} `}
          >
            package
          </li>
          <li
            onClick={() => toggleSidebar(10)}
            className={`sidebar_item ${sidebar === 10 && 'sidebar-active'} `}
          >
            package
          </li>
          <li
            onClick={() => toggleSidebar(11)}
            className={`sidebar_item ${sidebar === 11 && 'sidebar-active'} `}
          >
            package
          </li>
          <li
            onClick={() => toggleSidebar(12)}
            className={`sidebar_item ${sidebar === 12 && 'sidebar-active'} `}
          >
            package
          </li>
          <li
            onClick={() => toggleSidebar(13)}
            className={`sidebar_item ${sidebar === 13 && 'sidebar-active'} `}
          >
            package
          </li>
        </ul>
      </div>
      <div
        style={{ display: sidebar === 1 ? 'flex' : 'none' }}
        className='createPhone_main'
      >
        <div className='createPhone_main_list-left'>
          <div className='createPhone_main_item-left'>
            <div className='button' onClick={() => updateWidth('-')}>
              -
            </div>
            <p>Smartphone width</p>
            <div className='button' onClick={() => updateWidth('+')}>
              +
            </div>
          </div>

          <div className='createPhone_main_item-left'>
            <div className='button' onClick={() => updateHeight('-')}>
              -
            </div>
            <p>Smartphone height</p>
            <div className='button' onClick={() => updateHeight('+')}>
              +
            </div>
          </div>
          <div className='createPhone_main_item-left'>
            <div className='button' onClick={() => updateThickness('-')}>
              -
            </div>
            <p>Smartphone thickness</p>
            <div className='button' onClick={() => updateThickness('+')}>
              +
            </div>
          </div>
          <div className='createPhone_main_item-left'>
            <div className='button' onClick={() => updatePhoneSideFrames('-')}>
              -
            </div>
            <p>Smartphone side frames</p>
            <div className='button' onClick={() => updatePhoneSideFrames('+')}>
              +
            </div>
          </div>
        </div>

        <PhoneModel
          updateSideFrames={phoneSideFrames}
          updateThickness={phoneThickness}
          updateWidth={phoneWidth}
          updateHeight={phoneHeight}
        />
        <div className='createPhone_main_list-right'></div>
      </div>
      <div
        style={{ display: sidebar === 2 ? 'flex' : 'none' }}
        className='createPhone_color'
      >
        <div className='createPhone_color_list-left'>
          <div className='createPhone_color_item-left'>
            <input
              type='color'
              value={phoneColor}
              onChange={e => changeColor(e.target.value)}
            />
          </div>
        </div>
        <PhoneModel
          updateColor={phoneColor}
          updateSideFrames={phoneSideFrames}
          updateThickness={phoneThickness}
          updateWidth={phoneWidth}
          updateHeight={phoneHeight}
        />
        <div className='createPhone_color_list-right'></div>
      </div>

      <div
        style={{ display: sidebar === 4 ? 'flex' : 'none' }}
        className='createPhone_display'
      >
        <PhoneModel
          updateColor={phoneColor}
          updateSideFrames={phoneSideFrames}
          updateThickness={phoneThickness}
          updateWidth={phoneWidth}
          updateHeight={phoneHeight}
        />
      </div>
    </div>
  )
}
