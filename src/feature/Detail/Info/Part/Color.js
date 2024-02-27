import { useState } from 'react'
import Part from 'feature/Detail/Info/Part/Part'
import ButtonColor from 'feature/Detail/Info/Part/ButtonColor'

export default function Color({ array }) {
  const [selectedColor, setSelectedColor] = useState(null)

  const handleColorSelection = (color) => {
    if (selectedColor === color) {
      setSelectedColor(null)
      console.log('Deselect color:', color)
    } else {
      setSelectedColor(color)
      console.log('Select color:', color)
    }
  }
  return (
    <>
      <Part title={'color'}>
        <div className="flex flex-wrap gap-3">
          {array.map((item, index) => (
            <ButtonColor key={index} isSelected={selectedColor === item} onClick={() => handleColorSelection(item)}>
              {item}
            </ButtonColor>
          ))}
          <div className="bg-white"></div>
        </div>
      </Part>
    </>
  )
}
