import { Container } from './components/Container'
import { Footer } from './components/Footer'
import { Heading } from './components/Heading'

type MainTemplateProps = {
  children: React.ReactNode
}

export function MainTemplate({ children }: MainTemplateProps) {
  return (
    <div
      className='flex flex-col bg-gradient-to-br from-mygray-900 to-mygray-700 transition duration-300 
    py-8 sm:py-12 lg:py-[3.2rem] min-w-screen min-h-screen'
    >
      <Container>
        <Heading />
      </Container>

      {children}

      <Container>
        <Footer />
      </Container>
    </div>
  )
}
