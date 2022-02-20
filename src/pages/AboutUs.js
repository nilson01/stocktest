import React from 'react'
import Typed from "react-typed";
import profile_urla from '../media/abhi.png';
import profile_urlc from '../media/cris.jpg';
import profile_urln from '../media/nil.png';


export default function AboutUs({ showSidebar }) {
    return (
        <div className="about-us container" onClick={showSidebar}>
            <h1 className="aboutUS-title"> ABOUT US </h1>
            <div className="aboutUs-contents">
                <div className="imageAbhishek aboutUsImage">
                    <img src={profile_urla} alt="profile" width='100%' height='100%' style={{ borderRadius: '400px' }} />
                </div>
                <div className="imageCrispen aboutUsImage">
                    <img src={profile_urlc} alt="profile" width='100%' height='100%' style={{ borderRadius: '400px' }} />
                </div>
                <div className="imageNilson aboutUsImage">
                    <img src={profile_urln} alt="profile" width='100%' height='100%' style={{ borderRadius: '400px' }} />
                </div>
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