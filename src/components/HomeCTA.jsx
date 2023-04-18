import React from 'react'
import {Link} from "react-router-dom"

export default function HomeCTA() {
  return (
    <div className="home-cta">
        <div className="home-cta-helper">
            <p>Come and get serviced without waiting</p>
            <Link to="/contacts">Choose a Barbershop</Link>
        </div>
    </div>
  )
}
