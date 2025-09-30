import { FaCartShopping } from "react-icons/fa6";


export function Cart({props}) {
    return (
        <div className='cart'><FaCartShopping /> Items ({props})</div>
    )
}