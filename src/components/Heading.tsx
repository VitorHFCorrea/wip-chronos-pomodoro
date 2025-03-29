import { History, House, Settings, Sun, TimerIcon } from 'lucide-react'
import { Button } from './Button'

// type HeadingProps = {
//   children: React.ReactNode
// }

export function Heading() {
  return (
    <div className='flex flex-col items-center mt-10 gap-10'>
      <div className='flex flex-col items-center text-primary cursor-pointer rounded-full'>
        <button>
          <TimerIcon className='w-16 h-16 cursor-pointer'/>
        </button>
        <h1 className='text-[2.70rem] font-bold'>
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
