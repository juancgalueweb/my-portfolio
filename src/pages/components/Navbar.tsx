import { FC } from 'react'
import { BsFillMoonStarsFill } from 'react-icons/bs'

export const Navbar: FC = () => {
  return (
    <section>
      <nav>
        <h1>Developed by JCG</h1>
        <ul>
          <li>
            <BsFillMoonStarsFill />
          </li>
          <li>
            <a href='#'>Resume</a>
          </li>
        </ul>
      </nav>
    </section>
  )
}
