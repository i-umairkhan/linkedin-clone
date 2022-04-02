import { Avatar } from '@mui/material'
import React from 'react'
import './HeaderOption.css'

const HeaderOption = ({avatar , Icon , title}) => {
  return (
    <div className='headerOption'>
        {Icon && <Icon className='headerOption__icon'/> }
        {avatar && <Avatar src={avatar} className='headerOption__icon'/>}
        <h3 className='headerOption__title'>{title}</h3>
    </div>
  )
}

export default HeaderOption