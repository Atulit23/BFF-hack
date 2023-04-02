import React, { useState } from 'react'
import axios from 'axios'
import ClosestVendors from './ClosestVendors'

export default function Address() {
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [dabri, setDabri] = useState(false)
    const [ablock, setABlock] = useState(false)
    const [sukhram, setSukhRam] = useState(false)
    const [addressMain, setAddressMain] = useState(false)

    const [show, setShow] = useState(false)

    const successCallback = (position) => {
        console.log(position);
    };

    const errorCallback = (error) => {
        console.log(error);
    };

    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);

    const id = navigator.geolocation.watchPosition(successCallback, errorCallback);

    return (
        <main>
            <div className="user__address" id='u__a'>
                <p>Your address</p>
                <div className="address__inputs">
                    <div className="name">
                        <p>Name</p>
                        <input type="text" placeholder='Enter your name' onChange={(e) => {
                            setName(e.target.value)
                        }} />
                    </div>
                    <div className="address">
                        <p>Address</p>
                        <input type="text" placeholder='Address goes here' value={address} onChange={(e) => {
                            setAddress(e.target.value)
                            setAddressMain(true)
                        }} />
                    </div>
                    <button className="submit__address" onClick={() => {
                        axios.post('http://localhost:8001/address', { name: name, address: address, email: localStorage.getItem('signEmail') })
                        // setShow(!show)
                        window.location.href = '/customer/login'
                    }}>Submit</button>
                </div>
            </div>

            {(address != '' && addressMain == true) &&
                <main>
                    <div className="addresses">
                        <p onClick={() => {
                            setDabri(true)
                            setABlock(false)
                            setSukhRam(false)
                            setAddress('Dabri Mor')
                            document.getElementById('body').style.scrollY = 'hidden'
                        }}>Dabri Mor</p>
                        <p onClick={() => {
                            setDabri(false)
                            setABlock(true)
                            setSukhRam(false)
                            setAddress('A block janakpuri')
                            document.getElementById('body').style.scrollY = 'hidden'
                        }}>A block janakpuri</p>
                        <p onClick={() => {
                            setDabri(false)
                            setABlock(false)
                            setSukhRam(true)
                            setAddress('Sukh Ram Park')
                            document.getElementById('body').style.scrollY = 'hidden'
                        }}>Sukh Ram Park</p>
                    </div>

                    {dabri == true &&
                        <div className="dabri">
                            <svg className="cross_add" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" onClick={() => {
                                setDabri(false)
                                document.getElementById('body').style.overflowY = 'scroll'
                                setAddressMain(false)
                            }}><path d="M18.53 17.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.748.748 0 0 1-1.06 0 .75.75 0 0 1 0-1.06L10.94 12 5.47 6.53a.75.75 0 1 1 1.06-1.06L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47z" fill="currentColor"></path></svg>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5553.833299016954!2d77.08535292962098!3d28.60757730986064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1b4d795205cf%3A0xcb8faef9881bc4dd!2sDabri%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1680407613444!5m2!1sen!2sin" width="600" height="450" style={{ border: '0' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    }

                    {ablock == true &&
                        <div className="dabri">
                            <svg className="cross_add" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" onClick={() => {
                                setABlock(false)
                                document.getElementById('body').style.overflowY = 'scroll'
                                setAddressMain(false)

                            }}><path d="M18.53 17.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.748.748 0 0 1-1.06 0 .75.75 0 0 1 0-1.06L10.94 12 5.47 6.53a.75.75 0 1 1 1.06-1.06L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47z" fill="currentColor"></path></svg>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.1666468922817!2d77.06914421543766!3d28.624767141182375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d04c45c781eab%3A0xba2b911aeeb48106!2sBlock%20A1%2C%20Janakpuri%2C%20Delhi!5e0!3m2!1sen!2sin!4v1680407791205!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" style={{ border: '0' }}></iframe>
                        </div>

                    }

                    {sukhram == true &&
                        <div className="dabri">
                            <svg className="cross_add" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" onClick={() => {
                                setSukhRam(false)
                                document.getElementById('body').style.overflowY = 'scroll'
                                setAddressMain(false)

                            }}><path d="M18.53 17.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.748.748 0 0 1-1.06 0 .75.75 0 0 1 0-1.06L10.94 12 5.47 6.53a.75.75 0 1 1 1.06-1.06L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47z" fill="currentColor"></path></svg>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.529484376389!2d77.04227771543745!3d28.613888941674666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0531e7664069%3A0x45b8f977df0d231b!2sSukh%20Ram%20Park%2C%20Matiala%2C%20Delhi%2C%20110059!5e0!3m2!1sen!2sin!4v1680407893609!5m2!1sen!2sin" width="600" height="450" style={{ border: '0' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    }
                </main>
            }
        </main>
    )
}
