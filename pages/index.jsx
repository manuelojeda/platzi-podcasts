import React from 'react'
import { withRouter } from 'next/router'
import axios from 'axios'
import ChannelGrid from '../components/ChannelGrid'
import Layout from '../components/Layout'
import Error from 'next/error'

const Index = ({ channels, statusCode }) => {
  if ( statusCode !== 200 ) {
    return (
      <>
        <Error statusCode={statusCode}/>
      </>
    )
  }
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

Index.getInitialProps = async ({ res }) => {
  try {
    const response = await axios({
      url: 'https://api.audioboom.com/channels/recommended'
    })

    let channels = await response.data.body

    return {
      channels,
      statusCode: 200
    }
  } catch (error) {
    res.statusCode = 503
    return {
      channels: null,
      statusCode: 503
    }
  }
}

export default withRouter(Index)
