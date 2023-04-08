import React from 'react'
import NavNotification from './NavNotification'
import './NotificationMain.css'
import NotificationGroup from './NotificationGroup'
const NotificationMain = () => {
  return (
    <div className='main'>
        <NavNotification/>
        <NotificationGroup/>
    </div>
  )
}

export default NotificationMain