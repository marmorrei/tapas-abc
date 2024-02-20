import { type ButtonHTMLAttributes, type FC } from 'react'

export type TButton = ButtonHTMLAttributes<HTMLButtonElement> & {
  text: string
}

export const Button: FC<TButton> = ({ text, ...rest }) => (
  <button
    className='btn bg-wood border-none shadow-lg shadow-black w-64 h-20 text-lg dark:text-black'
    {...rest}
  >
    {text}
  </button>
)
