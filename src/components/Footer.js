import React from 'react'

function Footer() {
    return (
      <footer>
            <div className='first'>
                <h2>Location</h2>
                <p>We are located at the Wa Sombo road</p>
                <h5>Working hours:<br /> <mark>Mondays</mark> -
                    <mark>Fridays : 8:30am-5:00pm</mark></h5>
            </div>
            <div>
                <h2>Subscribe to our newsletters</h2>
                <input type="email" placeholder='email address' required />
                <button>Subscribe</button>
                <p>Read our newsletters on what we do on daily basis</p>
            </div>
      </footer>
    );
}

export default Footer