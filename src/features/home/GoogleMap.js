import React from "react"
import { AspectRatio, Heading, Center } from "@chakra-ui/react"

const GoogleMap = () => {
  return (
    <>
      <Center m="1rem auto">
        <Heading as="h1" size="xl">
          Visítanos
        </Heading>
      </Center>
      <AspectRatio
        ratio={[9 / 16, 21 / 9]}
        maxW="1100px"
        maxH="620px"
        m="2rem auto"
        border="4px double lightgray"
        borderRadius="5px"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1983.0533588361466!2d-75.57440379277469!3d6.249666528386396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4429ca6bbf668f%3A0xb139723387af2a7e!2sConstrucastor!5e0!3m2!1ses-419!2sco!4v1625952892180!5m2!1ses-419!2sco"
          alt="mapa de cómo llegar a Construcastor"
          title="Mapa"
        />
      </AspectRatio>
    </>
  )
}

export default GoogleMap
