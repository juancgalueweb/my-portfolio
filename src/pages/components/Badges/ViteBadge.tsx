import Image from 'next/image'
import viteLogo from 'public/badges/vite.png'

const ViteBadge = () => {
  return (
    <Image
      src={viteLogo}
      alt='Open AI logo'
      className='w-11 h-11 rounded-full border border-gray-200 z-10 bg-slate-50 p-1'
      placeholder='blur'
    />
  )
}

export default ViteBadge
