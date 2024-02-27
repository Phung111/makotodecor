export default function Part({ title, children }) {
  return (
    <>
      <div className="flex gap-2 text-lg capitalize text-black/70">
        <div className="flex h-10 w-[110px] shrink-0 items-center">{title}</div>
        <div className="flex h-full items-center">{children}</div>
      </div>
    </>
  )
}
