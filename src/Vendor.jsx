import React, { useState } from 'react'
import axios from 'axios'
import Address from './Address'
import VendorDetails from './VendorDetails'

export default function Customer() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const [showLogin, setShowLogin] = useState(false)
  const [address, setShowAddress] = useState(false)

  return (
    <div className='customer__main'>
      {address == false && <main>
        {showLogin == false ? <main className='login__main'>
          <div className="main__login">
            <p className="login__title">Sign Up</p>

            <div className="login__inputs">
              <input type="email" className="email" placeholder='Start typing to dimiss this...' value={email} onChange={(e) => {
                setEmail(e.target.value)
              }} />
              <input type="password" className="password" placeholder='Start typing to dimiss this...' value={password} onChange={(e) => {
                setPassword(e.target.value)
              }} />
            </div>

            <form action="submit" className="signup__form" style={{ width: '100%', display: 'flex', justifyContent: 'center' }} onSubmit={(e) => {
              e.preventDefault()
              if (email != '' && password != '') {
                axios.post('http://localhost:8002/signup', { email: email, password: password })
                  .then(res => {
                    setMessage(res.data.message)

                    if (res.data.message == 'successful') {
                      setShowLogin(true)
                    }
                  })
              }
            }}>
              <button className="user__login">Sign Up</button>
            </form>
            <button className="send__to__signup" onClick={() => {
              setShowLogin(true)
            }}>Already on this platform? Login.</button>
          </div>
          {message == 'User already exist' &&
            <div className="message__main">
              <div className="misc">
                <p className="login__message">User already exists</p>
                <svg aria-label="Close" color="black" fill="black" height="18" role="img" viewBox="0 0 48 48" width="18" className='close' onClick={() => {
                  document.querySelector('.message__main').setAttribute('class', 'message__main__secondary')
                  setTimeout(function () {
                    setMessage('')
                  }, 600)
                }}><title>Close</title><path clip-rule="evenodd" d="M41.8 9.8L27.5 24l14.2 14.2c.6.6.6 1.5 0 2.1l-1.4 1.4c-.6.6-1.5.6-2.1 0L24 27.5 9.8 41.8c-.6.6-1.5.6-2.1 0l-1.4-1.4c-.6-.6-.6-1.5 0-2.1L20.5 24 6.2 9.8c-.6-.6-.6-1.5 0-2.1l1.4-1.4c.6-.6 1.5-.6 2.1 0L24 20.5 38.3 6.2c.6-.6 1.5-.6 2.1 0l1.4 1.4c.6.6.6 1.6 0 2.2z" fill-rule="evenodd"></path></svg>
              </div>

            </div>
          }
        </main> : <main className='login__main'>
          <div className="main__login">
            <p className="login__title">Login</p>

            <div className="login__inputs">
              <input type="email" className="email" placeholder='Start typing to dimiss this...' value={email} onChange={(e) => {
                setEmail(e.target.value)
              }} />
              <input type="password" className="password" placeholder='Start typing to dimiss this...' value={password} onChange={(e) => {
                setPassword(e.target.value)
              }} />
            </div>

            <button className="user__login" onClick={() => {
              if (email != '' && password != '') {
                axios.put('http://localhost:8002/signup', { email: email, password: password })
                  .then(res => {
                    setMessage(res.data.message)
                    if (res.data.message == 'login sucess') {
                      // data.map((profile, index) => {
                      //   profile.email == email && store.dispatch({
                      //     type: 'ADD_MSG',
                      //     text: { message: res.data.message, email: email, dp: profile.dp, name: profile.name, username: (`@${profile.username}`) }
                      //   })
                      // })
                      setShowAddress(true)
                      localStorage.setItem('logintype', 'vendor')
                      localStorage.setItem('vendorEmail', email)

                    } else {
                      setShowAddress(false)
                    }
                    console.log(res.data.message)
                  })
              }

              // console.log(store.getState().msgs[0].message)

            }}>Login</button>
            <button className="send__to__signup" onClick={() => {
              setShowLogin(false)
            }}>Not on this platform? Sign Up.</button>
          </div>

          {(message == 'not register' || message == 'wrong credentials') &&
            <div className="message__main">
              <div className="misc">
                <p className="login__message">Invalid credentials</p>
                <svg aria-label="Close" color="black" fill="black" height="18" role="img" viewBox="0 0 48 48" width="18" className='cross' onClick={() => {
                  document.querySelector('.message__main').setAttribute('class', 'message__main__secondary')
                  setTimeout(function () {
                    // store.dispatch({
                    //   type: 'ADD_MSG',
                    //   text: { message: '' }
                    // })
                    setMessage('')
                    // console.log(store.getState())
                  }, 600)
                }}><title>Close</title><path clip-rule="evenodd" d="M41.8 9.8L27.5 24l14.2 14.2c.6.6.6 1.5 0 2.1l-1.4 1.4c-.6.6-1.5.6-2.1 0L24 27.5 9.8 41.8c-.6.6-1.5.6-2.1 0l-1.4-1.4c-.6-.6-.6-1.5 0-2.1L20.5 24 6.2 9.8c-.6-.6-.6-1.5 0-2.1l1.4-1.4c.6-.6 1.5-.6 2.1 0L24 20.5 38.3 6.2c.6-.6 1.5-.6 2.1 0l1.4 1.4c.6.6.6 1.6 0 2.2z" fill-rule="evenodd"></path></svg>
              </div>

            </div>
          }
        </main>}
      </main>}

      {
        address == true && <VendorDetails />
      }
    </div>
  )
}
