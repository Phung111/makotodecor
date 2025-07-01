import { useState } from 'react'

export default function CalculateFabric() {
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)
  const [pieces, setPieces] = useState(1)

  const area = (width * height) / 10000
  const isHorizontal = height * 2 < width

  const type = isHorizontal ? 'Ngang' : 'Dọc'

  let sizeCategory = ''
  let price = 0

  if (type === 'Ngang') {
    price = Math.max(530000, area * 200000 + pieces * 30000 + 500000)
  } else {
    if (area < 1) {
      sizeCategory = 'Size nhỏ'
      price = 330000 + area * 200000 + 200000
    } else if (width < 140 && height < 180) {
      sizeCategory = 'Size vừa'
      price = area * 200000 + 500000
    } else {
      sizeCategory = 'Size lớn'
      price = 330000 + area * 200000 + 500000
    }
  }

  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="flex h-[450px] items-center justify-center">
        <div className="border-gray-200 w-full max-w-md rounded-xl border bg-white p-8 shadow-lg">
          <h2 className="mb-6 text-center text-2xl font-bold">Tính Giá Rèm Makoto</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <label className="w-32 font-medium">Chiều ngang (cm):</label>
              <input type="number" value={width} onChange={(e) => setWidth(+e.target.value)} className="border-gray-300 flex-1 rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" />
            </div>
            <div className="flex items-center gap-3">
              <label className="w-32 font-medium">Chiều cao (cm):</label>
              <input type="number" value={height} onChange={(e) => setHeight(+e.target.value)} className="border-gray-300 flex-1 rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" />
            </div>
            <div className="flex items-center gap-3">
              <label className="w-32 font-medium">Số mảnh:</label>
              <input type="number" value={pieces} onChange={(e) => setPieces(+e.target.value)} className="border-gray-300 flex-1 rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" />
            </div>
          </div>
          <div className="mt-6 space-y-1 text-center">
            <p>
              Loại rèm: <strong>{type}</strong>
            </p>
            {type === 'Dọc' && (
              <p>
                Phân loại: <strong>{sizeCategory}</strong>
              </p>
            )}
            <p>
              Diện tích: <span className="font-semibold">{area.toFixed(3)} m²</span>
            </p>
            <p className="mt-2 text-xl font-bold text-green-600">Giá bán: {price.toLocaleString()} VND</p>
          </div>
        </div>
      </div>
    </div>
  )
}
