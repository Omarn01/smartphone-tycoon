'use client'

import { useContext, useState } from 'react'
import { Context } from '@/app/layout'
import PhoneModel from '@/components/PhoneModel/PhoneModel'

import './Camera.sass'

export default function MainCamera() {
  const [mainCameraPag, setMainCameraPag] = useState(1)
  const [frontCameraPag, setFrontCameraPag] = useState(1)

  const changePagination = (number: number) => {
    setMainCameraPag(number)
  }

  const context = useContext<any>(Context)

  return (
    <div
      style={{ display: context.sidebar === 3 ? 'flex' : 'none' }}
      className='createPhone_camera'
    >
      <div className='createPhone_camera-edit'>
        {mainCameraPag === 1 && (
          <div className='createPhone_camera-list'>
            <div className='createPhone_camera-item'>
              <p>Количество камер</p>
              <div className='button-group'>
                <button className='button-count'>-</button>
                <button className='button-count'>+</button>
              </div>
            </div>
            <div className='createPhone_camera-item'>
              <p>Количество камер</p>
              <div className='button-group'>
                <button className='button-count'>-</button>
                <button className='button-count'>+</button>
              </div>
            </div>
            <div className='createPhone_camera-item'>
              <p>Количество камер</p>
              <div className='button-group'>
                <button className='button-count'>-</button>
                <button className='button-count'>+</button>
              </div>
            </div>
            <div className='createPhone_camera-item'>
              <p>Количество камер</p>
              <div className='button-group'>
                <button className='button-count'>-</button>
                <button className='button-count'>+</button>
              </div>
            </div>
          </div>
        )}

        {mainCameraPag === 2 && (
          <div className='createPhone_camera-list'>
            <div className='createPhone_camera-item'>
              <p>Цифровой зум ({context.phone.digitalZoom}X)</p>
              <div className='button-group'>
                <button
                  className='button-count'
                  onClick={() => context.updateDigitalZoom('-')}
                >
                  -
                </button>
                <button
                  className='button-count'
                  onClick={() => context.updateDigitalZoom('+')}
                >
                  +
                </button>
              </div>
            </div>
            <div className='createPhone_camera-item'>
              <p>Оптический зум ({context.phone.opticalZoom}X)</p>
              <div className='button-group'>
                <button
                  className='button-count'
                  onClick={() => context.updateOpticalZoom('-')}
                >
                  -
                </button>
                <button
                  className='button-count'
                  onClick={() => context.updateOpticalZoom('+')}
                >
                  +
                </button>
              </div>
            </div>
            <div className='createPhone_camera-item'>
              <p>Стабилизация</p>
              <div className='button-group'>
                <button className='button-count'>-</button>
                <button className='button-count'>+</button>
              </div>
            </div>
            <div className='createPhone_camera-item'>
              <p>Апертура f/{context.phone.aperture}</p>
              <div className='button-group'>
                <button
                  className='button-count'
                  onClick={() => context.updateAperture('-')}
                >
                  -
                </button>
                <button
                  className='button-count'
                  onClick={() => context.updateAperture('+')}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        )}

        {mainCameraPag === 3 && (
          <div className='createPhone_camera-list'>
            <div className='createPhone_camera-item'>
              <p>Стабилизация</p>
              <div className='button-group'>
                <button className='button-count'>-</button>
                <button className='button-count'>+</button>
              </div>
            </div>
            <div className='createPhone_camera-item'>
              <p>Разрешение видео</p>
              <div className='button-group'>
                <button className='button-count'>-</button>
                <button className='button-count'>+</button>
              </div>
            </div>
            <div className='createPhone_camera-item'>
              <p>Замедленная съемка</p>
              <div className='button-group'>
                <button className='button-count'>-</button>
                <button className='button-count'>+</button>
              </div>
            </div>
            <div className='createPhone_camera-item'>
              <p>Апертура</p>
              <div className='button-group'>
                <button className='button-count'>-</button>
                <button className='button-count'>+</button>
              </div>
            </div>
          </div>
        )}

        {mainCameraPag === 4 && (
          <div className='createPhone_camera-list'>
            <div className='createPhone_camera-item'>
              <p>Режим ночной съемки</p>
              <div className='button-group'>
                <button className='button-count'>-</button>
                <button className='button-count'>+</button>
              </div>
            </div>
            <div className='createPhone_camera-item'>
              <p>Портретная съемка</p>
              <div className='button-group'>
                <button className='button-count'>-</button>
                <button className='button-count'>+</button>
              </div>
            </div>
            <div className='createPhone_camera-item'>
              <p>Cinematic video</p>
              <div className='button-group'>
                <button className='button-count'>-</button>
                <button className='button-count'>+</button>
              </div>
            </div>
          </div>
        )}

        <div className='createPhone_camera-pagination-block'>
          <div
            onClick={() => setMainCameraPag(1)}
            className={`createPhone_camera-pagination ${
              mainCameraPag === 1 && 'pagination-active'
            }`}
          >
            1
          </div>
          <div
            onClick={() => setMainCameraPag(2)}
            className={`createPhone_camera-pagination ${
              mainCameraPag === 2 && 'pagination-active'
            }`}
          >
            2
          </div>
          <div
            onClick={() => setMainCameraPag(3)}
            className={`createPhone_camera-pagination ${
              mainCameraPag === 3 && 'pagination-active'
            }`}
          >
            3
          </div>
          <div
            onClick={() => setMainCameraPag(4)}
            className={`createPhone_camera-pagination ${
              mainCameraPag === 4 && 'pagination-active'
            }`}
          >
            4
          </div>
        </div>
      </div>
      <div className='createPhone_camera-phone'>
        <PhoneModel back={true} />
      </div>
      <div className='createPhone_camera-edit'>
        <div className='createPhone_camera-list'>
          <div className='createPhone_camera-item'>
            <p>Количество камер</p>
            <div className='button-group'>
              <button className='button-count'>-</button>
              <button className='button-count'>+</button>
            </div>
          </div>
          <div className='createPhone_camera-item'>
            <p>Количество камер</p>
            <div className='button-group'>
              <button className='button-count'>-</button>
              <button className='button-count'>+</button>
            </div>
          </div>
          <div className='createPhone_camera-item'>
            <p>Количество камер</p>
            <div className='button-group'>
              <button className='button-count'>-</button>
              <button className='button-count'>+</button>
            </div>
          </div>
          <div className='createPhone_camera-item'>
            <p>Количество камер</p>
            <div className='button-group'>
              <button className='button-count'>-</button>
              <button className='button-count'>+</button>
            </div>
          </div>
        </div>
        <div className='createPhone_camera-pagination-block'>
          <div
            onClick={() => setFrontCameraPag(1)}
            className={`createPhone_camera-pagination ${
              frontCameraPag === 1 && 'pagination-active'
            }`}
          >
            1
          </div>
          <div
            onClick={() => setFrontCameraPag(2)}
            className={`createPhone_camera-pagination ${
              frontCameraPag === 2 && 'pagination-active'
            }`}
          >
            2
          </div>
          <div
            onClick={() => setFrontCameraPag(3)}
            className={`createPhone_camera-pagination ${
              frontCameraPag === 3 && 'pagination-active'
            }`}
          >
            3
          </div>
        </div>
      </div>
    </div>
  )
}
