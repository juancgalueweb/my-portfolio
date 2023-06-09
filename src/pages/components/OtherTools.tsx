import useTranslation from '@/hooks/useTranslation'
import Image from 'next/image'
import AWSS3Logo from 'public/Amazon-S3-Logo.svg'
import ChromeLogo from 'public/chrome-logo.svg'
import JestLogo from 'public/jest-logo.svg'
import LinodeLogo from 'public/linode.svg'
import PlaywrightLogo from 'public/playwright-logo.svg'
import PythonLogo from 'public/python-logo.svg'
import OtherToolsPic from 'public/room-amico.svg'
import SQliteLogo from 'public/Sqlite-square-icon.svg'
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
  SiMui,
  SiPostman,
  SiVercel,
  SiVisualstudio,
  SiVultr
} from 'react-icons/si'

const OtherTools: FC = () => {
  const { t } = useTranslation()
  return (
    <div className='flex flex-col p-6 m-3 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 my-4 dark:bg-gray-dark-mode-700 dark:border-gray-dark-mode-500 dark:hover:bg-gray-dark-mode-500 transition-all duration-300 dark:text-slate-200'>
      <h3 className='text-xl font-medium py-2 mb-4 text-center'>
        {t('OTHER_TOOLS_H3')}
      </h3>
      <figure className='self-center mb-6'>
        <Image
          src={OtherToolsPic}
          alt='Other tools for web development image'
          className='rounded w-[300px] h-auto mb-4'
        />
        <figcaption className='leading-relaxed text-gray-800 dark:text-slate-200 text-xs mt-2 font-extralight text-center'>
          <a
            href='https://storyset.com/web'
            target='_blank'
            rel='noopener noreferrer'
          >
            {t('SVG_CREDITS')}
          </a>
        </figcaption>
      </figure>
      <p className='indent-6 py-2 leading-relaxed text-gray-800 md:text-lg dark:text-slate-200'>
        {t('OTHER_TOOLS_P1')}
      </p>
      <ul>
        <li className='text-gray-800 py-1 dark:text-slate-200 md:text-lg'>
          Front-end:
          <ul>
            <li className='ml-12'>Bootstrap</li>
            <li className='ml-12'>Sass</li>
            <li className='ml-6'>
              <SiMui className='inline text-[#0A7BF7] mr-1' /> Material UI
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
          {t('OTHER_TOOLS_LI_3')}
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
          {t('OTHER_TOOLS_LI_4')}
          <ul>
            <li className='ml-6'>
              <FaDocker className='inline text-[#0BA9D1] mr-2' />
              {t('OTHER_TOOLS_LI_4_U_L1')}
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
          {t('OTHER_TOOLS_LI_5')}
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
          {t('OTHER_TOOLS_LI_6')}
          <ul>
            <li className='ml-6'>
              <SiMacos className='inline mr-2' />
              Mac OS
            </li>
          </ul>
        </li>
        <li className='text-gray-800 py-1 dark:text-slate-200 md:text-lg'>
          {t('OTHER_TOOLS_LI_7')}
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
          {t('OTHER_TOOLS_LI_8')}
          <ul>
            <li className='ml-6'>
              <BsTerminalFill className='inline mr-2' />
              {t('OTHER_TOOLS_LI_8_U_L1')}
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
            <li className='ml-6'>
              <SiPostman className='inline mr-2 text-[#F26634] text-xl' />
              Postman
            </li>
          </ul>
        </li>
      </ul>
    </div>
  )
}

export default OtherTools
