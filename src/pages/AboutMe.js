import React, { useState, useEffect } from "react"
import Layout from "../Layout/layout"
import AboutMeContent from "../components/AboutMe/AboutMeContent"
import myPic from "../images/Foto.jpg"

import Experience from "../components/Experience/Experience"

const AboutMe = () => {
  return (
    <Layout>
      <AboutMeContent />
      <Experience />
    </Layout>
  )
}

export default AboutMe
