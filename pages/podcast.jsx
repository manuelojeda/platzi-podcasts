import React from 'react'
import axios from 'axios'
import Link from 'next/link'
import Layout from '../components/Layout'
import { withRouter } from 'next/router'

const Podcast = ({ clip }) => {
  return (
    <>
      <Layout SeoTitle={`${clip.title} una producción de ${clip.channel.title} - Platzi Podcast`}>
        <div className='modal'>
          <div className='clip'>
            <nav>
              <Link href={`/channel?id=${clip.channel.id}`}>
                <a className='close'>&lt; Volver</a>
              </Link>
            </nav>

            <picture>
              <div style={{ backgroundImage: `url(${clip.urls.image || clip.channel.urls.logo_image.original})` }} />
            </picture>

            <div className='player'>
              <h3>{ clip.title }</h3>
              <h6>{ clip.channel.title }</h6>
              <audio controls autoPlay={true}>
                <source src={clip.urls.high_mp3} type='audio/mpeg' />
              </audio>
            </div>
          </div>
        </div>

        <style jsx>{`
          nav {
            background: none;
          }
          nav a {
            display: inline-block;
            padding: 15px;
            color: white;
            cursor: pointer;
            text-decoration: none;
          }
          .clip {
            display: flex;
            height: 100%;
            flex-direction: column;
            background: #8756ca;
            color: white;
          }
          picture {
            display: flex;
            align-items: center;
            justify-content: center;
            flex: 1 1;
            flex-direction: column;
            width: auto;
            padding: 10%;
          }
          picture div {
            width: 100%;
            height: 100%;
            background-position: 50% 50%;
            background-size: contain;
            background-repeat: no-repeat;
          }
          .player {
            padding: 30px;
            background: rgba(0,0,0,0.3);
            text-align: center;
          }
          h3 {
            margin: 0;
          }
          h6 {
            margin: 0;
            margin-top: 1em;
          }
          audio {
            margin-top: 2em;
            width: 100%;
          }

          .modal {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 99999;
          }
        `}</style>

        <style jsx global>{`
        body {
          margin: 0;
          font-family: system-ui;
          background: white;
        }
      `}</style>
      </Layout>
      
    </>
  )
}

Podcast.getInitialProps = async ({ query }) => {
  const ID = query.id
  const RESPONSE = await axios({
    url: `https://api.audioboom.com/audio_clips/${ID}.mp3`
  })
  const clip = await RESPONSE.data.body.audio_clip

  return {
    clip
  }
}

export default withRouter(Podcast)
