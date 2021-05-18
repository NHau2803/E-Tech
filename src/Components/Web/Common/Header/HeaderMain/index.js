import {
    HeartOutlined,
    LoginOutlined,
    PhoneOutlined,
    PoweroffOutlined,
    RightCircleOutlined,
    ShoppingCartOutlined,
    UserAddOutlined,
    UserOutlined
} from "@ant-design/icons"
import CartComponent from "Components/Web/Cart"
import { RENDER_CART } from "Constants/Data"
import { PATH } from "Constants/Path"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import {
    changePriceToVND,
    getOptionsLocalStorage,
    setOptionsLocalStorage
} from "Utils/Converter"
import {
    getQtyOfCartInLocalStorage,
    getTotalPriceOfCartInLocalStorage,
    removeCacheLocalStorage
} from "Utils/localStorageFunctions"

const HeaderMain = () => {
    const [toggleCart, setToggleCart] = useState(false)
    const [toggle, setToggle] = useState(false)
    const [carts, setCarts] = useState(getOptionsLocalStorage("carts"))
    const [totalPrice, setTotalPrice] = useState(0)
    const [countItem, setCountItem] = useState(0)

    useEffect(() => {
        setCarts(getOptionsLocalStorage("carts"))
    }, [toggle])

    useEffect(() => {
        setOptionsLocalStorage("carts", carts)
        setTotalPrice(getTotalPriceOfCartInLocalStorage())
        setCountItem(getQtyOfCartInLocalStorage())
    }, [carts])

    const handleRemove = id => {
        setCarts(carts.filter(item => item.id !== id))
        setOptionsLocalStorage("carts", carts)
    }

    const logout = () => {
        localStorage.clear()
    }

    return (
        <header>
            <div id="header">
                <div className="container">
                    <div className="pull-left">
                        <div className="header-logo">
                            <Link className="logo" to={PATH.HOME}>
                                <img
                                    alt="Logo"
                                    src={
                                        "https://drive.google.com/uc?export=view&id=1Efe_zTMed_8-Ix0fgfbKVLXwtxdVb3UX"
                                    }
                                ></img>
                            </Link>
                        </div>

                        <div className="header-search">
                            <form>
                                <input
                                    className="input search-input"
                                    type="text"
                                    placeholder="Tìm sản phẩm..."
                                />

                                <button className="search-btn">
                                    <i className="fa fa-search"></i>
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className="pull-right">
                        <ul className="header-btns">
                            <li
                                onMouseEnter={() => {
                                    setToggle(true)
                                    console.log("a")
                                }}
                                onMouseLeave={() => {
                                    setToggle(false)
                                }}
                                className={
                                    toggle
                                        ? "header-account dropdown default-dropdown open"
                                        : "header-account dropdown default-dropdown"
                                }
                            >
                                <div
                                    className="dropdown-toggle"
                                    role="button"
                                    data-toggle="dropdown"
                                    aria-expanded={toggle ? "false" : "true"}
                                >
                                    <div className="header-btns-icon">
                                        <UserOutlined />
                                    </div>
                                    <strong className="text-uppercase">
                                        Tài Khoản
                                        {/* &emsp;<i className="fa fa-caret-down"></i> */}
                                    </strong>
                                </div>
                                <Link to={PATH.LOGIN}>Đăng nhập</Link>
                                <ul className="custom-menu">
                                    <li>
                                        <Link to="/#">
                                            <UserOutlined
                                                style={{
                                                    marginRight: "15px",
                                                    color:
                                                        "var(--color-primary)"
                                                }}
                                            />
                                            Tài khoản của bạn
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/#">
                                            <HeartOutlined
                                                style={{
                                                    marginRight: "15px",
                                                    color:
                                                        "var(--color-primary)"
                                                }}
                                            />
                                            Yêu thích
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={PATH.SIGNUP}>
                                            <UserAddOutlined
                                                style={{
                                                    marginRight: "15px",
                                                    color:
                                                        "var(--color-primary)"
                                                }}
                                            />
                                            Tạo tài khoản
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/#" onClick={() => logout()}>
                                            <PoweroffOutlined
                                                style={{
                                                    marginRight: "15px",
                                                    color:
                                                        "var(--color-primary)"
                                                }}
                                            />
                                            Đăng xuất
                                        </Link>
                                    </li>
                                </ul>
                            </li>

                            <li
                                onMouseEnter={() => setToggleCart(true)}
                                onMouseLeave={() => setToggleCart(false)}
                                className={
                                    toggleCart
                                        ? "header-cart dropdown default-dropdown open"
                                        : "header-cart dropdown default-dropdown"
                                }
                            >
                                <div
                                    className="dropdown-toggle"
                                    data-toggle="dropdown"
                                    aria-expanded={
                                        toggleCart ? "true" : "false"
                                    }
                                    style={{ width: "170px" }}
                                >
                                    <div className="header-btns-icon">
                                        <ShoppingCartOutlined />
                                        <span className="qty">{countItem}</span>
                                    </div>
                                    <strong className="text-uppercase">
                                        Giỏ Hàng
                                    </strong>
                                    <br></br>
                                    <span>{changePriceToVND(totalPrice)}</span>
                                </div>
                                {/* <CartComponent/> */}
                                <div className="custom-menu">
                                    <div id="shopping-cart">
                                        {carts.map(item => {
                                            return (
                                                <div
                                                    className="shopping-cart-list"
                                                    key={item.id}
                                                >
                                                    <div className="product product-widget">
                                                        <div className="product-thumb">
                                                            <img
                                                                alt="Logo"
                                                                src={item.image}
                                                            ></img>
                                                        </div>
                                                        <div className="product-body">
                                                            <h2 className="product-name">
                                                                <Link
                                                                    to={`${PATH.LAPTOP}/${item.id}`}
                                                                >
                                                                    {item.name}
                                                                </Link>
                                                            </h2>
                                                            <p className="product-price">
                                                                {changePriceToVND(
                                                                    item.price
                                                                )}
                                                                {/* <span className="qty">x1</span> */}
                                                            </p>
                                                        </div>
                                                        <button
                                                            className="cancel-btn"
                                                            onClick={() =>
                                                                handleRemove(
                                                                    item.id
                                                                )
                                                            }
                                                        >
                                                            <i className="fa fa-trash"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                        {/* Button => check out */}
                                        <div className="shopping-cart-btns">
                                            <Link
                                                to={PATH.CHECK_OUT}
                                                className="primary-btn"
                                            >
                                                Xem giỏ hàng &thinsp;
                                                <RightCircleOutlined />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li className="nav-toggle">
                                <button className="nav-toggle-btn main-btn icon-btn">
                                    <i className="fa fa-bars"></i>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default HeaderMain
