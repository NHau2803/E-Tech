import {
    HeartOutlined,
    LoginOutlined,
    PhoneOutlined,
    PoweroffOutlined,
    ShoppingCartOutlined,
    UserAddOutlined,
    UserOutlined
} from "@ant-design/icons"
import CartComponent from "Components/Web/Cart"
import { PATH } from "Constants/Path"
import { useState } from "react"
import { Link } from "react-router-dom"

const HeaderMain = () => {
    const [toggleCart, setToggleCart] = useState(false)
    const [toggle, setToggle] = useState(false)
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
                                onMouseEnter={() => setToggle(true)}
                                onMouseLeave={() => setToggle(false)}
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
                                        <Link to="/#">
                                            <LoginOutlined
                                                style={{
                                                    marginRight: "15px",
                                                    color:
                                                        "var(--color-primary)"
                                                }}
                                            />
                                            Đăng nhập
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/#">
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
                                >
                                    <div className="header-btns-icon">
                                        <ShoppingCartOutlined />
                                        <span className="qty">3</span>
                                    </div>
                                    <strong className="text-uppercase">
                                        Giỏ Hàng
                                    </strong>
                                    <br></br>
                                    <span>35.20$</span>
                                </div>
                                <CartComponent />
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
