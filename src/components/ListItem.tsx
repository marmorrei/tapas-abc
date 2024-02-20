import { type FC, type ReactNode } from 'react'
import { Letter } from './Letter'

export type TListItem = {
  text: string
  letter: string
  children?: ReactNode
}

export const ListItem: FC<TListItem> = ({ text, letter, children }) => (
  <>
    <li className='flex flex-row items-start space-x-2'>
      <Letter letter={letter} size={8} />
      <p className='leading-tight pt-1'>{text}</p>
    </li>
    <div>{children}</div>
  </>
)
