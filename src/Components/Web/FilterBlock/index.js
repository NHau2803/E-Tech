import { PATH_BRAND, PATH_PRICE } from "Constants/Data"
import "./FilterBlock.css"
const FilterBlock = () => {
    return (
        <div className=" clearfix">
            <div className="container">
                <div className="row">
                    {/* Chọn hãng sản phẩm */}
                    <div className="col-md-12 top-filter zoom">
                        <label>Chọn hãng :</label>
                        <a href={PATH_BRAND.ASUS}>
                            <img
                                src={
                                    "https://cdn.tgdd.vn/Brand/1/Asus44-b_1.png"
                                }
                                alt="logo"
                            />
                        </a>
                        <a href={PATH_BRAND.HP}>
                            <img
                                src={
                                    "https://cdn.tgdd.vn/Brand/1/HP44-b_27.jpg"
                                }
                                alt="logo"
                            ></img>
                        </a>
                        <a href={PATH_BRAND.LEVONO}>
                            <img
                                src={
                                    "https://cdn.tgdd.vn/Brand/1/Lenovo44-b_35.png"
                                }
                                alt="logo"
                            ></img>
                        </a>
                        <a href={PATH_BRAND.ACER}>
                            <img
                                src={
                                    "https://cdn.tgdd.vn/Brand/1/Acer44-b_25.jpg"
                                }
                                alt="logo"
                            ></img>
                        </a>
                        <a href={PATH_BRAND.DELL}>
                            <img
                                src={
                                    "https://cdn.tgdd.vn/Brand/1/Dell44-b_2.jpg"
                                }
                                alt="logo"
                            ></img>
                        </a>
                        {/* <a href={PATH_BRAND.LG}>
                            <img
                                src={
                                    "https://cdn.tgdd.vn/Brand/1/LG44-b_32.jpg"
                                }
                                alt="logo"
                            ></img>
                        </a>
                        <a href={PATH_BRAND.MSI}>
                            <img
                                src={
                                    "https://cdn.tgdd.vn/Brand/1/MSI44-b_17.png"
                                }
                                alt="logo"
                            ></img>
                        </a> */}
                    </div>

                    {/* Lọc / sắp xếp sản phẩm  */}
                    <div className="col-md-12 top-all">
                        <div className="top-left">
                            <label>Chọn mức giá :</label>
                            <a href={PATH_PRICE.PRICE_5TR}>Dưới 5 Triệu</a>
                            <a href={PATH_PRICE.PRICE_5TR10TR}>5 - 10 Triệu</a>
                            <a href={PATH_PRICE.PRICE_10TR15TR}>
                                10 - 15 Triệu
                            </a>
                            <a href={PATH_PRICE.PRICE_15TR20TR}>
                                15 - 20 Triệu
                            </a>
                            <a href={PATH_PRICE.PRICE_20TR25TR}>
                                20 - 25 Triệu
                            </a>
                            <a href={PATH_PRICE.PRICE_25TR30TR}>
                                25 - 30 Triệu
                            </a>
                            <a href={PATH_PRICE.PRICE_30TR}>30 Triệu Trở lên</a>
                        </div>

                        <div className="top-right">
                            <label>Sắp xếp giá : &nbsp;</label>
                            <a href="/#">
                                <i
                                    class="fa fa-sort-amount-desc"
                                    id="min"
                                    onclick="Function(max)"
                                ></i>
                                &nbsp;Tăng dần&ensp;
                            </a>
                            <a href="/#">
                                <i
                                    class="fa fa-sort-amount-asc"
                                    id="max"
                                    onclick="Function(min)"
                                ></i>
                                &nbsp;Giảm dần
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FilterBlock
