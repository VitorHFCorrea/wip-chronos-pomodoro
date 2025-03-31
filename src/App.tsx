import { FocusSection } from './components/FocusSection'
import { Footer } from './components/Footer'
import { Heading } from './components/Heading'

export function App() {
  return (
    <div className='flex justify-center w-full h-full bg-gradient-to-br from-mygray-900 to-mygray-700 transition duration-300'>
      <div className='max-w-[98rem] min-h-screen flex flex-col overflow-hidden p-[3.2rem] '>
        <Heading />
        <FocusSection />
        <Footer />
      </div>
    </div>
  )
}
