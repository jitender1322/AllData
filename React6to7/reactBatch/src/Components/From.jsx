import React from 'react'
import { useState } from 'react'

export default function From() {
    const [product, setProduct] = useState("");
    const [price, setPrice] = useState("");
    const [cat, setCat] = useState("");
    return (
        <div>
            <form>
                <select onChange={(e) => setCat(e.target.value)}>
                    <option hidden >Seslect Category</option>
                    <option value="electronics">Electronics</option>
                    <option value="clothing">Clothing</option>
                </select>
                <input type="text" placeholder='Enter Product Name' onChange={(e) => setProduct(e.target.value)} />
                <input type="text" placeholder='Enter Product Price Subject' onChange={(e) => setPrice(e.target.value)} />
                {
                    cat == "electronics" &&
                    <input type="text" placeholder='Enter Warranty Period' />
                }
                {
                    cat == "clothing" &&
                    <input type="text" placeholder='Enter Return Period' />
                }
            </form>
        </div>
    )
}
