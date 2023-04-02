import React from 'react'

export default function Footer() {
    return (
        <div class="pt-20 pb-10 px-50 text-s footer flex justify-center items-center bg-slate-200">
            <ul class="list px-6">
                <li><img src="" alt="" /></li>
                <li>
                    <i class="fab fa-instagram p-3"></i>
                    <i class="fab fa-youtube p-3"></i>
                    <i class="fab fa-twitter p-3"></i>
                </li>
            </ul>
            <ul class="list px-6">
                <li class="hover:text-green-500 hover:cursor-pointer">Find a Vendor</li>
                <li class="hover:text-green-500 hover:cursor-pointer">Sell with us</li>
                <li class="hover:text-green-500 hover:cursor-pointer">Buy online</li>
                <li class="hover:text-green-500 hover:cursor-pointer">Street prices/discounts</li>
                <li class="hover:text-green-500 hover:cursor-pointer">Corporate</li>
            </ul>
            <ul class="list px-6">
                <li class="hover:text-green-500 hover:cursor-pointer">About Us</li>
                <li class="hover:text-green-500 hover:cursor-pointer">Contact Us</li>
                <li class="hover:text-green-500 hover:cursor-pointer">Support</li>
                <li class="hover:text-green-500 hover:cursor-pointer">Careers</li>
                <li class="hover:text-green-500 hover:cursor-pointer">Media Centre</li>
            </ul>
            <ul class="list px-6">
                <li class="hover:text-green-500 hover:cursor-pointer">Track Online</li>
                <li class="hover:text-green-500 hover:cursor-pointer"> FutureVending</li>
                <li class="hover:text-green-500 hover:cursor-pointer">Other Details</li>
            </ul>
            <ul class="list">
                <li class="p-3 font-semibold">Stay Upto Date</li>
                <li><input class="text-lg p-2 font-medium" name="email" type="text" placeholder="Enter Your Email" /></li>
                <li class="font-semibold text-lg"><button class="bg-zinc-700 text-gray-50 px-3 py-2">Subscribe To <span class="text-green-600">NewsLetter</span></button></li>
            </ul>
        </div>
    )
}
