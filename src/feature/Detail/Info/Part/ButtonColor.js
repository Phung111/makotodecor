export default function ButtonColor({ children, isSelected, onClick }) {
  let baseClass = 'aspect-square rounded-full border-[0.5px] border-black/20 outline-offset-4 outline-primary w-10 h-10'

  let addClass = isSelected ? 'outline' : 'hover:outline'

  let bgColor = 'bg-'

  switch (children) {
    case 'RED':
      bgColor += 'red'
      break
    case 'BLUE':
      bgColor += 'blue-300'
      break
    case 'YELLOW':
      bgColor += 'yellow-300'
      break
    case 'ORANGE':
      bgColor += 'orange-400'
      break
    case 'GREEN':
      bgColor += 'green-500'
      break
    case 'BLACK':
      bgColor += 'black'
      break
    case 'WHITE':
      bgColor += 'white'
      break
    default:
      break
  }

  addClass += ' ' + bgColor

  return (
    <>
      <button className={`${baseClass} ${addClass}`} onClick={onClick} />
      <div className="bg-red" hidden />
      <div className="bg-blue-300" hidden />
      <div className="bg-yellow-300" hidden />
      <div className="bg-orange-400" hidden />
      <div className="bg-green-500" hidden />
      <div className="bg-black" hidden />
      <div className="bg-white" hidden />
    </>
  )
}
