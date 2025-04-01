import { Home } from './pages/Home'

export function App() {
  return (
    <div className='flex flex-col bg-gradient-to-br from-mygray-900 to-mygray-700 transition duration-300 
    py-8 sm:py-12 lg:py-[3.2rem] min-w-screen min-h-screen'>
      <Home/>
    </div>
  )
}
