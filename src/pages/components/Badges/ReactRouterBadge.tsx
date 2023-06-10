import Image from 'next/image'
import reactRouterDomLogo from 'public/badges/react-router-dom.png'

const ReactRouterBadge = () => {
  return (
    <div className='w-11 h-11 rounded-full border border-gray-200 z-10 flex items-center justify-center bg-slate-50 p-1'>
      <Image
        src={reactRouterDomLogo}
        alt='React router dom logo'
        className='w-full h-full'
      />
    </div>
  )
}

export default ReactRouterBadge
