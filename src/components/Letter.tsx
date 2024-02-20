import { type FC } from 'react'

export type TLetter = {
  size: number
  letter: string
}

export const Letter: FC<TLetter> = ({ letter, size }) => (
  <img
    src={`../../${letter}.png`}
    alt={letter}
    className={`h-${size} rounded-sm m-1 shadow-black shadow-md`}
  />
)
