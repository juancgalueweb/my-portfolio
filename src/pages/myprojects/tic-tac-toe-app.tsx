import { NextPage } from 'next'
import { RiArrowRightSLine } from 'react-icons/ri'
import AppWrapper from '../components/AppWrapper'

const TicTacToeApp: NextPage = () => {
  const title = 'App de Tic Tac Toe'
  const description = 'Detalles del proyecto de Tic Tac Toe'

  return (
    <AppWrapper title={title} description={description}>
      <h3 className='m-3 text-3xl text-gray-900 dark:text-slate-200'>
        Proyectos <RiArrowRightSLine className='inline text-3xl' /> Tic Tac Toe
      </h3>
    </AppWrapper>
  )
}

export default TicTacToeApp
