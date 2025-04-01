type ButtonProps = {
  icon: React.ReactNode
  title: string
  className?: string
  onClick?: () => void
}

export function Button({ icon, className = 'bg-primary && text-over-primary', title, onClick }: ButtonProps) {
  return (
    <button
      title={title}
      onClick={onClick}
      className={`rounded-lg p-3 hover:cursor-pointer hover:-translate-y-1 hover:brightness-80 duration-200 ${className}`}
    >
      {icon}
    </button>
  )
}
