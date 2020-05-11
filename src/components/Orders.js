import React, {Component, Fragment} from 'react'
import FedEx from '../assets/FedEx.jpg'
import BlueDart from '../assets/BlueDart.jpg'
import DTDC from '../assets/DTDC.jpg'
import OrderItem from './OrderItem'

class Orders extends Component{
    constructor(props) {
        super(props)
    
        this.state = {
            ordersList: [
                {
                    id: 0,
                    logo: FedEx,
                    organisation: 'FedEx',
                    dispatchOn: 'August 8, 2019',
                    trackingId: 8149309425880464,
                    quantity: 66,
                    numberOfBoxes: 1,
                },
                {
                    id: 1,
                    logo:BlueDart,
                    organisation: 'Blue Dart',
                    dispatchOn: 'July 30, 2019',
                    trackingId: 8149309425880464,
                    quantity: 66,
                    numberOfBoxes: 1,
                },
                {
                    id: 2,
                    logo: DTDC,
                    organisation: 'DTDC',
                    dispatchOn: 'July 23, 2019',
                    trackingId: 8149309425880464,
                    quantity: 66,
                    numberOfBoxes: 1,
                }
            ]
        }
    }
    

    render() {
        return (
            <Fragment>
                {this.state.ordersList.map((order) => {
                    return <OrderItem key = {order.id} order = {order}/>
                })}
            </Fragment>
        )
    }
}

export default Orders
