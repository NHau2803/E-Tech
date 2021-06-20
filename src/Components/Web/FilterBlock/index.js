import {
    BRAND_DRIVE_FILTER_WEB,
    CAPACITY_DRIVE_FILTER_WEB,
    CONNECT_LAPTOP_FILTER_WEB,
    TYPE_PRODUCT
} from "Constants/Data"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { setLS } from "Utils/Converter"
import "./FilterBlock.css"
const FilterBlock = () => {
    const { productType } = useParams()

    const a = {
        brands: [
            {
                id: 1,
                value: "Dell",
                active: false
            },
            {
                id: 2,
                value: "Hp",
                active: false
            },
            {
                id: 3,
                value: "Lenovo",
                active: false
            },
            {
                id: 4,
                value: "Acer",
                active: false
            },
            {
                id: 5,
                value: "Msi",
                active: false
            },
            {
                id: 6,
                value: "Macbook",
                active: false
            },
            {
                id: 7,
                value: "Asus",
                active: false
            }
        ],
        rams: [
            {
                value: "16 GB",
                active: false
            },
            {
                value: "2 GB",
                active: false
            },
            {
                value: "32 GB",
                active: false
            },
            {
                value: "4 GB",
                active: false
            },
            {
                value: "8 GB",
                active: false
            }
        ],
        screens: [
            {
                value: "13 inch",
                active: false
            },
            {
                value: "13.3 inch",
                active: false
            },
            {
                value: "13.4 inch",
                active: false
            },
            {
                value: "14 inch",
                active: false
            },
            {
                value: "15 inch",
                active: false
            },
            {
                value: "15.6 inch",
                active: false
            },
            {
                value: "17 inch",
                active: false
            }
        ],
        cpus: [
            {
                value: "AMD Ryzen 3",
                active: false
            },
            {
                value: "AMD Ryzen 5",
                active: false
            },
            {
                value: "Intel Celeron",
                active: false
            },
            {
                value: "Intel Core i3",
                active: false
            },
            {
                value: "Intel Core i5",
                active: false
            },
            {
                value: "Intel Core i7",
                active: false
            },
            {
                value: "Intel Pentium",
                active: false
            }
        ]
    }

    const getBrandFilterDefault = () => {
        switch (productType) {
            case TYPE_PRODUCT.LAPTOP:
                return a.brands
            case TYPE_PRODUCT.DRIVE:
                return BRAND_DRIVE_FILTER_WEB
            default:
                break
        }
    }
    const [checkChange, setCheckChange] = useState(false)
    const [filterRecordsBrand, setFilterRecordsBrand] = useState(
        getBrandFilterDefault() || []
    )
    const [filterRecordsRam, setFilterRecordsRam] = useState(a.rams || [])
    const [filterRecordsScreen, setFilterRecordsScreen] = useState(
        a.screens || []
    )
    const [filterRecordsConnect, setFilterRecordsConnect] = useState(
        CONNECT_LAPTOP_FILTER_WEB || []
    )
    const [filterRecordsCapacity, setFilterRecordsCapacity] = useState(
        CAPACITY_DRIVE_FILTER_WEB || []
    )

    const renderFilter = (title, filterRecordName, changeRecordName) => {
        return (
            <div className="filter__icon">
                <div className="css_icon">
                    <div className="filter__text">{title}</div>
                    {filterRecordName &&
                        filterRecordName.map(item => {
                            return (
                                <div
                                    className={
                                        item.active
                                            ? "filter__box__active"
                                            : "filter__box"
                                    }
                                    key={item.id}
                                    onClick={() =>
                                        changeRecord(changeRecordName, item.id)
                                    }
                                >
                                    <div className="filter__link">
                                        {item.value}
                                    </div>
                                </div>
                            )
                        })}
                </div>
            </div>
        )
    }

    useEffect(() => {
        const paramsBrand = []
        const paramsRam = []
        const paramsScreen = []
        const paramsConnect = []
        const paramsCapacity = []
        filterRecordsBrand &&
            filterRecordsBrand.map(item =>
                item.active === true ? paramsBrand.push(item.value) : ""
            )
        filterRecordsRam &&
            filterRecordsRam.map(item =>
                item.active === true ? paramsRam.push(item.value) : ""
            )
        filterRecordsScreen &&
            filterRecordsScreen.map(item =>
                item.active === true ? paramsScreen.push(item.value) : ""
            )
        filterRecordsConnect &&
            filterRecordsConnect.map(item =>
                item.active === true ? paramsConnect.push(item.value) : ""
            )
        filterRecordsCapacity &&
            filterRecordsCapacity.map(item =>
                item.active === true ? paramsCapacity.push(item.value) : ""
            )

        const paramsRequest = {
            brand: paramsBrand,
            ram: paramsRam,
            screen: paramsScreen,
            connect: paramsConnect,
            capacity: paramsCapacity
        }

        setLS("paramsRequest", paramsRequest)
    }, [checkChange])

    const changeRecord = (type, id) => {
        setCheckChange(!checkChange)
        switch (type) {
            case "brand":
                filterRecordsBrand.map(
                    item =>
                        item.id === parseInt(id) && (item.active = !item.active)
                )
                setFilterRecordsBrand(
                    [...filterRecordsBrand],
                    filterRecordsBrand
                )
                break
            case "ram":
                filterRecordsRam.map(
                    item =>
                        item.id === parseInt(id) && (item.active = !item.active)
                )
                setFilterRecordsRam([...filterRecordsRam], filterRecordsRam)
                break
            case "screen":
                filterRecordsScreen.map(
                    item =>
                        item.id === parseInt(id) && (item.active = !item.active)
                )
                setFilterRecordsScreen(
                    [...filterRecordsScreen],
                    filterRecordsScreen
                )
                break
            case "connect":
                filterRecordsConnect.map(
                    item =>
                        item.id === parseInt(id) && (item.active = !item.active)
                )
                setFilterRecordsConnect(
                    [...filterRecordsConnect],
                    filterRecordsConnect
                )
                break
            case "capacity":
                filterRecordsCapacity.map(
                    item =>
                        item.id === parseInt(id) && (item.active = !item.active)
                )
                setFilterRecordsCapacity(
                    [...filterRecordsCapacity],
                    filterRecordsCapacity
                )
                break
            default:
                break
        }
    }

    // const changeRecordPrice = id => {
    //     filterRecordsPrice.map(
    //         item => item.id === parseInt(id) && (item.active = !item.active)
    //     )
    //     setFilterRecordsPrice([...filterRecordsPrice], filterRecordsPrice)
    // }
    // const renderSpectFilterDefault = () => {

    // }

    return (
        <div className="container">
            <div className="row">
                <div className="filter">
                    <div className="filter__top">
                        <div className="filter__top-left" />
                        <div className="filter__top-right">BỘ LỌC</div>
                    </div>
                    {renderFilter("Thương hiệu", filterRecordsBrand, "brand")}
                    {productType === TYPE_PRODUCT.LAPTOP
                        ? renderFilter("Ram", filterRecordsRam, "ram")
                        : renderFilter(
                              "Dung lượng",
                              filterRecordsCapacity,
                              "capacity"
                          )}
                    {productType === TYPE_PRODUCT.LAPTOP
                        ? renderFilter(
                              "Màn hình",
                              filterRecordsScreen,
                              "screen"
                          )
                        : renderFilter(
                              "Chuẩn kết nối",
                              filterRecordsConnect,
                              "connect"
                          )}

                    <div
                        className="filter__icon"
                        style={{
                            borderTop: "1px solid rgba(0 , 0, 0, 0.125)",
                            margin: "10px 14px",
                            padding: "10px 0px"
                        }}
                    >
                        <div className="css_icon">
                            <div
                                style={{ lineHeight: "4rem" }}
                                className="filter__text"
                            >
                                Sắp xếp theo giá
                            </div>
                            <div className="filter__box">Giá giảm dần</div>
                            <div className="filter__box">Giá tăng dần</div>
                            <div>
                                <input
                                    type="text"
                                    placeholder="Giá thấp nhất"
                                    maxLength="14"
                                    style={{
                                        border: "1px solid rgb(224, 224, 224)",
                                        marginTop: "5px",
                                        padding: "8px 20px",
                                        color: "#000",
                                        display: "inline-block",
                                        borderRadius: "4px0"
                                    }}
                                />
                            </div>
                            <div
                                style={{
                                    lineHeight: "3rem",
                                    margin: "0px 10px"
                                }}
                            >
                                _
                            </div>
                            <input
                                type="text"
                                placeholder="Giá cao nhất"
                                maxLength="14"
                                style={{
                                    border: "1px solid rgb(224, 224, 224)",
                                    marginTop: "5px",
                                    padding: "8px 20px",
                                    color: "#000",
                                    display: "inline-block",
                                    borderRadius: "4px0"
                                }}
                            />
                            <button
                                style={{
                                    background: "var(--color-primary)",
                                    border: "none",
                                    color: "rgb(255,255,255)",
                                    padding: "8px 20px",
                                    borderRadius: "4px",
                                    marginLeft: "5px",
                                    height: "40px",
                                    visibility: "visible",
                                    marginTop: "7px"
                                }}
                            >
                                Tìm kiếm
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FilterBlock
