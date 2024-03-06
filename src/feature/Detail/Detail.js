import Nav from 'components/Nav'
import Info from 'feature/Detail/Info/Info'
import Body from 'feature/Detail/Body/Body'
import Foot from 'components/Foot'
import { useEffect } from 'react'

export default function Detail() {
  useEffect(() => {
    window.scrollTo(0, 0) // Cuộn trang về đầu khi component được mount
  }, [])

  return (
    <>
      <div className="contain px-10">
        <div className="flex flex-col gap-5">
          <div id="head">
            <Nav />
          </div>
          <div className="bg-white ">
            <Info />
          </div>
          <div className="bg-white">
            <Body />
          </div>
        </div>
      </div>
      <Foot />
    </>
  )
}
