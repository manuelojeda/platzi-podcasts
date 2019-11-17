import React from 'react'

const PodcastsGrid = ({ children }) => {
  return (
    <>
      <div className="channels">
        { children }
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

export default PodcastsGrid
