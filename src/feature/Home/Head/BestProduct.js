export default function BestProduct() {
  return (
    <>
      <div className="flex cursor-pointer gap-5 px-2 transition hover:scale-[107%] sm:gap-10 sm:px-0">
        <div className="relative h-40 w-40 shrink-0 sm:h-60 sm:w-60">
          <div className="absolute bottom-0 right-0 aspect-square h-[85%] rounded-full bg-red" />
          <img className="absolute left-0 top-0 h-[85%] object-contain" src={require(`assets/images/daruma.png`)} alt="logo" />
        </div>
        <div className="flex flex-col justify-center gap-3">
          <p className="text-2xl font-semibold capitalize underline decoration-red decoration-4 underline-offset-8">best product</p>
          <p className="font-semibold uppercase">name product</p>
          <p className="line-clamp-3 text-black/50">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores neque cupiditate esse maiores necessitatibus tempora</p>
        </div>
      </div>
    </>
  )
}
