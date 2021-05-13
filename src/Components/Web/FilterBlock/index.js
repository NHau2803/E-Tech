import {
    BRAND_LAPTOP_FILTER_WEB,
    PRICE_LAPTOP_FILTER_WEB,
    BRAND_HARD_DRIVE_FILTER_WEB,
    RAM_LAPTOP_FILTER_WEB,
    CONNECT_LAPTOP_FILTER_WEB,
    TYPE_PRODUCT,
    SCREEN_LAPTOP_FILTER_WEB,
    CAPACITY_HARD_DRIVE_FILTER_WEB
} from "Constants/Data"
import { useEffect, useState } from "react"
import { Link, NavLink, useParams } from "react-router-dom"
import "./FilterBlock.css"
const FilterBlock = () => {
    const { productType } = useParams()

    const getBrandFilterDefault = () => {
        switch (productType) {
            case TYPE_PRODUCT.LAPTOP:
                return BRAND_LAPTOP_FILTER_WEB
            case TYPE_PRODUCT.HARD_DRIVE:
                return BRAND_HARD_DRIVE_FILTER_WEB
            default:
                break
        }
    }
    const [checkChange, setCheckChange] = useState(false)
    const [filterRecordsBrand, setFilterRecordsBrand] = useState(
        getBrandFilterDefault() || []
    )
    const [filterRecordsRam, setFilterRecordsRam] = useState(
        RAM_LAPTOP_FILTER_WEB || []
    )
    const [filterRecordsScreen, setFilterRecordsScreen] = useState(
        SCREEN_LAPTOP_FILTER_WEB || []
    )
    const [filterRecordsConnect, setFilterRecordsConnect] = useState(
        CONNECT_LAPTOP_FILTER_WEB || []
    )
    const [filterRecordsCapacity, setFilterRecordsCapacity] = useState(
        CAPACITY_HARD_DRIVE_FILTER_WEB || []
    )

    const renderFilter = (title, filterRecordName, changeRecordName) => {
        return (
            <div className="filter__icon">
                <div className="css_icon">
                    <div className="filter__text">{title}</div>
                    {filterRecordName.map(item => {
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
                                <div className="filter__link">{item.value}</div>
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
        filterRecordsBrand.map(item =>
            item.active === true ? paramsBrand.push(item.value) : ""
        )
        filterRecordsRam.map(item =>
            item.active === true ? paramsRam.push(item.value) : ""
        )
        filterRecordsScreen.map(item =>
            item.active === true ? paramsScreen.push(item.value) : ""
        )
        filterRecordsConnect.map(item =>
            item.active === true ? paramsConnect.push(item.value) : ""
        )
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
        console.log(
            "🚀 ~ file: index.js ~ line 100 ~ useEffect ~ paramsRequest",
            paramsRequest
        )
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

    console.log(filterRecordsBrand)
    console.log(filterRecordsRam)
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

                    <div className="filter__icon">
                        <div className="css_icon">
                            <div className="filter__text">Giá</div>
                            Đang cập nhật
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FilterBlock
