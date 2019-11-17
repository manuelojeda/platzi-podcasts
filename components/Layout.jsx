import React from 'react'
import Link from 'next/link'
import { Helmet } from 'react-helmet'

const Layout = ({ title, SeoTitle, children }) => {
  return (
    <>
      <Helmet>
        <title>{SeoTitle}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      </Helmet>
      <header>
        <Link href="/">
          <a>
            {title}
          </a>
        </Link>
      </header>
      {
        children
      }

      <style jsx>{`
        header {
          color: #fff;
          background: #8756ca;
          text-align: center;
        }
        a {
          padding: 15px;
          color: #fff;
          text-decoration: none;
          font-weight: 500;
          width: 100%;
          display: block;
        }
      `}</style>
    </>
  )
}

export default Layout
