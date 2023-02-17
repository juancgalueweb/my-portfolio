import { motion } from 'framer-motion'
import { FC, PropsWithChildren } from 'react'

const Layout: FC<PropsWithChildren> = ({ children }) => {
  const variants = {
    hidden: { opacity: 0, x: 0, y: 20 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: -0, y: 20 }
  }

  return (
    <motion.div
      key='layout-wrapper'
      initial='hidden'
      animate='enter'
      exit='exit'
      variants={variants}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
      style={{ position: 'relative' }}
    >
      {children}
    </motion.div>
  )
}

export default Layout
