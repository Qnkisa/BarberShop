import React,{useEffect,useRef} from 'react'

export default function HomeBrag() {

    const ref1 = useRef();
    const ref2 = useRef();
    const ref3 = useRef();

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
  
      
    }, []);

  return (
    <div className="home-brag">
        <div className="home-brag-top">
            <div className="nav-logo">
                <img src="/website-logo.png" alt="" />
                <p>by Yanislav Angelov</p>
            </div>
        </div>
        <div className="home-brag-bottom">
            <p ref={ref1}>Our barber shop is a cut above the rest! With highly skilled barbers who are passionate about their craft, we guarantee a top-notch grooming experience. From classic haircuts to modern styles, our barbers stay up-to-date with the latest trends to ensure you leave our shop looking and feeling your best.</p>
            <p ref={ref2}>Experience the difference at our barber shop, where customer satisfaction is our top priority. Our friendly and welcoming atmosphere creates a comfortable space for you to relax while you receive expert grooming services. Our attention to detail and commitment to exceptional service sets us apart, making us the go-to destination for all your grooming needs.</p>
            <p ref={ref3}>Step into our barber shop and step out with confidence! Our team of barbers is dedicated to providing exceptional service and helping you achieve the perfect look. From precision haircuts to hot towel shaves, we take pride in our attention to detail and use only the finest grooming products. Trust us for a premium grooming experience that will leave you looking and feeling your best.</p>
        </div>
    </div>
  )
}
