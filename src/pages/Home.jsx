import React from 'react'
import HomeHero from '../components/HomeHero'
import HomeBrag from '../components/HomeBrag'
import HomeServices from '../components/HomeServices'
import HomePricing from '../components/HomePricing'
import HomeClients from '../components/HomeClients'
import HomeCTA from '../components/HomeCTA'

export default function Home() {
  return (
    <div className="home">
      <HomeHero />
      <HomeBrag />
      <HomeServices />
      <HomePricing />
      <HomeClients />
      <HomeCTA />
    </div>
  )
}
