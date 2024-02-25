import Info from 'feature/Detail/Info/Info'
import Body from 'feature/Detail/Body/Body'
import Foot from 'components/Foot'

export default function Detail() {
  return (
    <>
      <div className="bg-gray py-10">
        <div className="container">
          <div className="flex flex-col gap-10">
            <div className="bg-white">
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
    </>
  )
}
