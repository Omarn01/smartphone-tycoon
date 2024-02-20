'use client'

import { useContext, useState } from 'react'
import { Context } from '@/app/layout'
import PhoneModel from '@/components/PhoneModel/PhoneModel'

import './Display.sass'

export default function Display() {
  const context = useContext<any>(Context)
  const [input, setInput] = useState({
    TN: true,
    IPS: false,
    AMOLED: false,
    SUPERAMOLED: false,
    OLED: false,
    QLED: false,
    LCD: false,
  })
  const [resolutionInput, setResolutionInput] = useState({
    LDPI: true,
    MDPI: false,
    HDPI: false,
    XHDPI: false,
    XXHDPI: false,
    XXXHDPI: false,
  })

  const changeCheckedResolution = (type: string) => {
    context.updateResolution(type)
    if (type === 'LDPI')
      setResolutionInput({
        LDPI: true,
        MDPI: false,
        HDPI: false,
        XHDPI: false,
        XXHDPI: false,
        XXXHDPI: false,
      })
    if (type === 'MDPI')
      setResolutionInput({
        LDPI: false,
        MDPI: true,
        HDPI: false,
        XHDPI: false,
        XXHDPI: false,
        XXXHDPI: false,
      })
    if (type === 'HDPI')
      setResolutionInput({
        LDPI: false,
        MDPI: false,
        HDPI: true,
        XHDPI: false,
        XXHDPI: false,
        XXXHDPI: false,
      })
    if (type === 'XHDPI')
      setResolutionInput({
        LDPI: false,
        MDPI: false,
        HDPI: false,
        XHDPI: true,
        XXHDPI: false,
        XXXHDPI: false,
      })
    if (type === 'XXHDPI')
      setResolutionInput({
        LDPI: false,
        MDPI: false,
        HDPI: false,
        XHDPI: false,
        XXHDPI: true,
        XXXHDPI: false,
      })
    if (type === 'XXXHDPI')
      setResolutionInput({
        LDPI: false,
        MDPI: false,
        HDPI: false,
        XHDPI: false,
        XXHDPI: false,
        XXXHDPI: true,
      })
  }

  const changeChecked = (type: string) => {
    context.updateMatrix(type)
    if (type === 'TN')
      setInput({
        IPS: false,
        AMOLED: false,
        SUPERAMOLED: false,
        OLED: false,
        QLED: false,
        LCD: false,
        TN: true,
      })
    if (type === 'IPS')
      setInput({
        IPS: true,
        AMOLED: false,
        SUPERAMOLED: false,
        OLED: false,
        QLED: false,
        LCD: false,
        TN: false,
      })
    if (type === 'AMOLED')
      setInput({
        IPS: false,
        AMOLED: true,
        SUPERAMOLED: false,
        OLED: false,
        QLED: false,
        LCD: false,
        TN: false,
      })

    if (type === 'SUPERAMOLED')
      setInput({
        IPS: false,
        AMOLED: false,
        SUPERAMOLED: true,
        OLED: false,
        QLED: false,
        LCD: false,
        TN: false,
      })
    if (type === 'OLED')
      setInput({
        IPS: false,
        AMOLED: false,
        SUPERAMOLED: false,
        OLED: true,
        QLED: false,
        LCD: false,
        TN: false,
      })
    if (type === 'QLED')
      setInput({
        IPS: false,
        AMOLED: false,
        SUPERAMOLED: false,
        OLED: false,
        QLED: true,
        LCD: false,
        TN: false,
      })
    if (type === 'LCD')
      setInput({
        IPS: false,
        AMOLED: false,
        SUPERAMOLED: false,
        OLED: false,
        QLED: false,
        LCD: true,
        TN: false,
      })
  }

  return (
    <div
      style={{ display: context.sidebar === 4 ? 'flex' : 'none' }}
      className='createPhone_display'
    >
      <div className='createPhone_display_list'>
        <li className='createPhone_display_item'>
          <input
            type='radio'
            value={'TN'}
            name='matrix'
            checked={input.TN}
            onChange={() => changeChecked('TN')}
          />
          <p>TN</p>
        </li>
        <li className='createPhone_display_item'>
          <input
            type='radio'
            value={'IPS'}
            checked={input.IPS}
            name='matrix'
            onChange={() => changeChecked('IPS')}
          />

          <p>IPS</p>
        </li>
        <li className='createPhone_display_item'>
          <input
            type='radio'
            value={'AMOLED'}
            checked={input.AMOLED}
            name='matrix'
            onChange={() => changeChecked('AMOLED')}
          />

          <p>AMOLED</p>
        </li>
        <li className='createPhone_display_item'>
          <input
            type='radio'
            value={'SUPERAMOLED'}
            checked={input.SUPERAMOLED}
            name='matrix'
            onChange={() => changeChecked('SUPERAMOLED')}
          />

          <p>SUPER AMOLED</p>
        </li>
        <li className='createPhone_display_item'>
          <input
            type='radio'
            value={'OLED'}
            checked={input.OLED}
            name='matrix'
            onChange={() => changeChecked('OLED')}
          />

          <p>OLED</p>
        </li>
        <li className='createPhone_display_item'>
          <input
            type='radio'
            value={'QLED'}
            checked={input.QLED}
            name='matrix'
            onChange={() => changeChecked('QLED')}
          />

          <p>QLED</p>
        </li>
        <li className='createPhone_display_item'>
          <input
            type='radio'
            value={'LCD'}
            checked={input.LCD}
            name='matrix'
            onChange={() => changeChecked('LCD')}
          />

          <p>LCD</p>
        </li>
      </div>
      <PhoneModel front={true} />
      <div className='createPhone_display_list'>
        <li className='createPhone_display_item'>
          <input
            type='radio'
            value={'LDPI'}
            checked={resolutionInput.LDPI}
            name='resolution'
            onChange={() => changeCheckedResolution('LDPI')}
          />
          <p>LDPI (240x320)</p>
        </li>
        <li className='createPhone_display_item'>
          <input
            type='radio'
            value={'MDPI'}
            checked={resolutionInput.MDPI}
            name='resolution'
            onChange={() => changeCheckedResolution('MDPI')}
          />
          <p>MDPI (320x480)</p>
        </li>
        <li className='createPhone_display_item'>
          <input
            type='radio'
            value={'HDPI'}
            checked={resolutionInput.HDPI}
            name='resolution'
            onChange={() => changeCheckedResolution('HDPI')}
          />
          <p>HDPI (480x800)</p>
        </li>
        <li className='createPhone_display_item'>
          <input
            type='radio'
            value={'XHDPI'}
            checked={resolutionInput.XHDPI}
            name='resolution'
            onChange={() => changeCheckedResolution('XHDPI')}
          />
          <p>XHDPI (720x1280)</p>
        </li>
        <li className='createPhone_display_item'>
          <input
            type='radio'
            value={'XXHDPI'}
            checked={resolutionInput.XXHDPI}
            name='resolution'
            onChange={() => changeCheckedResolution('XXHDPI')}
          />
          <p>XXHDPI (1080x1920)</p>
        </li>
        <li className='createPhone_display_item'>
          <input
            type='radio'
            value={'XXXHDPI'}
            checked={resolutionInput.XXXHDPI}
            name='resolution'
            onChange={() => changeCheckedResolution('XXXHDPI')}
          />
          <p>XXXHDPI (1440x2560)</p>
        </li>
      </div>
      <div>
        <div>peak brightness {context.peakBrightness} nit</div>
        <div>
          <button className='button-count'>-</button>
          <button className='button-count'>+</button>
        </div>
      </div>
      <div>
        <div>screen frequency {context.screenFrequency} Hz</div>
        <div>
          <button className='button-count'>-</button>
          <button className='button-count'>+</button>
        </div>
      </div>
    </div>
  )
}
