import AboutComponent from "Components/Web/About"
import FooterComponent from "Components/Web/Common/Footer"
import HeaderBanner from "Components/Web/Common/Header/HeaderBanner"
import HeaderMain from "Components/Web/Common/Header/HeaderMain"
import HeaderNav from "Components/Web/Common/Header/HeaderNav"
import HeaderTop from "Components/Web/Common/Header/HeaderTop"

const AboutPage = () => {
    return (
        <div>
            <header>
                <HeaderTop />
                <HeaderMain />
            </header>
            <HeaderNav isOpen={true} />
            <HeaderBanner />
            <AboutComponent />
            <FooterComponent
                logo={
                    "https://drive.google.com/uc?export=view&id=1dTn_G3onivLsMJF0UfXLdRcr-lkKoaTK"
                }
            />
        </div>
    )
}

export default AboutPage
