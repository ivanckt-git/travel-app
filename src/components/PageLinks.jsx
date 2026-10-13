import React from 'react'
import { pageLinks } from '../../data';
import { Link, NavLink } from 'react-router';

const PageLinks = ({groupClass}) => {
  return (
    <ul className={groupClass}>
        {pageLinks.map((link)=>{
              return(<li key={link.id}><NavLink to={link.href}>{link.text}</NavLink></li>)
            }
        )}
    </ul> 
  )
}

export default PageLinks