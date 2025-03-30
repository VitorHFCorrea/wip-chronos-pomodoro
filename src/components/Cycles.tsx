import { Cycle } from "./Cycle"

export function Cycles() {
  return (
    <div className="flex gap-2">
      <Cycle className='bg-primary'/>
      <Cycle className='bg-warning'/>
      <Cycle className='bg-primary'/>
      <Cycle className='bg-warning'/>
      <Cycle className='bg-primary'/>
      <Cycle className='bg-warning'/>
      <Cycle className='bg-primary'/>
      <Cycle className='bg-info'/>
    </div>
  )
}
