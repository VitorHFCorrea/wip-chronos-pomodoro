import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon, TimerIcon } from 'lucide-react'
import { Button } from './Button'

// type HeadingProps = {
//   children: React.ReactNode
// }

export function Heading() {
  return (
    <div className='flex flex-col items-center gap-10'>
      <div className='flex flex-col items-center text-primary cursor-pointer rounded-full'>
        <a><TimerIcon className='w-16 h-16 cursor-pointer'/></a>
        <h1 className='text-[2.70rem] font-bold'>Chronos</h1>
      </div>
      <div className='flex gap-4'>
        <Button icon = {<HouseIcon/>} />
        <Button icon = {<HistoryIcon/>}  />
        <Button icon = {<SettingsIcon/> } />
        <Button icon = {<SunIcon/>}  />
      </div>
    </div>
  )
}
