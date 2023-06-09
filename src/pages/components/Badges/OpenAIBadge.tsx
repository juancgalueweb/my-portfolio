import Image from 'next/image'
import openAI from 'public/badges/openai.svg'

const OpenAIBadge = () => {
  return (
    <Image
      src={openAI}
      alt='Open AI logo'
      className='w-11 h-11 rounded-full border border-gray-200 z-10 bg-slate-50 p-1'
    />
  )
}

export default OpenAIBadge
