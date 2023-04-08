import React from 'react'
import notifications from "../assets/notification.json"
import SingleNotification from './SingleNotification'
import './NotificationGroup.css'

const NotificationGroup = () => {
  return (
    <div className='group-container'>
        {
          notifications.map((notification)=>{
            return <SingleNotification notification={notification} key={notification.id} />
          })
        }
    </div>
  )
}

export default NotificationGroup