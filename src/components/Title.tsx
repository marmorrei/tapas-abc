import { type FC } from 'react'

export type TTitle = {
  text: string
}

export const Title: FC<TTitle> = ({ text }) => (
  <div
    className='flex flex-col items-center rounded-lg p-3 w-5/6 space-y-2 shadow-black shadow-lg
                    bg-gradient-to-r from-[#1A3031] via-[#109076] to-[#1A3031]'
  >
    <div
      className='flex justify-center bg-[#C12034] m-0 px-1 py-1 rounded
                      shadow-md shadow-black outline outline-[#4b0c14]'
    >
      <h1 className='text-white font-medium text-center'>{text}</h1>
    </div>
    <div className='flex justify-center'>
      <img
        src='/a.png'
        alt='a'
        className='h-8 rounded-sm m-1 -rotate-3 shadow-black shadow-md'
      />
      <img
        src='/b.png'
        alt='b'
        className='h-8 rounded-sm m-1 rotate-6 shadow-black shadow-md'
      />
      <img
        src='/c.png'
        alt='c'
        className='h-8 rounded-sm m-1 -rotate-6 shadow-black shadow-md'
      />
    </div>
  </div>
)
