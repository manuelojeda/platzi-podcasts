import React from 'react'
import Link from 'next/link'

const LinkButton = ({ url }) => {
  return (
    <>
      <Link href={url}>
        <a>
          &lt; Return
        </a>
      </Link>

      <style jsx>{`
        a {
          display: inline;
          position: relative;
          text-decoration: none;
          margin: 15px;
          top: 20px;
          padding: 10px 30px;
          background: #777;
          color: #fff;
          border-radius: 3px;
        }
      `}</style>
    </>
  )
}

export default LinkButton
