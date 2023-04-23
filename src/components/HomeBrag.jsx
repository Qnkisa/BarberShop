import React,{useEffect,useRef} from 'react'

export default function HomeBrag() {

    const ref1 = useRef();
    const ref2 = useRef();

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
            <p ref={ref1}>Our barber shop is a cut above the rest! With highly skilled barbers who are passionate about their craft, we guarantee a top-notch grooming experience.</p>
            <p ref={ref2}>Experience the difference at our barber shop, where customer satisfaction is our top priority. Our friendly and welcoming atmosphere creates a comfortable space for you to relax while you receive expert grooming services. </p>
        </div>
    </div>
  )
}
