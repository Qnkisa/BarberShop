import React, { useState, useEffect, useRef} from 'react';
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function HomeHero() {

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

  const [backgroundImage, setBackgroundImage] = useState(0);
  const [text, setText] = useState(0);

  const backgroundImages = [
    '/index-hero1.jpg',
    '/index-hero2.jpg',
    '/index-hero3.jpg'
  ];

  const texts = [
    'get a stylish look',
    'the newest haircuts',
    'Multi award winning barbers'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setBackgroundImage((prevImage) => (prevImage + 1) % backgroundImages.length);
      setText((prevText) => (prevText + 1) % texts.length);
    }, 7000);


    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div
      className="home-hero"
      style={{
      position: 'relative',
      height: '100vh',
      overflow: 'hidden'
      }}
      >
      <LazyLoadImage
      src={backgroundImages[backgroundImage]}
      className="home-hero-background"
      style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transform: 'scale(1.1)',
      zIndex: -1
      }}
      />
      <div className="home-hero-blur"></div>
      <div className="home-hero-helper">
          <h1 ref={ref1}>{texts[text]}</h1>
      </div>
    </div>
  );
}