import useTranslation from '@/hooks/useTranslation'
import { FC } from 'react'
import ChatApp from './IndividualProjects/ChatApp'
import CocktailsDBApp from './IndividualProjects/CocktailsDBApp'
import GoogleTranslateCloneApp from './IndividualProjects/GoogleTranslateCloneApp'
import HarryPotterQuiz from './IndividualProjects/HarryPotterQuiz'
import LibraryApp from './IndividualProjects/LibraryApp'
import MoviesApp from './IndividualProjects/MoviesApp'
import MyWinesApp from './IndividualProjects/MyWinesApp'
import ReadingList from './IndividualProjects/ReadingList'
import ShoppingCart from './IndividualProjects/ShoppingCart'
import TicTacToeApp from './IndividualProjects/TicTacToeApp'
import TodosApp from './IndividualProjects/TodosApp'

const Portfolio: FC = () => {
  const { t } = useTranslation()

  return (
    <>
      <h1 className='m-3 text-3xl text-teal-900 dark:text-[#20C997]'>
        {t('PORTFOLIO_H3')}
      </h1>
      <p className='indent-6 py-2 m-3 leading-relaxed text-gray-800 md:text-lg dark:text-slate-200'>
        {t('PROJECTS_INTRO')}
      </p>
      <div className='flex flex-col place-items-center lg:place-items-start gap-5 py-5 mt-5 lg:flex-row lg:flex-wrap'>
        <ChatApp />
        <ReadingList />
        <HarryPotterQuiz />
        <GoogleTranslateCloneApp />
        <TodosApp />
        <ShoppingCart />
        <MoviesApp />
        <TicTacToeApp />
        <CocktailsDBApp />
        <LibraryApp />
        <MyWinesApp />
      </div>
    </>
  )
}

export default Portfolio
