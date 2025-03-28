import { FocusSection } from './components/FocusSection'
import { Footer } from './components/Footer'
import { Heading } from './components/Heading'

export function App() {
  return (
    <div className=' flex flex-col w-screen h-screen bg-gradient-to-br from-mygray-900 to-mygray-700 '>
      <Heading />
      <FocusSection />
      <Footer />
    </div>
  )
}
