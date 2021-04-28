import "./AboutComponent.css"
const AboutComponent = () => {
    return (
        <div className="body-about">
            <div className="about-section">
                <div className="inner-container">
                    <h1>AboutComponent Us</h1>
                    <p className="text-about">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Doloribus velit ducimus, enim inventore earum, eligendi
                        nostrum pariatur necessitatibus eius dicta a voluptates
                        sit deleniti autem error eos totam nisi neque voluptates
                        sit deleniti autem error eos totam nisi neque.
                    </p>
                    <div className="skills-about">
                        <span>Web Design</span>
                        <span>Photoshop & Illustrator</span>
                        <span>Coding</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutComponent
