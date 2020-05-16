import React from 'react'

const Layout = ({ children }) => {
  return (
    <div className="text-white box-border w-full h-full">
      {/*<div className="absolute top-0 w-full h-full bg-center bg-cover"*/}
      {/*     style={{*/}
      {/*       backgroundImage: "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80')"*/}
      {/*     }}>*/}
      {/*  <span id="blackOverlay" className="w-full h-full absolute opacity-75 bg-black"></span>*/}
      {/*</div>*/}
      { children }
    </div>
  )
}

export default Layout
