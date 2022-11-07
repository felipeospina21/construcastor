import React from "react"
import { graphql } from "gatsby"
import BrandDetail from "../features/catalogo/BrandDetail"

export default function brandsTemplate({ data }) {
  const { markdownRemark: frontmatter } = data

  return <BrandDetail data={frontmatter} />
}

export const pageQuery = graphql`
  query brandsCollection($title: String!) {
    markdownRemark(frontmatter: { title: { eq: $title } }) {
      frontmatter {
        title
        gallery
        templateKey
        categories
        brandLogo
      }
    }
  }
`
