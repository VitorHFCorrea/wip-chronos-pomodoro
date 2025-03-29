type CicleProps = {
  className?: string
}

export function Cicle({className}: CicleProps) {
  return (
    <div className={`w-6 h-6 rounded-full ${className}`}>
    </div>
  )
}