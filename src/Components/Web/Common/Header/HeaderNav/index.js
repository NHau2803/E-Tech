import { PhoneOutlined } from "@ant-design/icons"
import {
    NAV_MAP_LAPTOP_ENGINEERING,
    NAV_MAP_LAPTOP_GAMING,
    NAV_MAP_LAPTOP_OFFICE
} from "Constants/Data"
import { PATH } from "Constants/Path"
import { useState } from "react"
import { Link } from "react-router-dom"

const HeaderNav = props => {
    const [toggle, setToggle] = useState(false)
    const [openRow1, setOpenRow1] = useState(false)
    const [openRow2, setOpenRow2] = useState(false)
    const [openRow3, setOpenRow3] = useState(false)
    const [openRow4, setOpenRow4] = useState(false)
    const [openRow5, setOpenRow5] = useState(false)
    const [openRow6, setOpenRow6] = useState(false)
    const isHomePage = String(window.location.pathname) === PATH.HOME

    return (
        <div id="navigation">
            <div className="container">
                <div id="responsive-nav">
                    <div
                        className="category-nav show-on-click"
                        onMouseEnter={() => setToggle(true)}
                        onMouseLeave={() => setToggle(false)}
                    >
                        <span className="category-header">
                            Danh Mục Sản Phẩm <i className="fa fa-list"></i>
                        </span>
                        <ul
                            className={
                                isHomePage
                                    ? "category-list open"
                                    : toggle
                                    ? "category-list open"
                                    : "category-list"
                            }
                        >
                            <li
                                onMouseEnter={() => setOpenRow1(!openRow1)}
                                onMouseLeave={() => setOpenRow1(!openRow1)}
                                className={
                                    openRow1
                                        ? "dropdown side-dropdown open"
                                        : "dropdown side-dropdown"
                                }
                            >
                                <p
                                    className="dropdown-toggle"
                                    data-toggle="dropdown"
                                    aria-expanded="true"
                                >
                                    Laptop Gamming
                                    <i className="fa fa-angle-right"></i>
                                </p>
                                <div className="custom-menu">
                                    <div className="row">
                                        {NAV_MAP_LAPTOP_GAMING &&
                                            NAV_MAP_LAPTOP_GAMING.map(item => {
                                                return (
                                                    <div
                                                        className="col-md-4"
                                                        key={item.id}
                                                    >
                                                        <ul className="list-links">
                                                            <li>
                                                                <h3 className="list-links-title">
                                                                    {item.title}
                                                                </h3>
                                                            </li>
                                                            {item.nav_map_li &&
                                                                item.nav_map_li.map(
                                                                    item => {
                                                                        return (
                                                                            <li
                                                                                key={
                                                                                    item.id
                                                                                }
                                                                            >
                                                                                <a
                                                                                    href={`${PATH.HOME}/laptop/filter/${item.link}`}
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
                            <li
                                onMouseEnter={() => setOpenRow2(!openRow2)}
                                onMouseLeave={() => setOpenRow2(!openRow2)}
                                className={
                                    openRow2
                                        ? "dropdown side-dropdown open"
                                        : "dropdown side-dropdown"
                                }
                            >
                                <p
                                    className="dropdown-toggle"
                                    data-toggle="dropdown"
                                    aria-expanded="true"
                                >
                                    Laptop Học Tập & Văn Phòng
                                    <i className="fa fa-angle-right"></i>
                                </p>
                                <div className="custom-menu">
                                    <div className="row">
                                        {NAV_MAP_LAPTOP_OFFICE &&
                                            NAV_MAP_LAPTOP_OFFICE.map(item => {
                                                return (
                                                    <div
                                                        className="col-md-4"
                                                        key={item.id}
                                                    >
                                                        <ul className="list-links">
                                                            <li>
                                                                <h3 className="list-links-title">
                                                                    {item.title}
                                                                </h3>
                                                            </li>
                                                            {item.nav_map_li &&
                                                                item.nav_map_li.map(
                                                                    item => {
                                                                        return (
                                                                            <li
                                                                                key={
                                                                                    item.id
                                                                                }
                                                                            >
                                                                                <a
                                                                                    href={`${PATH.HOME}/laptop/filter/${item.link}`}
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
                            <li
                                onMouseEnter={() => setOpenRow3(!openRow3)}
                                onMouseLeave={() => setOpenRow3(!openRow3)}
                                className={
                                    openRow3
                                        ? "dropdown side-dropdown open"
                                        : "dropdown side-dropdown"
                                }
                            >
                                <p
                                    className="dropdown-toggle"
                                    data-toggle="dropdown"
                                    aria-expanded="true"
                                >
                                    Laptop Đồ Họa & Kỹ Thuật
                                    <i className="fa fa-angle-right"></i>
                                </p>
                                <div className="custom-menu">
                                    <div className="row">
                                        {NAV_MAP_LAPTOP_ENGINEERING &&
                                            NAV_MAP_LAPTOP_ENGINEERING.map(
                                                item => {
                                                    return (
                                                        <div
                                                            className="col-md-4"
                                                            key={item.id}
                                                        >
                                                            <ul className="list-links">
                                                                <li>
                                                                    <h3 className="list-links-title">
                                                                        {
                                                                            item.title
                                                                        }
                                                                    </h3>
                                                                </li>
                                                                {item.nav_map_li &&
                                                                    item.nav_map_li.map(
                                                                        item => {
                                                                            return (
                                                                                <li
                                                                                    key={
                                                                                        item.id
                                                                                    }
                                                                                >
                                                                                    <a
                                                                                        href={`${PATH.HOME}/laptop/filter/${item.link}`}
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
                                                }
                                            )}
                                    </div>
                                </div>
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
                                <Link to={PATH.HOME}>Trang Chủ</Link>
                            </li>

                            <li>
                                <Link to="/#">Khuyến Mãi</Link>
                            </li>
                            <li>
                                <Link to={PATH.ABOUT}>Giới Thiệu</Link>
                            </li>
                            <li>
                                <Link to="/#" style={{ color: "#33c9dc" }}>
                                    HOSTLINE &thinsp;
                                    <PhoneOutlined />
                                    0944445555
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HeaderNav
