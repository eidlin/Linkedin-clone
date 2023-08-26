import React,{forwardRef} from 'react'
import "./Post.css"
import { Avatar } from '@mui/material';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import OptionInput from './OptionInput';
import ChatIcon from '@mui/icons-material/Chat';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';
const Post = forwardRef (({name,description, message,photoUrl}, ref) => {
  return (
    <div ref={ref} className='post'>
    <div className='post__header'>
    <Avatar src={photoUrl}>{name[0]}</Avatar>
    <div className='post__info'>
    <h2>{name}</h2>
    <p>{description}</p>
    </div>
    </div>
    <div className="post__body">
    <p>{message}</p>
    </div>
    <div className="post__buttons">
    <OptionInput Icon={ThumbUpOffAltIcon} title="Like" color="gray"/>
    <OptionInput Icon={ChatIcon} title="Comment" color="gray"/>
    <OptionInput Icon={ShareIcon} title="Share" color="gray"/>
    <OptionInput Icon={SendIcon} title="Send" color="gray"/>
    </div>
    </div>
  )
})

export default Post