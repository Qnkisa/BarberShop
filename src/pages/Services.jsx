import React,{useEffect,useRef} from 'react'
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function Services() {

  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const ref4 = useRef();
  const ref5 = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if(entry.isIntersecting){
          entry.target.classList.add("active")
        }
      });
    });

    observer.observe(ref1.current);
    observer.observe(ref2.current);
    observer.observe(ref3.current);
    observer.observe(ref4.current);
    observer.observe(ref5.current);

    
  }, []);

  return (
    <div className="services">
      <div className="services-hero">
        <div className="services-hero-helper"></div>
        <div className="services-hero-content">
          <h1>Services</h1>
          <p>Trust our professionalism.</p>
        </div>
      </div>
      <div className="services-services">
        <h2>Services</h2>
        <div className="services-services-div">
          <div className="service-div" ref={ref1}>
              <img src="/scissors-icon.png" alt="" />
              <p>Haircut</p>
              <span>Step into our barber shop and experience the art of a perfect haircut. Our skilled barbers are trained in the latest trends and techniques, and will work with you to create a customized haircut that complements your unique style and features. From classic to contemporary, we offer a wide range of styles for men of all ages.</span>
          </div>
          <div className="service-div" ref={ref2}>
              <img src="/razor-icon.png" alt="" />
              <p>Shaving</p>
              <span>Treat yourself to the ultimate grooming experience with our classic shaving service. Our expert barbers use traditional straight razors and premium shaving creams to deliver a close and comfortable shave that leaves your skin feeling soft and rejuvenated. We take pride in our attention to detail and precision, ensuring that every stroke is performed with care and skill.</span>
          </div>
          <div className="service-div" ref={ref3}>
              <img src="/moustache-icon.png" alt="" />
              <p>Shaping</p>
              <span>Grooming your facial hair is an art, and our barbers are masters of their craft. Whether you're looking for a well-defined beard, a perfectly shaped mustache, or a clean and sharp goatee, our barbers have the expertise to create the look you desire. Using precise techniques and modern tools, we'll shape and groom your facial hair to perfection, enhancing your features and giving you a polished and sophisticated appearance.</span>
          </div>
          <div className="service-div" ref={ref4}>
              <img src="/towel-icon.png" alt="" />
              <p>Well Being</p>
              <span> At our barbershop, we believe that grooming is not just about looking good, but also feeling good. That's why we offer a range of services that promote well-being and relaxation. Treat yourself to a rejuvenating scalp massage that relieves stress and tension, or indulge in a refreshing facial treatment that cleanses and revitalizes your skin.</span>
          </div>
        </div>
      </div>
      <div className="services-images">
        <LazyLoadImage src="/services-image-one.jpg" alt="" loading='lazy'/>
        <LazyLoadImage src="/services-image-two.jpg" alt="" loading='lazy' />
        <LazyLoadImage src="/service-image-three.jpg" alt="" loading='lazy' />
        <LazyLoadImage src="/services-image-four.jpg" alt="" loading='lazy' />
        <LazyLoadImage src="/services-image-five.jpg" alt="" loading='lazy'/>
        <LazyLoadImage src="/services-image-six.jpg" alt="" loading='lazy'/>
      </div>
      <div className="services-pricing">
        <h3>Pricing</h3>
        <div className="pricing" ref={ref5}>
          <div className="pricing-div">
            <p>standart men cut</p>
            <div className="pricing-line"></div>
            <span>$40</span>
          </div>
          <div className="pricing-div">
            <p>seniors cut</p>
            <div className="pricing-line"></div>
            <span>$28</span>
          </div>
          <div className="pricing-div">
            <p>complete re-style</p>
            <div className="pricing-line"></div>
            <span>$60</span>
          </div>
          <div className="pricing-div">
            <p>classic fade</p>
            <div className="pricing-line"></div>
            <span>$45</span>
          </div>
          <div className="pricing-div">
            <p>skin fade</p>
            <div className="pricing-line"></div>
            <span>$50</span>
          </div>
          <div className="pricing-div">
            <p>Razor fade</p>
            <div className="pricing-line"></div>
            <span>$60</span>
          </div>
          <div className="pricing-div">
            <p>moustache trim</p>
            <div className="pricing-line"></div>
            <span>$20</span>
          </div>
          <div className="pricing-div">
            <p>beard trim</p>
            <div className="pricing-line"></div>
            <span>$30</span>
          </div>
          <div className="pricing-div">
            <p>head shave</p>
            <div className="pricing-line"></div>
            <span>$55</span>
          </div>
          <div className="pricing-div">
            <p>black mask</p>
            <div className="pricing-line"></div>
            <span>$15</span>
          </div>
          <div className="pricing-div">
            <p>string plucking</p>
            <div className="pricing-line"></div>
            <span>$20</span>
          </div>
        </div>
      </div>
    </div>
  )
}
