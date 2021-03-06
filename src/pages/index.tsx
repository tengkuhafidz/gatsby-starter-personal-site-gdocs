import React from 'react'
import Home from '../components/Home'
import Layout from '../components/Layouts'
import SEO from '../components/seo'

const HomePage = () => (
  <div>
    <SEO />
    <Layout>
      <Home />
    </Layout>
  </div>
)

export default HomePage
