import React from 'react'
import { withRouter } from 'next/router'
import axios from 'axios'
import Layout from '../components/Layout'
import LinkButton from '../components/LinkButton'
import ChannelGrid from '../components/ChannelGrid'
import PodcastButton from '../components/PodcastButton'

const Channel = ({ channel, series, audios }) => {
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

Channel.getInitialProps = async ({query}) => {
  const CHANNEL_ID = query.id
  const [resChannel, resSeries, resAudios] = await Promise.all([
    axios(`https://api.audioboom.com/channels/${CHANNEL_ID}`),
    axios(`https://api.audioboom.com/channels/${CHANNEL_ID}/child_channels`),
    axios(`https://api.audioboom.com/channels/${CHANNEL_ID}/audio_clips`)
  ])

  const channel = await resChannel.data.body.channel
  const audios = await resAudios.data.body.audio_clips
  const series = await resSeries.data.body.channels

  return {
    channel,
    audios,
    series
  }
}

export default withRouter(Channel)
