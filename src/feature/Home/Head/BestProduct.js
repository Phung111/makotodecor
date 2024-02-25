export default function BestProduct() {
  return (
    <>
      <div className="flex cursor-pointer gap-10 px-10 transition hover:scale-[107%]">
        <div className="relative flex h-[180px] w-[180px] shrink-0 rounded-full bg-red ">
          <img className="absolute -left-10 -top-10 h-[200px] w-[200px] object-contain" src={require(`assets/images/daruma.png`)} alt="logo" />
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-2xl font-semibold capitalize underline decoration-red decoration-4 underline-offset-8">best product</p>
          <p className="font-semibold uppercase">name product</p>
          <p className="text-black/50">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores neque cupiditate esse maiores necessitatibus tempora</p>
        </div>
      </div>
    </>
  )
}
