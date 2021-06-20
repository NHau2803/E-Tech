import Images from "Constants/Images"

const AboutPage = () => {
    window.scrollTo(0, 0)
    return (
        <div className="container">
            <div className="content">
                <br></br>
                <h2>Giới Thiệu</h2>
                <p>
                    - ETech không ngừng thay đổi, phát triển để phù hợp với thị
                    trường với triết lý "Khách hàng là trung tâm" và những Giá
                    trị cốt lõi được xây dựng để chăm sóc, phục vụ khách hàng
                    một cách tốt nhất. Được thành lập từ năm 2020 với tiền thân
                    là cửa hàng EShop chuyên cung cấp các mẫu laptop cao cấp
                    nhập khẩu không được cung cấp chính thức tại Việt Nam.
                </p>
                <p>
                    - ETech đã phát triển và đến nay đã sở hữu chuỗi cửa hàng
                    nhằm mang tới những sản phẩm chất lượng được nhập khẩu trực
                    tiếp tại Mỹ. Các mẫu laptop, PC đồng bộ, phụ kiện độc đáo,
                    chất lượng phục vụ nhu cầu cao nhất của người dùng.
                </p>
                <br></br>
                <img alt="img" src={Images.QC}></img>
                <br></br>
                <h2>Giá Trị Cốt Lõi</h2>
                <p>
                    <b>
                        - Chuyên môn - Thân thiện - Chân thành - Nhiệt huyết -
                        Công nghệ
                    </b>{" "}
                    là những Giá trị cốt lõi mà ETech sử dụng trong quá trình
                    hình thành và phát triển, là kim chỉ nam cho mọi hoạt động
                    sắp tới của công ty với mục tiêu mang đến những sản phẩm
                    công nghệ mới nhất, đầy đủ nhất đến thị trường Việt
                </p>
                <div className="content-title">Chuyên môn</div>
                <p>
                    - Chúng tôi chú trọng xây dựng đội ngũ với chuyên môn cao
                    nhất, am hiểu tường tận thị trường, thị hiếu của khách hàng.
                    Mỗi sản phẩm ETech bán ra đều được nghiên cứu kỹ càng, phân
                    tích ưu, nhược điểm, lựa chọn cấu hình phù hợp cho người
                    tiêu dùng Việt. ETech sẵn sàng phục vụ những sản phẩm đặc
                    biệt không được phân phối trong nước. Đây cũng là điểm khác
                    biệt lớn nhất của ETech với đại đa số các địa chỉ cung cấp
                    Laptop, linh kiện PC trên thị trường.
                </p>
                <div className="content-title">Chân thành</div>
                <p>
                    - ETech đến với khách hàng bằng tất cả sự chân thành và tin
                    cậy. Tình trạng, giá trị, chất lượng sản phẩm được đảm bảo
                    chính xác, đồng nhất.
                </p>

                <div className="content-title">Thân thiện</div>
                <p>
                    - Tất cả các cửa hàng nằm trong hệ thống của ETech đều được
                    xây dựng với tiêu chí thân thiện với môi trường. Đội ngũ tư
                    vấn viên nhiệt tình, năng động, hoà nhã, sẵn sàng trao đổi,
                    hỗ trợ khách hàng nhanh chóng
                </p>

                <div className="content-title">Nhiệt huyết</div>
                <p>
                    - Song song với việc cung cấp sản phẩm, giá trị, trải nghiệm
                    dành cho khách hàng, ETech chú trọng đào tạo, tuyển dụng đội
                    ngũ trẻ, đam mê và đầy nhiệt huyết để luôn luôn đổi mới, bắt
                    kịp xu hướng thị trường.
                </p>

                <div className="content-title">Công nghệ</div>
                <p>
                    - Chúng tôi cam kết luôn luôn thay đổi bản thân, áp dụng
                    công nghệ tiên tiến để thay đổi hành cách thức mua hàng,
                    phát triển nhiều nền tảng tiên tiến nhằm phục vụ Quý khách
                    hàng nhiều hơn trong tương lai.
                </p>
            </div>
        </div>
    )
}

export default AboutPage
