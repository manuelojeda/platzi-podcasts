import React from 'react'

const About = () => {
  return (
    <>
      <div className="content-wrapper">
        <div className="wrapper">
          <img src="/images/platzi-logo.png" alt="Platzi" className="logo" />
          <div className="wrapper">
            <h3>Creado por Manuel Ojeda</h3>
            <p>Curso de Next.JS de Platzi</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .content-wrapper {
          width: 100%;
          margin: 0 auto;
          text-align: center;
          height:100%;
          display:flex;
          justify-content:center;
          align-items:center;
        }

        .wrapper {
          width: 100%;
          display: block;
        }

        .logo {
          max-width: 30%;
          width: 100%;
          display: block;
          margin: 0 auto;
          margin-bottom: 25px;
        }
      `}</style>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
        body {
          font-family: 'Roboto', sans-serif;
          background-color: #244255;
          color: #ffffff;
        }
        html, body {
          height:100%;
          padding:0;
          margin:0;
        }
        *{
          box-sizing:border-box;
        }
        #__next {
          height: 100%;
        }
      `}</style>
    </>
  )
}

export default About
