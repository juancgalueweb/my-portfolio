import Image from 'next/image'
import zustandLogo from 'public/zustand.png'

const ZustandBadge = () => {
  return (
    <Image
      src={zustandLogo}
      alt='AWS S3 Logo'
      className='w-11 h-11 rounded-full z-10 bg-slate-50'
    />
  )
}

export default ZustandBadge
