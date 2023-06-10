import Image from 'next/image'
import AntDesignLogo from 'public/ant-design.svg'

const AntDesignBadge = () => {
  return (
    <Image
      src={AntDesignLogo}
      alt='Ant design icon'
      className='w-11 h-11 rounded-full border border-gray-200 z-10 bg-slate-50 p-1'
    />
  )
}

export default AntDesignBadge
