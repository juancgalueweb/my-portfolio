import Image from 'next/image'
import plaiceholderLogo from 'public/badges/plaiceholderlogo.webp'

const PlaiceholderBadge = () => {
  return (
    <Image
      src={plaiceholderLogo}
      alt='Plaiceholder logo'
      className='w-11 h-11 rounded-full border border-gray-200 z-10 p-1 bg-white'
    />
  )
}

export default PlaiceholderBadge
