import Info from 'feature/Detail/Info/Info'
import Body from 'feature/Detail/Body/Body'
import Foot from 'components/Foot'

export default function Detail() {
  return (
    <>
      <div className="sm:mx-auto sm:w-[1531px]">
        <div className="bg-gray pb-10 -sm:px-2">
          <div className="container">
            <div className="flex flex-col gap-10">
              <div className="bg-white ">
                <Info />
              </div>
              <div className="bg-white">
                <Body />
              </div>
            </div>
          </div>
          <div className="line" />
          <Foot />
        </div>
      </div>
    </>
  )
}
