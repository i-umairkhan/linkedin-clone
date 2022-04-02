import { Avatar } from '@mui/material'
import React from 'react'
import './Sidebar.css'

const Sidebar = () => {

    const recetitem = (topic) => {
        return(
            <div className='sidebar__recentitem'>
                <span className='sidebar__hash'>#</span>
                <p>{topic}</p>
            </div>
        )
    }
  return (
    <div className='sidebar'>
        
        <div className='sidebar__top'>
            <img src='https://images.unsplash.com/photo-1647831597506-3f9071cbbd6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80' alt=''/>
            <Avatar className='sidebar__avatar'/>
            <h2>Umair Khan</h2>
            <h4>umair.k2607@gmail.com</h4>
        </div>

        <div className='sidebar__stats'>
            <div className='sidebar__stat'>
                <p>Who viewed you</p>
                <p className='sidebar__statNumber'>2540</p>
            </div>
            <div className='sidebar__stat'>
                <p>Views on post</p>
                <p className='sidebar__statNumber'>1140</p>
            </div>
        </div>

        <div className='sidebar__bottom'>
            <p>Recent</p>
            {recetitem('react js')}
            {recetitem('programing')}
            {recetitem('design')}
            {recetitem('developer')}
        </div>
    </div>
  )
}

export default Sidebar