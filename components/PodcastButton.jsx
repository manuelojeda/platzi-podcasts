import React from 'react'
import { Link } from '../routes'
import slug from '../helpers/slug'

const PodcastButton = (props) => {
  const clip = props
  return (
    <>
      <Link
        route='podcast'
        params={{
          slugChannel: slug(clip.channel.title),
          idChannel: clip.channel.id,
          slug: slug(clip.title),
          id: clip.id
        }}
      >
        <a className="podcast-link">
          <div className="podcast">{ clip.title }</div>
        </a>
      </Link>

      <style jsx>{`
        a.podcast-link {
          text-decoration: none;
          transition: all ease .2s;
        }
        a.podcast-link > div {
          transition: all ease .2s;
        }
        a.podcast-link:hover > div {
          color: #fff;
          background: #8756ca;
        }

        .podcast {
          display: block;
          text-decoration: none;
          color: #333;
          padding: 15px;
          border-bottom: 1px solid rgba(0,0,0,0.2);
          cursor: pointer;
        }
        .podcast:hover {
          color: #000;
        }
        .podcast h3 {
          margin: 0;
        }
        .podcast .meta {
          color: #666;
          margin-top: 0.5em;
          font-size: 0.8em;
        }
      `}</style>
    </>
  )
}

export default PodcastButton
