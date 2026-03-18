export default function ButtonAlert({
  link,
  icon,
  label,

  padding,
  className,
  bgClass,
}) {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={link}
      className={`${className}
        relative overflow-hidden inline-flex items-center justify-center p-2
       tablet1:p-4
        rounded-full text-lg transition-all hover:scale-105
      `}
    >
      <span className="relative z-10 flex items-center gap-3">
        {icon}
        {label}
      </span>
    </a>
  )
}
