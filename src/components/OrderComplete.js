import React from 'react'
import image from '../assets/order-complete.png'

const OrderComplete = () => {
    return (
        <div className = "order-successfull">
            <div className = "order-complete">
                <div>Order complete!</div>
                <div style = {{color: "#59B37F"}}>This order has been fully dispatched.</div>
            </div>
            <div className="outer-circle">
                <span className = "order-O">O</span>
                <span className = "order-R">R</span>
                <span className = "order-D">D</span>
                <span className = "order-E">E</span>
                <span className = "order-RR">R</span>

                <span className = "C">C</span>
                <span className = "O">O</span>
                <span className = "M">M</span>
                <span className = "P">P</span>
                <span className = "L">L</span>
                <span className = "E">E</span>
                <span className = "T">T</span>
                <span className = "EE">E</span>

                <div className="inner-circle">
                    <div className = "check"></div>
                </div>
                </div>
        </div>
    )
}

export default OrderComplete
