import React from 'react'
import downloadImage from '../assets/download.jpg'

const OrderItem = ({order}) => {
    const {logo, organisation, dispatchOn, trackingId, quantity, numberOfBoxes} = order
    return (
        <div className = "order-item">
            <img src = {logo} className = "order-logo" alt = "organisation"/>
            <div className = "details-div">
                <div className = "dispatched-on">Dispatched on {dispatchOn} via {organisation}</div>
                <div className = "order-item-details">
                    <div className = "items">
                        <div className = "id-quantity-boxes">Tracking ID</div>
                        <div className = "values-id-quantity-boxes">{trackingId}</div>
                    </div>
                    <div className = "items">
                        <div className = "id-quantity-boxes">Quantity</div>
                        <div className = "values-id-quantity-boxes">{quantity}pcs</div>
                    </div>
                    <div className = "items">
                        <div className = "id-quantity-boxes">No.of Boxes</div>
                        <div className = "values-id-quantity-boxes">{numberOfBoxes}</div>
                    </div>    
                </div>
                <div class="button-area-line">
                <button>E-way Bill<img src = {downloadImage} alt = "download" className = "download-image"/></button>
                <button>Invoice copy <img src = {downloadImage} alt = "download" className = "download-image"/></button>
                <button>Packing list <img src = {downloadImage} alt = "download" className = "download-image"/></button>
                <button>Challan copy <img src = {downloadImage} alt = "download" className = "download-image"/></button>
                </div>
            </div>
        </div>
    )
}

export default OrderItem
