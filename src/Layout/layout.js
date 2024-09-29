import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Header from "../components/Header/header"
import "./layout.css"
import Footer from "../components/Footer/Footer"

const Layout = ({children}) => {
  
  return (
    <div>
      <div className="layout">
        <Header/>
        <div className="content">
          {children}
        </div>
      </div>

      
      <footer>
       <Footer/>
      </footer>
    </div>
  )
}

export default Layout
