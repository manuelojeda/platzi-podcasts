import React from 'react'
import fetch from 'isomorphic-fetch'
import { withRouter } from 'next/router'
import Layout from '../components/Layout'
import LinkButton from '../components/LinkButton'
import ChannelGrid from '../components/ChannelGrid'
import PodcastButton from '../components/PodcastButton'
import Error from './_error'

const Channel = ({ channel, series, audios, statusCode }) => {
  if ( statusCode !== 200 ) {
    return <Error statusCode={statusCode} />
  }
  return (
    <>
      <Layout title="Podcasts" SeoTitle={`Plati Podcast - ${channel.title}`}>
        <div className="banner" style={{ backgroundImage: `url(${channel.urls.banner_image.original})` }} />

        <LinkButton url="/" />
        <h1>{ channel.title }</h1>

        { series.length > 0 &&
          <div>
            <h2>Series</h2>
            <ChannelGrid channels={series} />
          </div>
        }

        <h2>Ultimos Podcasts</h2>
        { audios.map((clip) => (
          <PodcastButton key={clip.id} {...clip}  />
        ))}
      </Layout>

      <style jsx>{`
        .banner {
          width: 100%;
          padding-bottom: 25%;
          background-position: 50% 50%;
          background-size: cover;
          background-color: #aaa;
        }

        h1 {
          font-weight: 600;
          padding: 15px;
        }
        h2 {
          padding: 5px;
          font-size: 0.9em;
          font-weight: 600;
          margin: 0;
          text-align: center;
        }
      `}</style>

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

Channel.getInitialProps = async ({ query, res }) => {
  const CHANNEL_ID = query.id
  try {
    const [resChannel, resSeries, resAudios] = await Promise.all([
      fetch(`https://api.audioboom.com/channels/${CHANNEL_ID}`),
      fetch(`https://api.audioboom.com/channels/${CHANNEL_ID}/child_channels`),
      fetch(`https://api.audioboom.com/channels/${CHANNEL_ID}/audio_clips`)
    ])

    if( resChannel.status >= 400 ) {
      res.statusCode = resChannel.status
      return {
        channel: null,
        audios: null,
        series: null,
        statusCode: resChannel.status
      }
    }

    const dataChannel = await resChannel.json()
    const channel = dataChannel.body.channel

    const dataAudios = await resAudios.json()
    const audios = dataAudios.body.audio_clips

    const dataSeries = await resSeries.json()
    const series = dataSeries.body.channels

    return {
      channel,
      audios,
      series,
      statusCode: 200
    }
  } catch (error) {
    return {
      channel: null,
      audios: null,
      series: null,
      statusCode: 503
    }
  }
}

export default withRouter(Channel)
