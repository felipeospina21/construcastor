import React from "react"
import { Text, Stack, Link, Heading } from "@chakra-ui/react"
import { graphql, Link as GatsbyLink } from "gatsby"
import Hero from "../components/Hero"
import SEO from "../components/seo"

export default function Catalogo({ data }) {
  const {
    allMarkdownRemark: { edges },
  } = data
  const brands = [...edges].sort(sortByTitle)
  return (
    <>
      <SEO title="Catálogo" />
      <Hero
        src="s2.jpg"
        alt="imagen de portada"
        maxH="400px"
        overflow="hidden"
      />
      <Heading as="h1" textAlign="center" my="1rem">
        Catálogo
      </Heading>
      <Text textAlign="center">Conoce nuestros principales aliados</Text>
      <Stack maxW="50%" mx="auto" my="1rem" alignItems="flex-start">
        {brands.map((elem, idx) => {
          const {
            node: { frontmatter, fields },
          } = elem
          return (
            <Link as={GatsbyLink} to={fields.slug} key={idx} color="brand.blue">
              {frontmatter.title}
            </Link>
          )
        })}
      </Stack>
    </>
  )
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            categories
            gallery
            templateKey
            title
            brandLogo
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

function sortByTitle(a, b) {
  const titleA = a.node.frontmatter.title
  const titleB = b.node.frontmatter.title

  if (titleA < titleB) return -1
  if (titleA > titleB) return 1
  return 0
}
