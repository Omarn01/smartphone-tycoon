import { useContext } from 'react'
import PhoneModel from '../PhoneModel/PhoneModel'
import { Context } from '@/app/layout'
import { useLocalStorage } from '@/hooks/useLocalStorage'

export default function YourPhones() {
  const context = useContext(Context)
  const { getItem: localYourPhones, setItem: setLocalYourPhones } =
    useLocalStorage('yourPhones')
  return (
    <>
      {Array(localYourPhones).map(() => {
        ;<PhoneModel />
      })}
    </>
  )
}
