import React from 'react'

export default function Sidebar({ id1 }) {
    return (
        <main>
            <div className="sidebar" id="side">
                <div className="sub__sidebar">
                    <div className="sidebar__texts">
                        <svg className="cross" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" onClick={() => {
                            document.getElementById('body').style.overflowY = 'scroll'
                            document.getElementById('side').style.display = 'none'
                        }}><path d="M18.53 17.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.748.748 0 0 1-1.06 0 .75.75 0 0 1 0-1.06L10.94 12 5.47 6.53a.75.75 0 1 1 1.06-1.06L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47z" fill="currentColor"></path></svg>
                        <div className="sidebar__links">
                            <a href="">Grocery</a>
                            <a href="">Clothes</a>
                            <a href="">Sell</a>
                        </div>
                    </div>
                    <div className="sidebar__btns" style={{ height: ' 40%' }}>
                        <div className="buttons__section" style={{ width: '100%' }} id='b__S'>
                            <a className='btn1' href='/customer' style={{ background: '#1e1e1e', color: 'white', width: '90%' }}>Customer</a>
                            <a className='btn2' href='/vendor' style={{ background: 'black', color: 'white', width: '90%' }}>Vendor</a>
                            <a className='btn2' id='cart' href='/cart' style={{ background: 'black', color: 'white', width: '90%', padding: '0.65rem', fontSize: '0.8rem', fontWeight: 'bold', display: 'none' }}>Cart</a>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
