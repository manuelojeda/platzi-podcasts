import React from 'react'
import { withRouter } from 'next/router'
import axios from 'axios'
import ChannelGrid from '../components/ChannelGrid'
import Layout from '../components/Layout'

const Index = ({ channels }) => {
  return (
    <>
      <Layout title="Podcasts" SeoTitle="Platzi Podcasts - Index">
        <ChannelGrid channels={channels} />
      </Layout>

      <style jsx global>{`
        body {
          margin: 0;
          font-family: system-ui;
          background: white;
        }
      `}</style>
    </>
  )
}

Index.getInitialProps = async () => {
  const response = await axios({
    url: 'https://api.audioboom.com/channels/recommended'
  })

  let channels = await response.data.body

  return {
    channels
  }
}

export default withRouter(Index)
