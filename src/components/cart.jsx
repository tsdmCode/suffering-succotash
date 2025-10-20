import { FaCartShopping } from "react-icons/fa6";


export function Cart({cartCount}) {
    return (
        <div className='cart'><FaCartShopping /> Items ({cartCount})</div>
    )
}