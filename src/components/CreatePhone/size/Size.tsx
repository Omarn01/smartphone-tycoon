'use client'

import PhoneModel from '@/components/PhoneModel/PhoneModel'
import './Size.sass'
import '../../UI/Buttons/ButtonCount.sass'

import { FC, useContext } from 'react'
import { Context } from '@/app/layout'

export default function Size() {
  const context = useContext<any>(Context)

  return (
    <div
      style={{ display: context.sidebar === 1 ? 'flex' : 'none' }}
      className='createPhone_size'
    >
      <div className='createPhone_size_column'>
        <div className='createPhone_size_item-left'>
          <p>Smartphone width</p>
          <div className='createPhone_size-button-group'>
            <div
              className='button-count'
              onClick={() => context.updateWidth('-')}
            >
              -
            </div>
            <div
              className='button-count'
              onClick={() => context.updateWidth('+')}
            >
              +
            </div>
          </div>
        </div>

        <div className='createPhone_size_item-left'>
          <p>Smartphone height</p>
          <div className='createPhone_size-button-group'>
            <div
              className='button-count'
              onClick={() => context.updateHeight('-')}
            >
              -
            </div>
            <div
              className='button-count'
              onClick={() => context.updateHeight('+')}
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
              onClick={() => context.updateWidthDisplay('-')}
            >
              -
            </div>
            <div
              className='button-count'
              onClick={() => context.updateWidthDisplay('+')}
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
              onClick={() => context.updateHeightDisplay('-')}
            >
              -
            </div>
            <div
              className='button-count'
              onClick={() => context.updateHeightDisplay('+')}
            >
              +
            </div>
          </div>
        </div>
        <div className='createPhone_size_item-left'>
          <p>Smartphone border radius</p>
          <div className='createPhone_size-button-group'>
            <div
              className='button-count'
              onClick={() => context.updateBorderRadius('-')}
            >
              -
            </div>
            <div
              className='button-count'
              onClick={() => context.updateBorderRadius('+')}
            >
              +
            </div>
          </div>
        </div>
        <div className='createPhone_size_item-left'>
          <p>
            Smartphone thinckess {Math.floor(context.phone.thickness / 1.7)}
            (mm)
          </p>
          <div className='createPhone_size-button-group'>
            <div
              className='button-count'
              onClick={() => context.updateThickness('-')}
            >
              -
            </div>
            <div
              className='button-count'
              onClick={() => context.updateThickness('+')}
            >
              +
            </div>
          </div>
        </div>
        <div className='createPhone_size_item-left'>
          <p>Smartphone chin</p>
          <div className='createPhone_size-button-group'>
            <div
              className='button-count'
              onClick={() => context.updateChin('-')}
            >
              -
            </div>
            <div
              className='button-count'
              onClick={() => context.updateChin('+')}
            >
              +
            </div>
          </div>
        </div>
        <div className='createPhone_size_item-left'>
          <p>Smartphone side frames</p>
          <div className='createPhone_size-button-group'>
            <div
              className='button-count'
              onClick={() => context.updateSideFrames('-')}
            >
              -
            </div>
            <div
              className='button-count'
              onClick={() => context.updateSideFrames('+')}
            >
              +
            </div>
          </div>
        </div>
        <div className='createPhone_size_item-left'>
          <p>Smartphone home button</p>
          <div className='createPhone_size-button-group'>
            <div
              className='button-count'
              onClick={() => context.changeHomeButton('-')}
            >
              -
            </div>
            <div
              className='button-count'
              onClick={() => context.changeHomeButton('+')}
            >
              +
            </div>
          </div>
        </div>
      </div>

      <div className='createPhone_size_colum createPhone_size-phone'>
        <PhoneModel front={true} side={true} noColor={true} />
      </div>

      <div className='createPhone_size_column createPhone_size_list-right'></div>
    </div>
  )
}
