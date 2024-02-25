import Head from 'feature/Home/Head/Head'
import Body from 'feature/Home/Body/Body'
import Foot from 'components/Foot'

import React, { useEffect } from 'react'

export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-10">
        <Head />
        <Body />
        <Foot />
      </div>
    </>
  )
}
