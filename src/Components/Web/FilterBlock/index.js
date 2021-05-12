import { BRAND_LAPTOP_FILTER_WEB, PATH_PRICE_FILTER_WEB } from "Constants/Data"
import { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import "./FilterBlock.css"
const FilterBlock = () => {
    const [filterRecordsBrand, setFilterRecordsBrand] = useState(
        BRAND_LAPTOP_FILTER_WEB || []
    )
    const [filterRecordsPrice, setFilterRecordsPrice] = useState(
        PATH_PRICE_FILTER_WEB || []
    )

    const changeRecordBrand = id => {
        filterRecordsBrand.map(
            item => item.id === parseInt(id) && (item.active = !item.active)
        )
        setFilterRecordsBrand([...filterRecordsBrand], filterRecordsBrand)
    }
    const changeRecordPrice = id => {
        filterRecordsPrice.map(
            item => item.id === parseInt(id) && (item.active = !item.active)
        )
        setFilterRecordsPrice([...filterRecordsPrice], filterRecordsPrice)
    }

    console.log(filterRecordsBrand)
    console.log(filterRecordsPrice)
    return (
        <div className="container">
            <div className="row">
                <div className="filter">
                    <div className="filter__top">
                        <div className="filter__top-left" />
                        <div className="filter__top-right">BỘ LỌC</div>
                    </div>

                    <div className="filter__icon">
                        <div className="css_icon">
                            <div className="filter__text">Thương hiệu</div>
                            {filterRecordsBrand.map(item => {
                                return (
                                    <div
                                        className={
                                            item.active
                                                ? "filter__box__active"
                                                : "filter__box"
                                        }
                                        key={item.id}
                                        onClick={() =>
                                            changeRecordBrand(item.id)
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
                    <div className="filter__icon">
                        <div className="css_icon">
                            <div className="filter__text">Giá</div>
                            {filterRecordsPrice.map(item => {
                                return (
                                    <div
                                        className={
                                            item.active
                                                ? "filter__box__active"
                                                : "filter__box"
                                        }
                                        key={item.id}
                                        onClick={() =>
                                            changeRecordPrice(item.id)
                                        }
                                    >
                                        <div className="filter__link">
                                            {item.text}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FilterBlock
