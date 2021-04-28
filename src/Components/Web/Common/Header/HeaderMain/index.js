import CartComponent from "Components/Web/Cart"
import { PATH } from "Constants/Path"
import { useState } from "react"

const HeaderMain = () => {
    const [toggleCart, setToggleCart] = useState(false)
    const [toggle, setToggle] = useState(false)
    return (
        <header>
            <div id="header">
                <div className="container">
                    <div className="pull-left">
                        <div className="header-logo">
                            <a className="logo" href={PATH.HOME}>
                                <img
                                    alt="Logo"
                                    src={
                                        "https://drive.google.com/uc?export=view&id=1Efe_zTMed_8-Ix0fgfbKVLXwtxdVb3UX"
                                    }
                                ></img>
                            </a>
                        </div>

                        <div className="header-search">
                            <form>
                                <button className="search-btn">
                                    <i className="fa fa-search"></i>
                                </button>
                                <input
                                    className="input search-input"
                                    type="text"
                                    placeholder="Enter your keyword"
                                />
                                <select className="input search-categories">
                                    <option value="0">Laptop</option>
                                    <option value="1">Phụ kiện</option>
                                </select>
                                <button className="search-btn">
                                    <i className="fa fa-search"></i>
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className="pull-right">
                        <ul className="header-btns">
                            <li
                                onClick={() => setToggle(!toggle)}
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
                                        <i className="fa fa-user-o"></i>
                                    </div>
                                    <strong className="text-uppercase">
                                        Tài Khoản
                                        {/* &emsp;<i className="fa fa-caret-down"></i> */}
                                    </strong>
                                </div>
                                <a href={PATH.LOGIN}>Đăng nhập</a>
                                <ul className="custom-menu">
                                    <li>
                                        <a href="/#">
                                            <i className="fa fa-user-o"></i>
                                            Tài khoản của bạn
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/#">
                                            <i className="fa fa-heart-o"></i>
                                            Sản phẩm yêu thích
                                        </a>
                                    </li>
                                    <li>
                                        <a href={PATH.SIGNUP}>
                                            <i className="fa fa-user-plus"></i>{" "}
                                            Tạo tài khoản
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/#">
                                            <i className="fa fa-unlock-alt"></i>{" "}
                                            Đăng nhập
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/#">
                                            <i className="fa fa-unlock-alt"></i>{" "}
                                            Đăng xuất
                                        </a>
                                    </li>
                                </ul>
                            </li>

                            <li
                                onClick={() => setToggleCart(!toggleCart)}
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
                                        <i className="fa fa-shopping-cart"></i>
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
