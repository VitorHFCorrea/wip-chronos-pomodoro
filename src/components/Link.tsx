type LinkProps = {
  children: string
}

export function Link({ children }: LinkProps) {
  return (
    <a className='text-[0.75rem] text-muted hover:text-default transition duration-200 hover:cursor-pointer'>
      {children}
    </a>
  )
}
