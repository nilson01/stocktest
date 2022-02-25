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

                <div className=" aboutUsContent" style={{}}>
                    <h3 className="" style={{ display: 'flex', justifyContent: 'center' }}>Abhishek Kafle</h3>
                    <strong style={{ display: 'flex', justifyContent: 'center' }}>
                        <Typed
                            strings={[
                                "Applied Mathematics and Statistics",
                                "Mechanical Engineer",

                            ]}
                            typeSpeed={80}
                            backDelay={1100}
                            backSpeed={30}
                            loop
                        />
                    </strong>

                </div>
                <div className=" aboutUsContent" style={{}}>


                    <h3 className="" style={{ display: 'flex', justifyContent: 'center' }}>Crispen Chisina</h3>

                    <strong style={{ display: 'flex', justifyContent: 'center' }}>
                        <Typed
                            strings={[
                                "Applied Mathematics and Statistics",
                                "Data Science Enthusiast"

                            ]}
                            typeSpeed={80}
                            backDelay={1100}
                            backSpeed={30}
                            loop
                        />
                    </strong>

                </div>
                <div className=" aboutUsContent" style={{}}>


                    <h3 className="" style={{ display: 'flex', justifyContent: 'center' }}>Nilson Chapagain</h3>

                    <strong style={{ display: 'flex', justifyContent: 'center' }}>
                        <Typed
                            strings={[
                                "Applied Mathematics and Statistics",
                                "Machine Learning Enthusiast"

                            ]}
                            typeSpeed={80}
                            backDelay={1100}
                            backSpeed={30}
                            loop
                        />
                    </strong>

                </div>
            </div>

        </div>
    )
}