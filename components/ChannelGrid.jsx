import React from 'react'
import ChannelButton from './ChannelButton'

const ChannelGrid = ({ channels }) => {
  return (
    <>
      <div className="channels">
        {
          channels.map((channel) => (
            <ChannelButton key={channel.id} {...channel} />
          ))
        }
      </div>

      <style jsx>{`
        .channels {
          display: grid;
          grid-gap: 15px;
          padding: 15px;
          grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
        }
      `}</style>
    </>
  )
}

export default ChannelGrid
