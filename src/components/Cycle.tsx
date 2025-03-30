type CycleProps = {
  className?: string
}

export function Cycle({ className }: CycleProps){
  return <div className={`w-6 h-6 rounded-full ${className}`} />
}