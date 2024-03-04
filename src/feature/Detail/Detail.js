import Nav from 'components/Nav'
import Info from 'feature/Detail/Info/Info'
import Body from 'feature/Detail/Body/Body'
import Foot from 'components/Foot'

export default function Detail() {
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
