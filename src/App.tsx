import { FocusSection } from './components/FocusSection'
import { Footer } from './components/Footer'
import { Heading } from './components/Heading'


export function App() {
  return (
    <div className=' flex flex-col min-w-screen min-h-screen overflow-hidden bg-gradient-to-br bg-att from-mygray-900 to-mygray-700 '>
      <Heading />
      <FocusSection />
      <Footer />
    </div>
  )
}
