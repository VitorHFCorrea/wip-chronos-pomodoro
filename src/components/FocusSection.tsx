import { Button } from './Button'
import { CirclePlay } from 'lucide-react'
import { Cicle } from './Cicle'

export function FocusSection() {
  return (
    <div className='flex flex-col items-center justify-center w-screen'>
      <p className='text-default text-[9.75rem] font-bold my-5'>00:00</p>

      <input
        type='text'
        placeholder='Ex.: Estudar para a prova'
        className='
        w-64 p-2 text-center text-default rounded-lg
        border-b-2 border-primary
        focus:outline-none focus:ring-2 focus:ring-primary 
        placeholder:italic placeholder:text-sm placeholder:text-mygray-400'
      />
      <div className='flex flex-col items-center justify-center w-screen gap-5 my-10'>
        <p className='text-default font-bold'>
          Foque <span className='font-normal'>por </span> 25min
        </p>
        <div className='flex gap-2'>
          <Cicle className='bg-primary'></Cicle>
          <Cicle className='bg-warning'></Cicle>
          <Cicle className='bg-primary'></Cicle>
          <Cicle className='bg-warning'></Cicle>
          <Cicle className='bg-primary'></Cicle>
          <Cicle className='bg-info'></Cicle>
        </div>
      </div>
      <Button className='mb-10'>
        <CirclePlay className='w-60 h-9' />
      </Button>
    </div>
  )
}
