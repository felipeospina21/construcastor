import React from "react"
import SEO from "../components/seo"
import Image from "../components/Image"
import HowItWorks from "../components/HowItWorks"
import About from "../components/About"
import { Box } from "@chakra-ui/react"
import OtherServices from "../components/OtherServices"
import ImgCarousel from "../components/ImgCarousel"

// import '@ptkdev/webcomponent-instagram-widget';

const images = ["1.jpg", "2.jpg", "/images/3.jpg"]

const IndexPage = () => {
  return (
    <>
      <SEO title="Home" />
      <Box w="100%" maxH="80vh" maxW="1800px" overflow="hidden" m="0 auto">
        <Image src="panoramica_auto.jpg" alt="Imagen de restaurante" />
      </Box>
      <About />
      <HowItWorks />
      <ImgCarousel />
      <OtherServices />

      {/* <instagram-widget username="@buhoentrepinos" items-limit={6} grid="responsive"></instagram-widget> */}
    </>
  )
}

export default IndexPage
