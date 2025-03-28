type LinkProps = {
  children: React.ReactNode
}

export function Link({ children }: LinkProps) {
  return (
    <a
      className='text-mygray-300 hover:text-default transition duration-200 hover:scale-102 hover:cursor-pointer'
    >
      {children}
    </a>
  )
}
