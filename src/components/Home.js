import React from 'react'
import icon from "../image/icon.jpg"

function Home() {
  return (
    <main className='card'>
      <div>
        <h1>WELCOME TO OUR VIRTUAL RESTAURANTS</h1>
      </div>
      <div className='icon'>
        <h3>HEALTHY MENUS AVAILABLE</h3>
        <img src={icon} alt="" />
      </div>
    </main>
  );
}

export default Home