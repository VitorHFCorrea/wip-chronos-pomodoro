type LinkProps = {
  children: string
}

export function Link({ children }: LinkProps) {
  return (
    <a className='text-sm text-muted hover:text-default transition duration-200 hover:cursor-pointer'>
      {children}
    </a>
  )
}
