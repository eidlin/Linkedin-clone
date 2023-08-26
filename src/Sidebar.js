import React from 'react'
import "./Sidebar.css"
import { Avatar } from '@mui/material';
import { selectUser } from './features/userSlice';
import { useSelector } from 'react-redux';
function Sidebar() {

const user= useSelector(selectUser);

const recentItem = (topic) =>(
  <div className='sidebar__recentItem'>
  <span className='sidebar__hash'>#</span>
  <p>{topic}</p>

  </div>

  );
  return (
    <div className='sidebar'>
<div className='sidebar__top'>
<img src="https://images.unsplash.com/photo-1614850523296-d8c1af93d400?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNvbG9yZnVsJTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" alt=""/>
<Avatar src={user?.photoUrl} className='sidebar__avatar'>
{user.email[0]}
</Avatar>
<h2>{user.displayName}</h2>
<h4>{user.email}</h4>
</div>
<div className='sidebar__stat'>
<p>Who viewed you</p>
<p className='sidebar__statNumber'>2,543</p>
</div>
<div className='sidebar__stat'>
<p>Views on post</p>
<p className='sidebar__statNumber'>2,448</p>
</div>
<div className='sidebar__bottom'>
<p>Recent</p>
{recentItem('reactjs')}
{recentItem('programing')}
{recentItem('softwareengineering')}
{recentItem('design')}
{recentItem('developer')}
</div>
    </div>
  )
}

export default Sidebar