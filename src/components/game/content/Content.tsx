import { useEffect } from 'react'
import style from './Content.module.scss'

export default function Content() {
  const handlerNotification = async () => {
    const res = await Notification.requestPermission()

    if (res === 'granted') {
      new Notification('hi')
    }
  }

  function notifyMe() {
    if (!('Notification' in window)) {
      // Check if the browser supports notifications
      alert('This browser does not support desktop notification')
    } else if (Notification.permission === 'granted') {
      // Check whether notification permissions have already been granted;
      // if so, create a notification
      const notification = new Notification('Hi there!')
      // …
    } else if (Notification.permission !== 'denied') {
      // We need to ask the user for permission
      Notification.requestPermission().then(permission => {
        // If the user accepts, let's create a notification
        if (permission === 'granted') {
          const notification = new Notification('Hi there!')
        }
      })
    }
  }
  useEffect(() => {
    new Notification('aaaa')
  }, [])

  return (
    <div>
      <button onClick={() => notifyMe()}>Notification</button>
    </div>
  )
}
