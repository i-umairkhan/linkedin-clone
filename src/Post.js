import { Avatar } from '@mui/material'
import React from 'react'
import InputOption from './InputOption'
import './Post.css'
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

const Post = ({name,description,massege,photourl}) => {
  return (
    <div className='post'>
        <div className='post__header'>
            <Avatar />
            <div className='post__info'>
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
        </div>
        <div className='post__body'>
            <p>{massege}</p>
        </div>
        <div className='post__buttons'>
            <InputOption Icon={ThumbUpOutlinedIcon} title='Like' color='gray'/>
            <InputOption Icon={ChatBubbleOutlineOutlinedIcon} title='Comment' color='gray'/>
            <InputOption Icon={ShareOutlinedIcon} title='Share' color='gray'/>
            <InputOption Icon={SendOutlinedIcon} title='Send' color='gray'/>
        </div>
    </div>
  )
}

export default Post