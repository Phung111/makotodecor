export default function Description({ children }) {
  return (
    <>
      <textarea className="w-full shrink-0 !resize-none border-[0.5px] border-black/20 bg-primary p-2 text-white" rows="6" value={children} readOnly></textarea>
    </>
  )
}
