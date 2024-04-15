// import React, { useEffect } from 'react'

// interface DeviceOrientationEventiOS extends DeviceOrientationEvent {
//     requestPermission?: () => Promise<'granted' | 'denied'>;
//   }

// export default function Notification() {
//     useEffect(() => {
//         async function  click() {
//         //   if (!('Notification' in window)) {
//         //     alert('This browser does not support desktop notification')
//         //   } else if (Notification.permission === 'granted') {
//         //     const notification = new Notification('Hi there!')
//         //   } else if (Notification.permission !== 'denied') {
//         //     Notification.requestPermission().then(permission => {
//         //       if (permission === 'granted') {
//         //         const notification = new Notification('Hi there!')

//         //       }
//         //     })
//         //   }

//         const requestPermission = (DeviceOrientationEvent as unknown as DeviceOrientationEventiOS).requestPermission;
//         const iOS = typeof requestPermission === 'function';
//         if (iOS) {
//             const response = await requestPermission();
//             if (response === 'granted') {
//             // execute
//             }
//         }

//         }
//         click()
//     }, [])
//   return (
//     <button
//       style={{
//         border: 'none',
//         backgroundColor: 'orange',
//         borderRadius: 10,
//         color: '#fff',
//         padding: 20,
//       }}
//     >
//       Notification
//     </button>
//   )
// }
