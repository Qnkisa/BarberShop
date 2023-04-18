import React,{useRef,useEffect} from 'react'

export default function Footer() {

    const ref1 = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if(entry.isIntersecting){
            entry.target.classList.add("active")
            }
        });
        },{
            threshold:0.25
        });

        observer.observe(ref1.current);

        
    }, []);


  return (
    <footer>
        <div className="nav-logo">
            <img src="/website-logo.png" alt="" />
            <p>by Yanislav Angelov</p>
        </div>
        <div className="website-locations footer-locations" ref={ref1}>
            <div className="website-location">
                <div className="website-location-div">
                    <div className="website-location-div-icon">
                        <ion-icon name="location-outline"></ion-icon>
                    </div>
                    <p>123 Main St, Swite 456</p>
                </div>
                <div className="website-location-div">
                    <div className="website-location-div-icon">
                        <ion-icon name="call-outline"></ion-icon>
                    </div>
                    <p>(555) 123-4567</p>
                </div>
                <div className="website-location-div">
                    <div className="website-location-div-icon">
                        <ion-icon name="time-outline"></ion-icon>
                    </div>
                    <p>MON - SUN: 09:00 - 20:00</p>
                </div>
            </div>
            <div className="website-location">
                <div className="website-location-div">
                    <div className="website-location-div-icon">
                        <ion-icon name="location-outline"></ion-icon>
                    </div>
                    <p>189 ELM St, Cityville</p>
                </div>
                <div className="website-location-div">
                    <div className="website-location-div-icon">
                        <ion-icon name="call-outline"></ion-icon>
                    </div>
                    <p>(555) 987 - 6543</p>
                </div>
                <div className="website-location-div">
                    <div className="website-location-div-icon">
                        <ion-icon name="time-outline"></ion-icon>
                    </div>
                    <p>MON - SUN: 09:00 - 20:00</p>
                </div>
            </div>
        </div>
        <div className="footer-bottom">
            <p>@ 2023 BarberShop</p>
            <span>All rights reserved.</span>
        </div>
    </footer>
  )
}
