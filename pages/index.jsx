import React from 'react'

const Index = () => {
  return (
    <>
      <h1>Hola Platzi!</h1>
      <p>Bienvenido al curso de Next.js</p>

      <img src="/images/platzi-logo.png" alt="Platzi"/>

      <style jsx>{`
        h1 {
          color: red;
        }

        :global(p) {
          color: green;
        }

        img {
          max-width: 50%;
          display: block;
          margin: 0 auto;
        }
      `}
      </style>

      <style jsx global>{`
        body {
          background: white;
        }
      `}</style>
    </>
  )
}

export default Index
