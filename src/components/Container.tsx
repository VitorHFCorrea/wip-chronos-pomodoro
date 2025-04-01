type ContainerProps = {
  children: React.ReactNode
}

export function Container({ children }: ContainerProps) {
  return (
    <div className='max-w-[98rem] m-auto'>
      <div className='mx-[3.2rem]'>{children}</div>
    </div>
  )
}
