import React from 'react'
import './benefits.css'
import img1 from '../../assets/img1.png'
import img2 from '../../assets/img2.png'
import img3 from '../../assets/img3.png'


function Benefits() {
    let benefits = [
        {
            classname: "benefit t1",
            imgUrl: img1,
            heading: "Healthy Lifestyle",
            para: "Lorem ipsum, dolor sit amet consectetur adipisicing elit."
        },
        {
            classname: "benefit t2",
            imgUrl: img2,
            heading: "Increased Flexiblity",
            para: "Lorem ipsum, dolor sit amet consectetur adipisicing elit."
        },
        {
            classname: "benefit t3",
            imgUrl: img3,
            heading: "Reduce Blood Pressure",
            para: "Lorem ipsum, dolor sit amet consectetur adipisicing elit."
        }
    ]
    return (
        <div className="Benefits">
            {
                benefits.map((bnft) => {
                    return (
                        <div className={bnft.classname} data-aos="zoom-in">
                            <div className="imgcontainer">
                                <img src={bnft.imgUrl} alt="img1" />
                            </div>
                            <div className="content">
                                <h6>{bnft.heading}</h6>
                                <p>{bnft.para}</p>
                            </div>
                        </div>
                )
            })
           }
        </div>

    )
}

export default Benefits