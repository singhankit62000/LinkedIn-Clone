import React from 'react'
import "./Widgets.css"
import InfoIcon from "@material-ui/icons/Info"
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Widgets() {

  const newsArticle = (heading, subtitle) => (
    <div className='widgets__article'>
        <div className='widgets__articleLeft'>
            <FiberManualRecordIcon />
        </div>
        <div className='widgets__articleRight'>
            <h4>{heading}</h4>
            <p>{subtitle}</p>
        </div>
    </div>
  )

  return (
    <div className='widgets'>
        <div className='widgets__header'>
            <h2>LinkedIn News</h2>
            <InfoIcon />
        </div>
        {newsArticle("Coronavirus: India Updates", "Top news - 9799 readers")}
        {newsArticle("Tesla hits new highs", "Cars & auto - 2058 readers")}
        {newsArticle("Bitcoin breaks $22k", "Crypto - 8970 readers")}
        {newsArticle("Is Redux too good", "Code - 254 readers")}
        {newsArticle("Amazon on another hiring spree", "Companies - 8755 readers")}
    </div>
  )
}

export default Widgets