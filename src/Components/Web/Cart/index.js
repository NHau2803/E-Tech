// import { ArrowRightOutlined, RightCircleOutlined } from "@ant-design/icons"
// import { RENDER_CART } from "Constants/Data"
// import { PATH } from "Constants/Path"
// import { useEffect, useState } from "react"
// import { Link } from "react-router-dom"
// import {
//     changePriceToVND,
//     getOptionsLocalStorage,
//     setOptionsLocalStorage
// } from "Utils/Converter"

// const CartComponent = () => {
//     const [carts, setCarts] = useState(getOptionsLocalStorage("carts"))

//     const handleRemove = id => {
//         setCarts(carts.filter(item => item.id !== id))
//     }
//     useEffect(() => {
//         setOptionsLocalStorage("carts", carts)
//     }, [carts])

//     return (
//         <div className="custom-menu">
//             <div id="shopping-cart">
//                 {carts.map(item => {
//                     return (
//                         <div className="shopping-cart-list" key={item.id}>
//                             <div className="product product-widget">
//                                 <div className="product-thumb">
//                                     <img alt="Logo" src={item.image}></img>
//                                 </div>
//                                 <div className="product-body">
//                                     <h2 className="product-name">
//                                         <Link to={`${PATH.LAPTOP}/${item.id}`}>
//                                             {item.name}
//                                         </Link>
//                                     </h2>
//                                     <p className="product-price">
//                                         {changePriceToVND(item.price)}
//                                         {/* <span className="qty">x1</span> */}
//                                     </p>
//                                 </div>
//                                 <button
//                                     className="cancel-btn"
//                                     onClick={() => handleRemove(item.id)}
//                                 >
//                                     <i className="fa fa-trash"></i>
//                                 </button>
//                             </div>
//                         </div>
//                     )
//                 })}
//                 <div className="shopping-cart-btns">
//                     <Link to={PATH.CHECK_OUT} className="primary-btn">
//                         Xem giỏ hàng &thinsp;
//                         <RightCircleOutlined />
//                     </Link>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default CartComponent
