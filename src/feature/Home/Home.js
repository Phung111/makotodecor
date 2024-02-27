import Head from 'feature/Home/Head/Head'
import Body from 'feature/Home/Body/Body'
import Foot from 'components/Foot'

import React, { useEffect } from 'react'

export default function Home() {
  return (
    <>
      <div className="sm:mx-auto sm:w-[1530px]">
        <div className="flex flex-col gap-5 sm:gap-10">
          <Head />
          <Body />
          <Foot />
        </div>
      </div>
    </>
  )
}
