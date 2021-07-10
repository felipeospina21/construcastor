import React from "react"
import SEO from "../components/seo"
import HowItWorks from "../components/HowItWorks"
import About from "../components/About"
import OtherServices from "../components/OtherServices"
import ImgCarousel from "../components/ImgCarousel"
import GoogleMap from "../components/GoogleMap"
import Hero from "../components/Hero"

const IndexPage = () => {
  return (
    <>
      <SEO title="Inicio" />
      <Hero
        text="Construcastor"
        src="s4.jpg"
        alt="Imagen construcción al atardecer"
      />
      <About />
      {/* <HowItWorks /> */}
      <ImgCarousel />
      {/* <OtherServices /> */}
      <GoogleMap />
    </>
  )
}

export default IndexPage
