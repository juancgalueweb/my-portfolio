import { AnimatePresence, motion } from 'framer-motion'
import { useRouter } from 'next/router'
import { FC, PropsWithChildren } from 'react'

const Layout: FC<PropsWithChildren> = ({ children }) => {
  const router = useRouter()
  const variants = {
    hidden: { opacity: 0, x: 0, y: 20 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: -0, y: 20 }
  }

  return (
    <AnimatePresence mode='wait' initial={true}>
      <motion.section
        key={router.route}
        initial='hidden'
        animate='enter'
        exit='exit'
        variants={variants}
        transition={{ duration: 0.75, ease: 'backInOut' }}
        className='max-w-3xl mx-auto pt-10 min-h-screen'
      >
        {children}
      </motion.section>
    </AnimatePresence>
  )
}

export default Layout
