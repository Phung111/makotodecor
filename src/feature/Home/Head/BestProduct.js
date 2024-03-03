import { Link } from 'react-router-dom'

export default function BestProduct() {
  return (
    <>
      <Link to="/detail">
        <div className="flex cursor-pointer gap-5 sm:gap-10 sm:transition sm:hover:scale-[107%]">
          <div className="relative flex h-40 w-40 shrink-0 items-center justify-center p-5 sm:h-60 sm:w-60">
            <div className="aspect-square h-full w-full rounded-full bg-color1" />
            <img className="absolute left-0 top-0 object-contain" src={require(`assets/images/daruma.png`)} alt="logo" />
          </div>
          <div className="flex flex-col justify-center gap-3">
            <p className="svn_shikimaru text-xl font-semibold uppercase text-[#a8242d] sm:text-5xl">best product</p>
            <div className="h-1 w-1/3 bg-color1"></div>
            <p className="flex gap-2 text-lg font-bold sm:flex-row sm:gap-2 sm:text-4xl">
              <span className="font-semibold uppercase">daruma</span>
              <span className="OTF_Kaisho font-semibold uppercase">だるまさん</span>
            </p>
            <p className="line-clamp-2 text-black/50 sm:line-clamp-4">Daruma Nguyện Ước giấy truyền thống Nhật Bản, một thần vật bùa may mắn truyền thống của Nhật Bản mô phỏng theo Bồ Đề Đạt Ma, người sáng lập ra truyền thống Thiền tông của Phật giáo.</p>
          </div>
        </div>
      </Link>
    </>
  )
}
