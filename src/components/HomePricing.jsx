import React,{useRef,useEffect} from 'react'

export default function HomePricing() {

  return (
    <div className="home-pricing">
        <h3>Pricing</h3>
        <div className="pricing-grid">
            <div className="pricing-image">
                <img src="/pricing-image.jpg" alt="" />
            </div>
            <div className="pricing">
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
