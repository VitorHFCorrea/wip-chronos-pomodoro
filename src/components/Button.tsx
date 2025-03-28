type ButtonProps = {
  children: React.ReactNode;
  className?: string;
}

export function Button({children, className}: ButtonProps) {
  return (
    <button className={`bg-primary text-mygray-900 rounded-lg p-3 hover:cursor-pointer hover:-translate-y-1 hover:brightness-80 duration-200 ${className}`}>
      {children}
    </button>
  )
}