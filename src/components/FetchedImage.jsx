import React, { useMemo } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import PropTypes from "prop-types"

export default function FetchedImage({ src, gatsbyImageData, ...rest }) {
  const data = useStaticQuery(graphql`
    query {
      images: allFile(filter: { absolutePath: { regex: "/static/img/" } }) {
        edges {
          node {
            relativePath
            extension
            publicURL
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  `)

  const match = useMemo(
    () =>
      data.images.edges.find(({ node }) => src === "/img/" + node.relativePath),
    [data, src]
  )

  if (!match) return null

  const { node: { childImageSharp, publicURL, extension } = {} } = match
  // const image = getImage()

  if (extension === "svg" || !childImageSharp) {
    return <img src={publicURL} alt="brand logo" {...rest} />
  }

  return (
    <GatsbyImage
      {...rest}
      image={childImageSharp?.gatsbyImageData}
      objectFit="contain"
    />
  )
}

FetchedImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
}
