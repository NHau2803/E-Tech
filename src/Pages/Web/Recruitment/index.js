import Images from "Constants/Images"
import React from "react"
import "./Recruitment.css"
const Recruitment = () => {
    window.scrollTo(0, 0)
    return (
        <div>
            <div className="content-banner-area">
                <div className="content-area">
                    <div className="content">
                        <h2>Phát Triển Cùng Nhau</h2>

                        <p style={{ color: "white" }}>
                            &emsp;ETech tin rằng nhân viên là cốt lõi của bền
                            vững, chúng tôi luôn quan tâm đến lộ trình phát
                            triển nghề nghiệp của bạn. <br></br>&emsp;Môi trường
                            làm việc tại ETech được xây dựng đa dạng, đề cao sự
                            sáng tạo và thay đổi linh hoạt theo xu thế của thị
                            trường. <br></br>&emsp;Mỗi nhân viên đều được trao
                            cơ hội như nhau, chúng tôi tin rằng dù bạn khởi đầu
                            ra sao thì nhiệt huyết và khát khao học hỏi vẫn sẽ
                            quyết định vị trí cuối cùng của bạn.
                        </p>

                        {/* <button
                            className="content-button"
                            //   onClick={() => window.scrollTo(0, 1000)}
                        >
                            Thông tin Tuyển dụng
                        </button> */}
                    </div>
                </div>
            </div>
            <div className="body-box-recruitment">
                <div className="container-box-recruitment">
                    <div className="box-recruitment">
                        <h4>Môi trường làm việc</h4>
                        <p>
                            Năng động, thân thiện, cởi mở, nhiệt huyết, đầy đam
                            mê và đồng cảm giữa những nhân viên với nhau, là nơi
                            nhân viên ETech được cảm thấy tin tưởng và chia sẻ
                            thông tin với nhau để thể hiện hết khả năng sáng tạo
                            và gắn bó lâu dài với công ty.
                        </p>
                    </div>
                    <div className="box-recruitment">
                        <h4>Đội ngũ lãnh đạo</h4>
                        <p>
                            Có tầm nhìn và đưa việc thực hiện mục tiêu đạt tới
                            tiêu chuẩn cao hơn. Có mối liên kết chặt chẽ với cấp
                            nhân viên, luôn cùng đồng hành với nhân viên và cùng
                            động viên, khích lệ, định hướng và hỗ trợ nhân viên
                            đạt được mục tiêu đã đề ra.
                        </p>
                    </div>
                    <div className="box-recruitment">
                        <h4>Văn hóa và giá trị</h4>
                        <p>
                            Tại ETech bạn sẽ được trải nghiệm văn hóa làm việc
                            hoàn toàn mới, đây sẽ là đòn bẩy để tạo và khẳng
                            định giá trị của bản thân.
                        </p>
                    </div>
                    <div className="box-recruitment">
                        <h4>Cơ hội phát triển</h4>
                        <p>
                            ETech luôn coi trọng sự đóng góp và luôn cam kết đầu
                            tư vào sự phát triển của nhân viên. Sự phát triển
                            của nhân viên là kiến tạo tương lai của ETech.
                        </p>
                    </div>
                </div>
            </div>
            <div className="container">
                <br></br>
                <div className="content">
                    <h2>
                        Cùng nhau bứt phá giới hạn để tạo ra những giá trị khác
                        biệt.
                    </h2>
                    <p>
                        - Được thành lập từ năm 2020 với tiền thân là cửa hàng
                        EShop chuyên cung cấp các mẫu laptop cao cấp nhập khẩu
                        không được cung cấp chính thức tại Việt Nam, ETech đã
                        bứt phá trở thành một trong những nhà bán lẻ IT hàng đầu
                        tại Việt Nam.
                    </p>
                    <p>
                        - Thành công của ETech đến từ niềm tin rằng tiềm năng
                        của con người là vô hạn, chúng tôi biết cách xây dựng
                        môi trường làm việc đa dạng cùng mức thu nhập xứng đáng
                        giúp mỗi cá nhân vượt qua giới hạn bản thân để góp phần
                        tạo giá trị đột phá cho tập thể. Chỉ cần có nhiệt huyết
                        và sự sáng tạo, hành trình phát triển của ETech cũng sẽ
                        là hành trình phát triển sự nghiệp của chính bạn.
                    </p>
                    <img alt="IMG" src={Images.Store}></img>
                </div>

                <div className="content">
                    <div className="content-title">
                        Bạn có phải người chúng tôi tìm kiếm?
                    </div>
                    <div className="content-title">
                        Nộp CV tại địa chỉ email: etech@contact.com
                    </div>
                    <div className="content-title">Thanks.</div>
                </div>
                <br></br>
            </div>
        </div>
    )
}

export default Recruitment
