import Image from 'next/image'
import AWSS3Logo from 'public/Amazon-S3-Logo.svg'
import ChromeLogo from 'public/chrome-logo.svg'
import JestLogo from 'public/jest-logo.svg'
import LinodeLogo from 'public/linode.svg'
import PlaywrightLogo from 'public/playwright-logo.svg'
import PythonLogo from 'public/python-logo.svg'
import SQliteLogo from 'public/Sqlite-square-icon.svg'
import OtherToolsPic from 'public/tools-for-web-design.webp'
import VimLogo from 'public/vim-logo.svg'
import { FC } from 'react'
import { AiFillGithub } from 'react-icons/ai'
import { BsTerminalFill } from 'react-icons/bs'
import {
  FaAws,
  FaBitbucket,
  FaDigitalOcean,
  FaDocker,
  FaGitSquare
} from 'react-icons/fa'
import {
  SiMacos,
  SiMaterialui,
  SiVercel,
  SiVisualstudio,
  SiVultr
} from 'react-icons/si'

const OtherTools: FC = () => {
  return (
    <div className='flex flex-col p-6 m-3 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 my-4 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 transition-all duration-300 dark:text-slate-200'>
      <h3 className='text-xl font-medium py-2 mb-4 text-center'>
        Otras herramientas &uacute;tiles para el desarrollo web
      </h3>
      <Image
        src={OtherToolsPic}
        alt='Other tools for web development image'
        placeholder='blur'
        className='rounded self-center w-[300px] h-auto mb-4'
      />
      <p className='indent-6 py-2 leading-relaxed text-gray-800 md:text-lg dark:text-slate-200'>
        Para el desarollo web es importante usar otras herramientas,
        tecnolog&iacute;as, saber hacer <i>deployment</i>, manejar editores de
        texto nativos de la terminal, usar herramientras para guardar objetos en
        la nube, para crear y probar las APIs de tus aplicaciones web, para
        hacer <i>debug</i> de tu c&oacute;digo, entre otros. A
        continuaci&oacute;n otras herramientas que tambi&eacute;n manejo:
      </p>
      <ul>
        <li className='text-gray-800 py-1 dark:text-slate-200 md:text-lg'>
          Front-end:
          <ul>
            <li className='ml-12'>Bootstrap</li>
            <li className='ml-12'>Sass</li>
            <li className='ml-6'>
              <SiMaterialui className='inline text-[#0A7BF7] mr-1' /> Material
              UI
            </li>
          </ul>
        </li>
        <li className='text-gray-800 py-1 dark:text-slate-200 md:text-lg'>
          Back-end:
          <ul>
            <li className='ml-6'>
              <Image
                src={SQliteLogo}
                alt='SqLite logo'
                className='inline mr-2 w-[17px] h-[17px]'
              />
              SQLite
            </li>
          </ul>
        </li>
        <li className='text-gray-800 py-1 dark:text-slate-200 md:text-lg'>
          Control de versiones:
          <ul>
            <li className='ml-6'>
              <FaGitSquare className='inline text-[#E74B1B] mr-2' />
              Git
            </li>
            <li className='ml-6'>
              <AiFillGithub className='inline text-black dark:text-white mr-2' />
              Github
            </li>
            <li className='ml-6'>
              <FaBitbucket className='inline text-[#2584FF] mr-2' />
              Bitbucket
            </li>
          </ul>
        </li>
        <li className='text-gray-800 py-1 dark:text-slate-200 md:text-lg'>
          Despliegue:
          <ul>
            <li className='ml-6'>
              <FaDocker className='inline text-[#0BA9D1] mr-2' />
              Docker y docker-compose
            </li>
            <li className='ml-6'>
              <FaAws className='inline text-[#E98610] dark:text-[#EB9D19] mr-2' />
              AWS
            </li>
            <li className='ml-6'>
              <FaDigitalOcean className='inline text-[#0A7AF2] mr-2' />
              Digital Ocean
            </li>
            <li className='ml-6'>
              <SiVultr className='inline text-[#0A75F0] dark:text-[#F2F2F2] mr-2' />
              Vultr
            </li>
            <li className='ml-6'>
              <SiVercel className='inline text-black dark:text-white mr-2' />
              Vercel
            </li>
            <li className='ml-6'>
              <Image
                src={LinodeLogo}
                alt='Linode logo'
                className='inline mr-2 w-[20px] h-[20px]'
              />
              Linode
            </li>
          </ul>
        </li>
        <li className='text-gray-800 py-1 dark:text-slate-200 md:text-lg'>
          Editores de texto:
          <ul>
            <li className='ml-6'>
              <SiVisualstudio className='inline text-[#0773C1] mr-2' />
              Visual Studio Code
            </li>
            <li className='ml-6'>
              <Image
                src={VimLogo}
                alt='Vim logo'
                className='inline mr-2 w-[20px] h-[20px]'
              />
              Vim
            </li>
          </ul>
        </li>

        <li className='text-gray-800 py-1 dark:text-slate-200 md:text-lg'>
          Sistema operativo para programar:
          <ul>
            <li className='ml-6'>
              <SiMacos className='inline mr-2' />
              Mac OS
            </li>
          </ul>
        </li>
        <li className='text-gray-800 py-1 dark:text-slate-200 md:text-lg'>
          Otro lenguaje:
          <ul>
            <li className='ml-6'>
              <Image
                src={PythonLogo}
                alt='Python logo'
                className='inline mr-2 w-[20px] h-[20px]'
              />
              Python
            </li>
          </ul>
        </li>
        <li className='text-gray-800 py-1 dark:text-slate-200 md:text-lg'>
          Otras herramientas:
          <ul>
            <li className='ml-6'>
              <BsTerminalFill className='inline mr-2' />
              Manejo de terminal en Mac OS y servidores como Ubuntu
            </li>
            <li className='ml-6'>
              <Image
                src={AWSS3Logo}
                alt='AWS s3 logo'
                className='inline mr-2 w-[20px] h-[20px]'
              />
              AWS s3 bucket
            </li>
            <li className='ml-6'>
              <Image
                src={JestLogo}
                alt='Jest logo'
                className='inline mr-2 w-[20px] h-[20px]'
              />
              Jest
            </li>
            <li className='ml-6'>
              <Image
                src={PlaywrightLogo}
                alt='Playwright logo'
                className='inline mr-2 w-[20px] h-[20px]'
              />
              Playwright
            </li>
            <li className='ml-6'>
              <Image
                src={ChromeLogo}
                alt='Google Chrome logo'
                className='inline mr-2 w-[20px] h-[20px]'
              />
              Chrome Element Inspector
            </li>
          </ul>
        </li>
      </ul>
    </div>
  )
}

export default OtherTools
