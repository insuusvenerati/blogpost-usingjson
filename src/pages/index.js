import { graphql } from "gatsby"
import Img from "gatsby-image"
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Project = ({
  projectImage,
  projectName,
  projectCoolness,
  projectEmoji,
}) => (
  <div style={{ maxWidth: 350 }}>
    <Img fluid={projectImage} />
    <div>
      <h3>Name: {projectName}</h3> <h3>Coolness: {projectCoolness}</h3>{" "}
      <h3>Emoji: {projectEmoji}</h3>{" "}
    </div>
  </div>
)

const IndexPage = ({ data }) => {
  const { allProjectsJson } = data

  return (
    <Layout>
      <SEO title="Home" />
      {allProjectsJson.edges.map(project => {
        const { node } = project
        return (
          <Project
            projectCoolness={node.coolness}
            projectEmoji={node.emoji}
            projectImage={node.image.fluid}
            projectName={node.name}
          />
        )
      })}
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query Projects {
    allProjectsJson {
      edges {
        node {
          coolness
          emoji
          id
          image {
            fluid(maxWidth: 350, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
          name
        }
      }
    }
  }
`
