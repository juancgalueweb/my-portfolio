import Image from 'next/image'
import awsS3Logo from 'public/Amazon-S3-Logo.svg'

const AWSS3Badge = () => {
  return (
    <Image
      src={awsS3Logo}
      alt='AWS S3 Logo'
      className='w-11 h-11 rounded-full border border-gray-200 z-10 bg-slate-50 p-1'
    />
  )
}

export default AWSS3Badge
