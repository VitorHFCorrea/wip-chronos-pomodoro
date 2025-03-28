import { Button } from './Button'
import { CirclePlay } from 'lucide-react'

export function FocusSection() {
  return (
    <div className='flex flex-col items-center justify-center w-screen gap-5'>
      <p className='text-default text-[9.75rem] font-bold'>00:00</p>

      <input
        type='text'
        placeholder='Ex.: Estudar para a prova'
        className='text-center text-default border-b-2 border-primary outline-primary rounded-lg w-64 p-2 
        placeholder:italic placeholder:text-sm placeholder:text-mygray-400'
      />
      <div>
        <p className='text-default font-bold mt-5'>
          Foque <span className='font-normal'>por </span> 25min
        </p>
        <div></div>
      </div>
      <Button>
        <CirclePlay className='w-40 h-9' />
      </Button>
    </div>
  )
}
