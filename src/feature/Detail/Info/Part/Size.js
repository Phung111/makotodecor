import { useState } from 'react'
import Part from 'feature/Detail/Info/Part/Part'
import ButtonSize from 'feature/Detail/Info/Part/ButtonSize'

export default function Size({ array }) {
  const [selectedSize, setSelectedSize] = useState(null)

  const handleSizeSelection = (size) => {
    if (selectedSize === size) {
      setSelectedSize(null)
      console.log('Deselect size:', size)
    } else {
      setSelectedSize(size)
      console.log('Select size:', size)
    }
  }

  return (
    <>
      <Part title={'size'}>
        <div className="flex w-full flex-wrap gap-2">
          {array.map((item, index) => (
            <ButtonSize key={index} isSelected={selectedSize === item} onClick={() => handleSizeSelection(item)}>
              {item}
            </ButtonSize>
          ))}
        </div>
      </Part>
    </>
  )
}
