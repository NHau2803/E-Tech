import { NAV_MAP } from "Constants/Data"
import { useState } from "react"

const HeaderNav = props => {
    const { isOpen } = props
    const [toggle, setToggle] = useState(isOpen ? true : false)
    // const closeMenu = () => setToggle(false)
    return (
        <div id="navigation">
            <div className="container">
                <div id="responsive-nav">
                    <div className="category-nav show-on-click">
                        <span
                            className="category-header"
                            onClick={() => setToggle(!toggle)}
                        >
                            Danh Mục Sản Phẩm <i className="fa fa-list"></i>
                        </span>
                        <ul
                            className={
                                toggle ? "category-list open" : "category-list"
                            }
                        >
                            {NAV_MAP.map(item => {
                                return (
                                    <li
                                        className="dropdown side-dropdown"
                                        key={item.id}
                                    >
                                        <a
                                            className="dropdown-toggle"
                                            data-toggle="dropdown"
                                            aria-expanded="true"
                                            href={item.link}
                                        >
                                            {item.title}
                                            <i className="fa fa-angle-right"></i>
                                        </a>
                                        <div className="custom-menu">
                                            <div className="row">
                                                {item.nav_map_col.map(item => {
                                                    return (
                                                        <div
                                                            className="col-md-4"
                                                            key={item.id}
                                                        >
                                                            <ul className="list-links">
                                                                <li>
                                                                    <a
                                                                        href={
                                                                            item.link
                                                                        }
                                                                    >
                                                                        <h3 className="list-links-title">
                                                                            {
                                                                                item.title
                                                                            }
                                                                        </h3>
                                                                    </a>
                                                                </li>
                                                                {item.nav_map_li.map(
                                                                    item => {
                                                                        return (
                                                                            <li
                                                                                key={
                                                                                    item.id
                                                                                }
                                                                            >
                                                                                <a
                                                                                    href={
                                                                                        item.link
                                                                                    }
                                                                                >
                                                                                    {
                                                                                        item.title
                                                                                    }
                                                                                </a>
                                                                            </li>
                                                                        )
                                                                    }
                                                                )}
                                                            </ul>
                                                            <hr className="hidden-md hidden-lg"></hr>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    </li>
                                )
                            })}
                            <li>
                                {/* <div className="row hidden-sm hidden-xs">
                                    <div className="col-md-12">
                                        <hr></hr>
                                        <a
                                            className="banner banner-1"
                                            href="/#"
                                        >
                                            <img
                                                alt="Logo"
                                                src={Images.Banner01}
                                            ></img>
                                        </a>
                                    </div>
                                </div> */}
                                QC
                            </li>
                        </ul>
                    </div>

                    {/* menu nav */}
                    <div className="menu-nav">
                        <span className="menu-header">
                            Menu <i className="fa fa-bars"></i>
                        </span>
                        <ul className="menu-list">
                            <li>
                                <a href="/#">Trang Chủ</a>
                            </li>

                            <li>
                                <a href="/#">Khuyến Mãi</a>
                            </li>
                            <li>
                                <a href="/#">Thông Tin ETech</a>
                            </li>
                            <li>
                                <p style={{ color: "white" }}>
                                    TƯ VẤN MUA HÀNG &emsp;
                                    <a href="/#" style={{ color: "#33c9dc" }}>
                                        0944445555
                                    </a>
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HeaderNav
