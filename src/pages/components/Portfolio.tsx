import { useTranslation } from '@/context/i18n'
import { FC } from 'react'
import CocktailsDBApp from './DemoProjects/CocktailsDBApp'
import LibraryApp from './DemoProjects/LibraryApp'
import MoviesApp from './DemoProjects/MoviesApp'
import MyWinesApp from './DemoProjects/MyWinesApp'
import ShoppingCartApp from './DemoProjects/ShoppingCart'
import TicTacToeApp from './DemoProjects/TicTacToeApp'

const Portfolio: FC = () => {
  const { t } = useTranslation()

  return (
    <>
      <h3 className='m-3 text-3xl text-gray-900 dark:text-slate-200'>
        {t('PORTFOLIO_H3')}
      </h3>
      <div className='flex flex-col place-items-start gap-5 py-5 lg:flex-row lg:flex-wrap'>
        <ShoppingCartApp />
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
