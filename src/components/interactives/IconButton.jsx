export default function IconButton(props) {
  const { icon, label, ariaLabel, className } = props

  return (
    <button
      className={`${className} w-10 h-10 rounded-full bg-primaryLight/10 hover:scale-105 transition-all duration-500 flex items-center justify-center`}
      aria-label={ariaLabel}
    >
      <div className="flex items-center text-center gap-[10px]">
        <div className="flex flex-col text-colorBlack justify-end">{icon}</div>
      </div>
    </button>
  )
}
