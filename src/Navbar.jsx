import React from 'react'
import menu from './menu.png'
import Sidebar from './Sidebar'
import { useState } from 'react'

export default function Navbar() {
    const [open, setOpen] = useState(false)

    return (
        <div className='navbar__main'>
            <div className="navbar">
                <div className="logo__section">
                    <img src="https://images.unsplash.com/photo-1566438480900-0609be27a4be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80" alt="" className='logo' />
                    <div className="logo__texts">
                        <a href="/text">Grocery</a>
                        <a href="/text">Clothes</a>
                        <a href="/text">Sell</a>
                    </div>
                </div>
                <div className="buttons__section">
                    <a className='btn1' href='/customer'>Customer</a>
                    <a className='btn2' href='/vendor' style={{ background: 'white', color: 'black' }}>Vendor</a>
                    <img src={menu} className='hamburger' onClick={() => {
                        document.getElementById('body').style.overflowY = 'hidden'
                        document.getElementById('side').style.display = 'flex'
                    }}></img>
                </div>
            </div>
            <Sidebar />
        </div>
    )
}
