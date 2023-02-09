import { Button } from 'flowbite-react'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Error404 from 'public/404-page-not-found.svg'
import { FaHome } from 'react-icons/fa'

export default function Custom404() {
  const router = useRouter()
  const title = 'Page not found'
  const description = 'Page to handle error 404: page not found'

  return (
    <>
      <Head>
        <title>{title}</title>
        {description && <meta name='description' content={description} />}
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='shortcut icon' href='favicon.png' type='image/x-icon' />
      </Head>
      <main className='bg-white dark:bg-[#101827] w-full mx-auto pt-10 min-h-screen'>
        <figure>
          <figcaption className='leading-relaxed text-gray-800 dark:text-slate-200 text-sm mt-2 font-extralight text-center'>
            <a
              href='https://storyset.com/web'
              target='_blank'
              rel='noopener noreferrer'
            >
              Web illustrations by Storyset
            </a>
          </figcaption>
          <Image
            src={Error404}
            alt='Error 404 image'
            className='max-w-3xl h-auto mx-auto'
          />
        </figure>
        <div className='max-w-3xl flex justify-between items-center my-10 mx-auto'>
          <Button gradientDuoTone='purpleToBlue' onClick={() => router.back()}>
            Volver
          </Button>
          <Button
            gradientDuoTone='greenToBlue'
            onClick={() => router.push('/')}
          >
            Regr&eacute;same a <FaHome className='inline text-xl ml-2' />
          </Button>
        </div>
      </main>
    </>
  )
}
