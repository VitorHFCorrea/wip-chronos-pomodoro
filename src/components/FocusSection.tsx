import { CirclePlayIcon } from 'lucide-react'
import { Button } from './Button'
import { Cycles } from './Cycles'
import { Input } from './Input'
import { CountDown } from './CountDown'

export function FocusSection() {
  return (
    <div className='flex flex-col items-center justify-center w-full'>
      <CountDown />
      <Input id='idInput' type='text' placeholder='estudar para a prova...'/>
      <div className='flex flex-col items-center justify-center w-full gap-5 my-10'>
        <p className='text-default font-bold'>
          Foque <span className='font-normal'>por</span> 25min
        </p>
        <Cycles/>
      </div>
      <Button icon={<CirclePlayIcon className='w-60 h-9'/>} title='Inicializar'/>
    </div>
  )
}