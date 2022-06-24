import React from 'react'

import './styles.css';

function NavigationDesktop({ data }) {
  console.log(data);
  return (
    <div className="nav-desktop">
      <ul>
      {
        data && data.map((item) => {
          return (
            <li key={item.id}><a href={item.href}>{item.text}</a></li>
          )
        })
      }
      </ul>
    </div>
  )
}

export default NavigationDesktop;
