import { History, House, Settings, Sun, TimerIcon } from 'lucide-react'
import { Button } from './Button'

// type HeadingProps = {
//   children: React.ReactNode
// }

export function Heading() {
  return (
    <div className='flex flex-col items-center p-5'>
      <div className='flex flex-col items-center my-11 text-primary'>
        <button><TimerIcon className='w-16 h-16'/></button>
        <h1 className='text-[2.70rem] font-bold '>
          Chronos
        </h1>
      </div>
      <div className='flex gap-4'>
        <Button> <House/> </Button>
        <Button> <History/> </Button>
        <Button> <Settings/> </Button>
        <Button> <Sun/> </Button>
      </div>
    </div>
  )
}
