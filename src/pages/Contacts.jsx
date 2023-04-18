import React,{useRef,useEffect} from 'react'

export default function Contacts() {

  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const ref4 = useRef();

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
    observer.observe(ref2.current);
    observer.observe(ref3.current);
    observer.observe(ref4.current);

    
  }, []);

  return (
    <div className="contacts">
      <div className="contacts-hero">
        <div className="contacts-hero-helper"></div>
        <div className="contacts-hero-content">
          <h1>Contacts</h1>
          <p>Get in touch with us.</p>
        </div>
      </div>
      <div className="contacts-divs">
        <h2>Location Main St</h2>
        <div className="contacts-div">
          <div className="contacts-div-image" ref={ref1}>
            <img src="/barber-location1.jpg" alt="" />
          </div>
          <div className="contacts-div-content" ref={ref2}>
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
          </div>
        </div>
        <h3>Location Elm St</h3>
        <div className="contacts-div">
          <div className="contacts-div-content" ref={ref3}>
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
          <div className="contacts-div-image" ref={ref4}>
            <img src="/barber-location2.webp" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}
