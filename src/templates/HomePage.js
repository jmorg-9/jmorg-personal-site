import React from 'react'
import { graphql } from 'gatsby'

import PageHeader from '../components/PageHeader'
import Content from '../components/Content'
import Layout from '../components/Layout'
import About from '../components/MyComponents/About'

// Export Template for use in CMS preview
export const HomePageTemplate = ({
  title,
  name,
  subtitle,
  featuredImage,
  headshot,
  body,
  facebook,
  linkedin,
  github
}) => (
  <main className="Home">
    <PageHeader
      large
      title={title}
      name={name}
      subtitle={subtitle}
      backgroundImage={featuredImage}
      facebook={facebook}
      linkedin={linkedin}
      github={github}
    />

    <section className="section">
      <div className="container">
        <About headshot={headshot} />
      </div>
    </section>

    <section className="section">
      <div className="container">Resume section</div>
    </section>

    <section className="section">
      <div className="container">Blog section</div>
    </section>
  </main>
)

// Export Default HomePage for front-end
const HomePage = ({ data: { page } }) => (
  <Layout meta={page.frontmatter.meta || false}>
    <HomePageTemplate {...page} {...page.frontmatter} body={page.html} />
  </Layout>
)

export default HomePage

export const pageQuery = graphql`
  ## Query for HomePage data
  ## Use GraphiQL interface (http://localhost:8000/___graphql)
  ## $id is processed via gatsby-node.js
  ## query name must be unique to this file
  query HomePage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      html
      frontmatter {
        title
        name
        subtitle
        featuredImage
        headshot
        facebook
        linkedin
        github
      }
    }
  }
`
