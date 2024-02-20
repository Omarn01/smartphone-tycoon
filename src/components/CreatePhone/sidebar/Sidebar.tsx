'use client'

import { FC, useContext } from 'react'
import { Context } from '@/app/layout'

interface IProps {
  sidebar: number
  setSidebar: FC
}

export default function Sidebar() {
  const sidebar = useContext<any>(Context)

  console.log(sidebar)
  const toggleSidebar = (i: number) => {
    sidebar.setSidebar(i)
  }

  return (
    <div className='sidebar'>
      <ul className='sidebar_list'>
        <li
          onClick={() => toggleSidebar(1)}
          className={`sidebar_item ${
            sidebar.sidebar === 1 && 'sidebar-active'
          } `}
        >
          size
        </li>
        <li
          onClick={() => toggleSidebar(2)}
          className={`sidebar_item ${
            sidebar.sidebar === 2 && 'sidebar-active'
          } `}
        >
          color
        </li>
        <li
          onClick={() => toggleSidebar(3)}
          className={`sidebar_item ${
            sidebar.sidebar === 3 && 'sidebar-active'
          } `}
        >
          main camera
        </li>
        <li
          onClick={() => toggleSidebar(4)}
          className={`sidebar_item ${
            sidebar.sidebar === 4 && 'sidebar-active'
          } `}
        >
          display
        </li>
        <li
          onClick={() => toggleSidebar(5)}
          className={`sidebar_item ${
            sidebar.sidebar === 5 && 'sidebar-active'
          } `}
        >
          front camera
        </li>
        <li
          onClick={() => toggleSidebar(6)}
          className={`sidebar_item ${
            sidebar.sidebar === 6 && 'sidebar-active'
          } `}
        >
          processor
        </li>
        <li
          onClick={() => toggleSidebar(7)}
          className={`sidebar_item ${
            sidebar.sidebar === 7 && 'sidebar-active'
          } `}
        >
          os
        </li>
        <li
          onClick={() => toggleSidebar(8)}
          className={`sidebar_item ${
            sidebar.sidebar === 8 && 'sidebar-active'
          } `}
        >
          audio
        </li>
        <li
          onClick={() => toggleSidebar(9)}
          className={`sidebar_item ${
            sidebar.sidebar === 9 && 'sidebar-active'
          } `}
        >
          package
        </li>
      </ul>
    </div>
  )
}
