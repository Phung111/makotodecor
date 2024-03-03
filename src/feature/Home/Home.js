import Head from 'feature/Home/Head/Head'
import Body from 'feature/Home/Body/Body'
import Foot from 'components/Foot'
import Nav from 'components/Nav'

import React, { useEffect } from 'react'

export default function Home() {
  return (
    <>
      <div className="flex flex-col">
        <div className="contain h-screen">
          <div className="px-2 sm:px-10">
            <Nav />
          </div>
          <div className="contain">
            <Head />
          </div>
        </div>

        <div className="mt-5 bg-[url('assets/images/b22.png')]">
          <div className="contain">
            <Body />
          </div>
        </div>

        <Foot />
      </div>
    </>
  )
}
