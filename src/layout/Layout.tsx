import { type FC, type ReactNode } from 'react'

export type TLayout = {
  children: ReactNode
}

export const Layout: FC<TLayout> = ({ children }) => (
  <main className='flex flex-col items-center justify-around h-auto w-screen py-6 space-y-8'>
    {children}
  </main>
)
