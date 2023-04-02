import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function ClosestVendors() {
    const [customerData, setCustomerData] = useState([])
    const [vendorData, setVendorData] = useState([])
    const [closestvendors, setClosestVendors] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8001/address').then((res) => {
            setCustomerData(res.data)
        })
    }, [customerData])

    useEffect(() => {
        axios.get('http://localhost:8002/vendordetails').then((res) => {
            setVendorData(res.data)
        })
    }, [vendorData])

    customerData.map((x, y) => {
        if (localStorage.getItem('signEmail') == x.email) {
            vendorData.map((m, n) => {
                if (x.address == m.address) {
                    closestvendors[y] = m
                }
            })
        }

    })

    return (
        <main>
            {

            }
            <div className="closest__vendors">
                <p>Vendors closest to you</p>
                <div className="closest__vendors__main">
                    {
                        closestvendors?.map((vendor, z) => {
                            return (
                                <div className="vendor__main__">
                                    <div className="name__main">
                                        <p style={{ fontWeight: 'bold', marginRight: '5rem' }}>Vendor's name</p>
                                        <p className="vendor__name">{vendor.name}</p>
                                    </div>
                                    <div className="address__main">
                                        <p style={{ fontWeight: 'bold', marginRight: '4rem' }}>Vendor's address</p>
                                        <p className="vendor__address">{vendor.address}</p>
                                    </div>

                                    <div className="products">
                                        <p>Products Available</p>
                                        {
                                            vendor.products.map((product, index) => (
                                                <div className='products__main'>
                                                    <div style={{ display: 'flex' }}>
                                                        <div className="product__name">
                                                            <p>Product Name</p>
                                                            <p>{product.name}</p>
                                                        </div>
                                                        <div className="product__price">
                                                            <p>Product Price</p>
                                                            <p>{product.price}</p>
                                                        </div>
                                                    </div>

                                                    <button className="addtocart" onClick={() => {
                                                        axios.post('http://localhost:8001/cart/', { email: localStorage.getItem('signEmail'), product: product.name, price: product.price, vendorname: product.name })
                                                    }}>
                                                        Add to cart
                                                    </button>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            )

                        })
                    }
                </div>

            </div>
        </main >
    )
}
