import { Pagination } from "antd"
import BreadcrumbComponent from "Components/Web/Breadcrumb"
import SelectBlock from "Components/Web/Product/ProductShow/SelectBlock"
import { TYPE_FILTER_PRICE, TYPE_PRODUCT } from "Constants/Data"
import { PATH } from "Constants/Path"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory, useParams } from "react-router"
import {
    changeActiveFilter,
    changeCurPageFilter,
    changePriceFilter,
    sortPrice
} from "Redux/Product/Product.reducer"
import { getProductsFilterApi } from "Redux/Product/Product.thunk"
import { isEmpty } from "Utils/CheckType"
import "./ProductFilter.css"

const ProductFilter = () => {
    const { productType, p } = useParams()
    const history = useHistory()
    function useQuery() {
        return new URLSearchParams(p)
    }
    let params = useQuery()
    const dispatch = useDispatch()
    const productsFilter = useSelector(
        state => state.ProductReducer.productsFilter
    )
    const filters = useSelector(state => state.ProductReducer.filters)
    const cur_page = useSelector(state => state.ProductReducer.cur_page)
    const max_page = useSelector(state => state.ProductReducer.max_page)
    const priceFrom = useSelector(state => state.ProductReducer.priceFrom)

    const priceTo = useSelector(state => state.ProductReducer.priceTo)

    const [indexBlock, setIndexBlock] = useState(0)
    //--------------------STATE FOR FILTER PRICE-----------------
    const [priceIncrease, setPriceIncrease] = useState(false)
    const [priceReduced, setPriceReduced] = useState(false)
    const [under1M, setUnder1M] = useState(false)
    const [between1M2M, setBetween1M2M] = useState(false)
    const [under5M, setUnder5M] = useState(false)
    const [under10M, setUnder10M] = useState(false)
    const [up10M, setUp10M] = useState(false)
    const [between10M15M, setBetween10M15M] = useState(false)
    const [between15M20M, setBetween15M20M] = useState(false)
    const [between20M25M, setBetween20M25M] = useState(false)
    const [up25M, setUp25M] = useState(false)

    const getKeyBlock = () => {
        setIndexBlock(indexBlock + 1)
        return indexBlock + 1
    }

    //----------------------ENV--------------------------

    const getProductsByPrice = type => {
        switch (type) {
            case TYPE_FILTER_PRICE.INCREASE:
                dispatch(sortPrice({ type: type }))
                setPriceIncrease(!priceIncrease)
                setPriceReduced(false)
                break

            case TYPE_FILTER_PRICE.REDUCED:
                dispatch(sortPrice({ type: type }))
                setPriceReduced(!priceReduced)
                setPriceIncrease(false)
                break

            case TYPE_FILTER_PRICE.UNDER_1M:
                dispatch(changePriceFilter({ priceFrom: 0, priceTo: 1000000 }))
                setUnder1M(!under1M)
                setBetween1M2M(false)
                setUnder5M(false)
                setUnder10M(false)
                setUp10M(false)
                break

            case TYPE_FILTER_PRICE.BETWEEN_1M_2M:
                dispatch(
                    changePriceFilter({ priceFrom: 1000000, priceTo: 2000000 })
                )
                setUnder1M(false)
                setBetween1M2M(!between1M2M)
                setUnder5M(false)
                setUnder10M(false)
                setUp10M(false)
                break

            case TYPE_FILTER_PRICE.UNDER_5M:
                dispatch(changePriceFilter({ priceFrom: 0, priceTo: 5000000 }))
                setUnder1M(false)
                setBetween1M2M(false)
                setUnder5M(!under5M)
                setUnder10M(false)
                setUp10M(false)
                break

            case TYPE_FILTER_PRICE.UNDER_10M:
                dispatch(changePriceFilter({ priceFrom: 0, priceTo: 10000000 }))
                setUnder1M(false)
                setBetween1M2M(false)
                setUnder5M(false)
                setUp10M(false)
                //------------DRIVE---------
                setUnder10M(!under10M)
                //-----------LAP------------
                setBetween10M15M(false)
                setBetween15M20M(false)
                setBetween15M20M(false)
                setBetween20M25M(false)
                setUp25M(false)
                break

            case TYPE_FILTER_PRICE.UP_10M:
                dispatch(
                    changePriceFilter({
                        priceFrom: 10000000,
                        priceTo: 100000000
                    })
                )
                setUnder1M(false)
                setBetween1M2M(false)
                setUnder5M(false)
                setUnder10M(false)
                setUp10M(!up10M)
                break

            case TYPE_FILTER_PRICE.BETWEEN_10M_15M:
                dispatch(
                    changePriceFilter({
                        priceFrom: 10000000,
                        priceTo: 15000000
                    })
                )
                setUnder10M(false)
                setBetween10M15M(false)
                setBetween10M15M(!between10M15M)
                setBetween15M20M(false)
                setBetween20M25M(false)
                setUp25M(false)
                break

            case TYPE_FILTER_PRICE.BETWEEN_15M_20M:
                dispatch(
                    changePriceFilter({
                        priceFrom: 15000000,
                        priceTo: 20000000
                    })
                )
                setUnder10M(false)
                setBetween10M15M(false)
                setBetween15M20M(false)
                setBetween15M20M(!between15M20M)
                setBetween20M25M(false)
                setUp25M(false)
                break

            case TYPE_FILTER_PRICE.BETWEEN_20M_25M:
                dispatch(
                    changePriceFilter({
                        priceFrom: 20000000,
                        priceTo: 25000000
                    })
                )
                setUnder10M(false)
                setBetween10M15M(false)
                setBetween15M20M(false)
                setBetween15M20M(false)
                setBetween20M25M(!between20M25M)
                setUp25M(false)
                break

            case TYPE_FILTER_PRICE.UP_25M:
                dispatch(
                    changePriceFilter({
                        priceFrom: 25000000,
                        priceTo: 100000000
                    })
                )
                setUnder10M(false)
                setBetween10M15M(false)
                setBetween15M20M(false)
                setBetween15M20M(false)
                setBetween20M25M(false)
                setUp25M(!up25M)
                break

            default:
                break
        }
    }

    const changePage = (page, pageSize) => {
        //check no data, check default, wrong url
        dispatch(changeCurPageFilter({ cur_page: page }))
    }

    //--------------------GET PARAMS---------------------------

    const getParamsDefault = () => {
        switch (productType) {
            case TYPE_PRODUCT.LAPTOP:
                return {
                    laptop_rams: [],
                    laptop_screens: [],
                    laptop_cpus: [],
                    laptop_brands: [],
                    price: [],
                    page: 1
                }
            case TYPE_PRODUCT.DRIVE:
                return {
                    drive_types: [],
                    drive_capacities: [],
                    brand_drive: [],
                    price: [],
                    page: 1
                }
            default:
                return {}
        }
    }

    const getParams = () => {
        switch (productType) {
            case TYPE_PRODUCT.LAPTOP:
                return {
                    laptop_rams: [...params.getAll("ram")],
                    laptop_screens: [...params.getAll("screen")],
                    laptop_cpus: [...params.getAll("cpu")],
                    laptop_brands: [...params.getAll("brand")],
                    price: [priceFrom, priceTo],
                    page: (cur_page && cur_page) || 1
                }
            case TYPE_PRODUCT.DRIVE:
                return {
                    drive_types: [...params.getAll("types")],
                    drive_capacities: [...params.getAll("capacities")],
                    brand_drive: [...params.getAll("brand")],
                    price: [priceFrom, priceTo],
                    page: (cur_page && cur_page) || 1
                }
            default:
                return {}
        }
    }

    //--------------------GET DATA FIRST-----------------------
    useEffect(() => {
        if (p && p === "all") {
            dispatch(getProductsFilterApi(productType, getParamsDefault()))
        } else {
            dispatch(getProductsFilterApi(productType, getParams()))
        }
    }, [])

    //-----------------GET DATA BY URL-------------------------
    useEffect(() => {
        dispatch(getProductsFilterApi(productType, getParams()))
    }, [productType, p, cur_page, priceFrom, priceTo])

    const [checkChange, setCheckChange] = useState(false)
    const changeRecord = (type, value) => {
        dispatch(changeActiveFilter({ type, value }))
        setCheckChange(!checkChange)
    }

    //-------------------------ADD PARAMS----------------------
    useEffect(() => {
        if (filters && p && !isEmpty(filters)) {
            let newParams = new URLSearchParams("")

            if (productType && productType === TYPE_PRODUCT.LAPTOP) {
                filters.brands.map(item =>
                    item.active === true
                        ? newParams.append("brand", item.id)
                        : ""
                )

                filters.rams.map(item =>
                    item.active === true
                        ? newParams.append("ram", item.value)
                        : ""
                )

                filters.screens.map(item =>
                    item.active === true
                        ? newParams.append("screen", item.value)
                        : ""
                )

                filters.cpus.map(item =>
                    item.active === true
                        ? newParams.append("cpu", item.value)
                        : ""
                )
            }
            if (productType && productType === TYPE_PRODUCT.DRIVE) {
                filters.brands.map(item =>
                    item.active === true
                        ? newParams.append("brand", item.id)
                        : ""
                )

                filters.types.map(item =>
                    item.active === true
                        ? newParams.append("types", item.value)
                        : ""
                )

                filters.capacities.map(item =>
                    item.active === true
                        ? newParams.append("capacities", item.value)
                        : ""
                )
            }
            if (newParams.toString() !== "") {
                history.push(
                    `${PATH.HOME}/${productType}/filter/${newParams.toString()}`
                )
            } else {
                history.push(`${PATH.HOME}/${productType}/filter/all`)
            }
        }
    }, [checkChange])
    //-----------------------RENDER-----------------------

    const renderPriceFilter = (
        stateFilterPrice,
        typeFilterPrice,
        textFilterPrice
    ) => {
        return (
            <div
                className={
                    stateFilterPrice
                        ? "filter__box__active noselect"
                        : "filter__box noselect"
                }
                onClick={() => {
                    getProductsByPrice(typeFilterPrice)
                }}
            >
                {textFilterPrice}
            </div>
        )
    }

    const renderPriceLaptopFilter = () => {
        return (
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
                    {renderPriceFilter(
                        priceIncrease,
                        TYPE_FILTER_PRICE.INCREASE,
                        "Giá tăng dần"
                    )}
                    {renderPriceFilter(
                        priceReduced,
                        TYPE_FILTER_PRICE.REDUCED,
                        "Giá giảm dần"
                    )}
                    {renderPriceFilter(
                        under10M,
                        TYPE_FILTER_PRICE.UNDER_10M,
                        "Dưới 10 triệu"
                    )}
                    {renderPriceFilter(
                        between10M15M,
                        TYPE_FILTER_PRICE.BETWEEN_10M_15M,
                        "10 - 15 triệu"
                    )}
                    {renderPriceFilter(
                        between15M20M,
                        TYPE_FILTER_PRICE.BETWEEN_15M_20M,
                        "15 - 20 triệu"
                    )}
                    {renderPriceFilter(
                        between20M25M,
                        TYPE_FILTER_PRICE.BETWEEN_20M_25M,
                        "20 - 25 triệu"
                    )}
                    {renderPriceFilter(
                        up25M,
                        TYPE_FILTER_PRICE.UP_25M,
                        "Trên 25 triệu"
                    )}
                </div>
            </div>
        )
    }

    const renderPriceDriveFilter = () => {
        return (
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
                    {renderPriceFilter(
                        priceIncrease,
                        TYPE_FILTER_PRICE.INCREASE,
                        "Giá tăng dần"
                    )}
                    {renderPriceFilter(
                        priceReduced,
                        TYPE_FILTER_PRICE.REDUCED,
                        "Giá giảm dần"
                    )}
                    {renderPriceFilter(
                        under1M,
                        TYPE_FILTER_PRICE.UNDER_1M,
                        "Dưới 1 triệu"
                    )}
                    {renderPriceFilter(
                        between1M2M,
                        TYPE_FILTER_PRICE.BETWEEN_1M_2M,
                        "1 - 2 triệu"
                    )}
                    {renderPriceFilter(
                        under5M,
                        TYPE_FILTER_PRICE.UNDER_5M,
                        "Dưới 5 triệu"
                    )}
                    {renderPriceFilter(
                        under10M,
                        TYPE_FILTER_PRICE.UNDER_10M,
                        "Dưới 10 triệu"
                    )}
                    {renderPriceFilter(
                        up10M,
                        TYPE_FILTER_PRICE.UP_10M,
                        "Trên 10 triệu"
                    )}
                </div>
            </div>
        )
    }

    const renderFilter = (title, filterType, type) => {
        return (
            <div className="filter__icon">
                <div className="css_icon">
                    <div className="filter__text">{title && title}</div>
                    {filterType &&
                        filterType.map(item => {
                            return (
                                <div
                                    className={
                                        item.active
                                            ? "filter__box__active"
                                            : "filter__box"
                                    }
                                    key={item.value}
                                    onClick={() =>
                                        changeRecord(
                                            type,
                                            type && type === "brands"
                                                ? item.id
                                                : item.value
                                        )
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
    const renderLaptopFilters = () => {
        return (
            <div>
                {renderFilter(
                    "Thương hiệu",
                    filters && filters.brands,
                    "brands"
                )}
                {renderFilter("Vi xử lí", filters && filters.cpus, "cpus")}
                {renderFilter("Ram", filters && filters.rams, "rams")}
                {renderFilter(
                    "Màn hình",
                    filters && filters.screens,
                    "screens"
                )}
                {renderPriceLaptopFilter()}
            </div>
        )
    }
    const renderDriveFilters = () => {
        return (
            <div>
                {renderFilter(
                    "Thương hiệu",
                    filters && filters.brands,
                    "brands"
                )}
                {renderFilter("Loại ổ cứng", filters && filters.types, "types")}
                {renderFilter(
                    "Dung lượng",
                    filters && filters.capacities,
                    "capacities"
                )}
                {renderPriceDriveFilter()}
            </div>
        )
    }

    return (
        <div>
            <BreadcrumbComponent pageName={"Bộ lọc sản phẩm"} />
            {/* <FilterBlock /> */}
            <div className="container">
                <div className="row">
                    <div className="filter">
                        <div className="filter__top">
                            <div className="filter__top-left" />
                            <div className="filter__top-right">BỘ LỌC</div>
                        </div>
                        {productType === TYPE_PRODUCT.LAPTOP
                            ? renderLaptopFilters()
                            : renderDriveFilters()}
                    </div>
                </div>
                {/* render data */}
                {
                    <SelectBlock
                        key={() => getKeyBlock()}
                        selectBlockTitle={"Kết quả tìm kiếm"}
                        products={
                            isEmpty(productsFilter) ? null : productsFilter
                        }
                    />
                }
                <Pagination
                    style={{ display: "flex", justifyContent: "center" }}
                    defaultCurrent={(cur_page && cur_page) || 0}
                    total={(max_page && max_page * 10) || 0}
                    onChange={(page, pageSize) => changePage(page, pageSize)}
                />
                <br />
            </div>
        </div>
    )
}

export default ProductFilter
