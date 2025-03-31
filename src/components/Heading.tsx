import { HistoryIcon, HouseIcon, MoonIcon, SettingsIcon, SunIcon, TimerIcon } from 'lucide-react'
import { Button } from './Button'
import { useState, useEffect } from 'react'

type AvailableThemes = 'dark'|'light'

export function Heading() {
  const [theme, setTheme] = useState<AvailableThemes>(() => {
    const storageTheme = localStorage.getItem('theme') as AvailableThemes || 'dark';
    return storageTheme
  });

  function handleThemeChange(){
    setTheme(prevTheme => {     
    return prevTheme === 'dark' ? 'light' : 'dark'
    })
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme)
  }, [theme])

  const nextThemeIcon = {
    dark: <SunIcon className='transition duration-5000'/>,
    light: <MoonIcon/>
  }

  return (
    <div className='flex flex-col items-center gap-10'>
      <div className='flex flex-col items-center text-primary cursor-pointer rounded-full'>
        <a><TimerIcon className='w-16 h-16 cursor-pointer'/></a>
        <h1 className='text-[2.70rem] font-bold'>Chronos</h1>
      </div>
      <div className='flex gap-4'>
        <Button icon = {<HouseIcon/>} title='Home'/>
        <Button icon = {<HistoryIcon/>} title='Histórico'/>
        <Button icon = {<SettingsIcon/>} title='Configurações'/>
        <Button icon = {nextThemeIcon[theme]} title='Tema' onClick={handleThemeChange}/>
      </div>
    </div>
  )
}
