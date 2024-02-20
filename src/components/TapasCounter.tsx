import { useEffect, type FC, useState } from 'react'
import { useTapasContext } from '../context/TapasProvider'

export const TapasCounter: FC = () => {
  const { tapas, getTapas } = useTapasContext()
  const [tapasQuantity, setTapasQuantity] = useState(0)

  useEffect(() => {
    void getTapas()
    tapas != null ? setTapasQuantity(tapas.length) : setTapasQuantity(0)
  }, [tapas])

  return (
    <div
      className='flex justify-center bg-[#C12034] m-0 px-2 py-1 rounded
                      shadow-md shadow-black outline outline-[#4b0c14]'
    >
      <h1 className='text-white font-medium text-center'>
        Hay {tapasQuantity} tapa{tapasQuantity !== 1 && 's'} registrada
        {tapasQuantity !== 1 && 's'}
      </h1>
    </div>
  )
}
