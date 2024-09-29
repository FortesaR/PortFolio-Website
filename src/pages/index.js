import * as React from "react"
import Layout from "../Layout/layout"
import Seo from "../components/seo"
import AboutMeContent from "../components/AboutMe/AboutMeContent" 
import Projekte from "../components/Project/Projekte"
import ContactMe from "../ContactMe/ContactMe"

const IndexPage = () => (

  <Layout>
    <Seo title="Home" />
    <AboutMeContent />
    <Projekte />
    <ContactMe />
  </Layout>
)


export default IndexPage
