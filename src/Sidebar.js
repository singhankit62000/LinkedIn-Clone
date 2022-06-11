import React from 'react'
import "./Sidebar.css";
import { Avatar } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

function Sidebar() {
  const user = useSelector(selectUser);

  const recentItem = (topic) => {
      return(
      <div className='sidebar__recentItem'>
          <span className='sidebar__hash'>#</span>
          <p>{topic}</p>
      </div>
      )
  };

  return (
    <div className='sidebar'>
        <div className='sidebar__top'>
            <img src='https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2020/02/Usign-Gradients-Featured-Image.jpg' alt='' />
            <Avatar src={user.photoURL} className='sidebar__avatar'>
                {user.email[0].toUpperCase()}
            </Avatar>
            <h2>{user.displayName}</h2>
            <h4>{user.email}</h4>
        </div>

        <div className='sidebar__stats'>
            <div className='sidebar__stat' >
                <p>Who viewed you</p>
                <p className='sidebar__statNumber'>2543</p>
            </div>
            <div className='sidebar__stat'>
                <p>Views on post</p>
                <p className='sidebar__statNumber'>2448</p>
            </div>
        </div>

        <div className='sidebar__bottom'>
            <p>Recent</p>
            {recentItem('reactjs')}
            {recentItem('programming')}
            {recentItem('softwareengineering')}
            {recentItem('design')}
            {recentItem('developer')}
        </div>
    </div>
  )
}

export default Sidebar