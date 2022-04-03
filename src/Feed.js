import React, { useState } from 'react'
import './Feed.css'
import Post from './Post'
import CreateIcon from '@mui/icons-material/Create';
import InputOption from './InputOption';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';

const Feed = () => {
  const [post,setPost] = useState([])
  const sendPost = (e) => {
    e.preventDefault();
  }
  return (
    <div className='feed'>
        <div className='feed__inputContainer'>
            <div className='feed__input'>
            <CreateIcon />
            <form>
                <input type='text'/>
                <button type='submit' onClick={sendPost}>Send</button>
            </form>
            </div>
            <div className='feed__inputOptions'>
                <InputOption Icon={ImageIcon} title='Photo' color='#70B5F9'/>
                <InputOption Icon={SubscriptionsIcon} title='Vedio' color='#E7A33E'/>
                <InputOption Icon={EventNoteIcon} title='Event' color='#C0CBCD'/>
                <InputOption Icon={CalendarViewDayIcon} title='write artical' color='#71CF5E'/>
            </div>
        </div>
        {post.map(post => {
          <Post />
        })}
        <Post name='Umair' description='react dev' massege='Ayyy lets go'/>
    </div>
  )
}

export default Feed