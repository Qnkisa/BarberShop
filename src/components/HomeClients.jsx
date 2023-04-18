import React,{useEffect,useRef} from 'react'

export default function HomeClients() {

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
    <div className="home-clients">
        <h3>Testimonials</h3>
        <div className="clients-grid" ref={ref1}>
            <div className="client-div">
                <div className="client-apostrophe">&#39;&#39;</div>
                <p>As someone who takes pride in their appearance, I can confidently say that this barber shop is top-notch. The barbers are true experts in their craft, and their passion for what they do shines through in the results. The attention to detail, the friendly service, and the relaxed atmosphere make every visit a pleasure.</p>
                <span>Daniel Z</span>
            </div>
            <div className="client-div">
                <div className="client-apostrophe">&#39;&#39;</div>
                <p>I've been going to this barber shop for years, and I wouldn't trust anyone else with my hair. The barbers here are true artists, and their attention to detail is unparalleled. I always leave the shop feeling confident and fresh!</p>
                <span>Antoan K</span>
            </div>
            <div className="client-div">
                <div className="client-apostrophe">&#39;&#39;</div>
                <p>I recently tried out this barber shop, and I was blown away by the level of skill and professionalism. The barber took the time to understand exactly what I wanted and delivered beyond my expectations. The hot towel shave was a luxurious treat, and the quality of the grooming products used was evident.</p>
                <span>Nikolay S</span>
            </div>
        </div>
    </div>
  )
}
