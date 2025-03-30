type ButtonProps = {
  icon: React.ReactNode
  className?: string
}

export function Button({ icon, className = 'bg-primary && text-over-primary' }: ButtonProps) {
  return (
    <button
      className={`rounded-lg p-3 hover:cursor-pointer hover:-translate-y-1 hover:brightness-80 duration-200 ${className}`}
    >
      {icon}
    </button>
  )
}
