import React from 'react'
import image from '../assets/order-complete.png'

const OrderComplete = () => {
    return (
        <div className = "order-successfull">
            <div className = "order-complete">
                <div>Order complete!</div>
                <div style = {{color: "#0a9d5b"}}>This order has been fully dispatched.</div>
            </div>
            <div className = "order-complete-image">
                <img src = {image} className = "image" alt = "order complete "/>
            </div>
        </div>
    )
}

export default OrderComplete
