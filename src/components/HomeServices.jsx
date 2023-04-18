import React,{useState,useEffect,useRef} from 'react'
import {Link} from "react-router-dom"

export default function HomeServices() {

    const ref1 = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if(entry.isIntersecting){
            entry.target.classList.add("active")
            }
        });
        });

        observer.observe(ref1.current);

        
    }, []);

  return (
    <div className="home-services">
        <h2>Our services</h2>
        <div className="home-services-grid" ref={ref1}>
            <div className="service-div">
                <img src="/scissors-icon.png" alt="" />
                <p>Haircut</p>
                <span>We offer both classic and modern hairstyles.</span>
            </div>
            <div className="service-div">
                <img src="/razor-icon.png" alt="" />
                <p>Shaving</p>
                <span>The skin is treated with a special oil and warm towel.</span>
            </div>
            <div className="service-div">
                <img src="/moustache-icon.png" alt="" />
                <p>Shaping</p>
                <span>Spaping is carried out with the help of a professional trimmer and razor.</span>
            </div>
        </div>
        <div className="home-services-cta">
            <Link to="/services"> <div className="home-services-cta-text">View All</div> <ion-icon name="arrow-forward-outline"></ion-icon></Link>
        </div>
    </div>
  )
}
