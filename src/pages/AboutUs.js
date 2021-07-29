import React from 'react'
import Typed from "react-typed";

export default function AboutUs({ showSidebar }) {
    return (
        <div className="about-us container" onClick={showSidebar}>
            <h1 className="aboutUS-title"> ABOUT US </h1>
            <div className="aboutUs-contents">
                <div className="imageAbhishek aboutUsImage">Abhishek Image here</div>
                <div className="imageCrispen aboutUsImage">Crispen Image here</div>
                <div className="imageNilson aboutUsImage">Nilson Image here</div>
            </div>
                <div className="aboutUs-contents">
                
                <div className="contentNilson aboutUsContent">
                    <h3 className="intro-title mb-4">Abhishek Kafle</h3>
                    <p className="intro-subtitle">
                        <span className="text-slider-items"></span>
                        <strong className="text-slider">
                        <Typed
                            strings={[
                            "Mechanical Engineer",
                            "Applied Maths and Statistician",
                            "Front End Developer"
                            ]}
                            typeSpeed={80}
                            backDelay={1100}
                            backSpeed={30}
                            loop
                        />
                        </strong>
                    </p>
                </div>

                <div className="contentNilson aboutUsContent">
                    <h3 className="intro-title mb-4">Crispen Chisina</h3>
                    <p className="intro-subtitle">
                        <span className="text-slider-items"></span>
                        <strong className="text-slider">
                        <Typed
                            strings={[
                            "Applied Maths and Statistician",
                            "Front End Developer",
                            "Back End Developer",
                            "Data Science Enthusiast"
                            ]}
                            typeSpeed={80}
                            backDelay={1100}
                            backSpeed={30}
                            loop
                        />
                        </strong>
                    </p>
                </div>

                <div className="contentNilson aboutUsContent">
                    <h3 className="intro-title mb-4">Nilson Chapagain</h3>
                    <p className="intro-subtitle">
                        <span className="text-slider-items"></span>
                        <strong className="text-slider">
                        <Typed
                            strings={[
                            "Applied Maths and Statistician",
                            "Computer Science Minor",
                            "Front End Developer",
                            "Back End Developer",
                            "Machine Learning Enthusiast"
                            ]}
                            typeSpeed={80}
                            backDelay={1100}
                            backSpeed={30}
                            loop
                        />
                        </strong>
                    </p>
                </div>
            </div>
        </div>
    )
}