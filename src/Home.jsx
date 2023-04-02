import React from 'react'
import banner from './banner.png'
import city from './city_icon-f53915f8.png'
import graph from './graph_icon-8da971b2.png'
import vendor from './png-vendor icon-4556a37b.png'
import abc from './vendor-img-2-d7b2dfed.jpg'
import abc1 from './vendor-img-1-eb5d67ed.webp'
import abc2 from './vendor-img-3-26ad0705.webp'

export default function Home() {
    return (
        <div>
            <div className="lower-landing  m-auto">
                {/* <div className="upper-btns w-[max-content]  flex">
                    <button className="font-semibold text-sm mx-6 px-2 py-3 hover:underline hover:text-green-600">Grocery</button>
                    <button className="font-semibold text-sm mx-6 px-2 py-3 hover:underline hover:text-green-600">Clothes</button>
                    <button className="font-semibold text-sm mx-6 px-2 py-3 hover:underline hover:text-green-600">Sell</button>
                </div> */}
                <div className="bg" />
                <div className="container w-[84rem] bg-zinc-200" style={{
                    display: 'flex',
                    flexDirection: 'column',
                    margin: 'auto'
                }}>
                    <div className="flex items-center loc-search">
                        <div className="current">
                            <input type="search" className="py-2 px-3 border-2 m-2" placeholder="Place to search at.. " name="location" id />
                        </div>
                        <button className="bg-zinc-700 text-gray-50 font-semibold text-lg px-3 py-2 my-5">Search Street <span className="text-green-600"> Sellers</span> </button>
                    </div>
                    <img src={banner} alt style={{ width: '100vw' }} />
                </div>
            </div>
            <div class="mid-landing ">
                <h1 class="text-2xl text-center py-5 font-bold w-[548px] m-auto">Global Community selling High Quality and Cheap Cost Products</h1>
                <div class="icons flex  justify-center items-center">
                    <div class="ics"><img src={city} alt="" />
                        <h3 class="text-base text-center font-semibold">2 cities covered</h3>
                    </div>
                    <div class="ics p-5">
                        <img src={graph} alt="" />
                        <h3 class="text-base text-center font-semibold">300+ Yearly Online Purchases</h3>
                    </div>
                    <div class="ics "> <img src={vendor} class="w-56 py-1" alt="" />
                        <h3 class="text-base text-center font-semibold">250+ TRUSTED street vendors</h3>
                    </div>
                </div>
            </div>
            <div class="vendor-laning bg-slate-100">
                <h1 class="text-3xl font-bold text-center w-[500px] m-auto py-10">Make Money. Earn Respect. Secure Your Future.</h1>
                <div class="container flex justify-center m-auto ">
                    <div class="services px-5 hover:cursor-pointer hover:text-green-800 hover:bg-slate-300">
                        <img src={abc} alt="" />
                        <h3 class="text-center font-bold text-xl py-5">
                            Register as a Vendor
                        </h3>
                    </div>
                    <div class="services px-5 hover:cursor-pointer hover:text-green-800 hover:bg-slate-300">
                        <img src={abc1} alt="" />
                        <h3 class="text-center font-bold text-xl py-5">
                            Sell Online without Hesitation
                        </h3>
                    </div>
                    <div class="services hover:text-green-800 px-5 hover:cursor-pointer hover:bg-slate-300">
                        <img src={abc2} alt="" />
                        <h3 class="text-center font-bold text-xl py-5 ">
                            Let Customer Know your Location
                        </h3>
                    </div>
                </div>
                <div class="text-center">
                    <button class="bg-blue-500 border-s-white p-4 w-[200px] m-auto hover:bg-white hover:border-2 hover:border-blue-300 " onClick={() => {
                        window.location.href = '/vendor'
                    }}>Register Now</button>
                </div>
                <div>
                    <br />
                    <br />
                    <div className="enquiry p-16 flex justify-around bg-slate-200">
                        <div className="p flex flex-col w-[500px]">
                            <h className="text-xl font-semibold py-2">
                                Attach Your Cart/Shop/Cart
                            </h>
                            <h1 className>
                                Know about more ways of partnering with Ola &amp; how each category can help you earn more
                            </h1>
                        </div>
                        <button className="bg-blue-500 h-fit border-s-white p-4 hover:border-2 hover:border-blue-300 hover:bg-white">Send Your Enquiry</button>
                    </div>
                    <br />
                    <br />
                </div>

            </div >
        </div >

    )
}
